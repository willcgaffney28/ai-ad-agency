import { promises as fs } from "fs";
import path from "path";
import seed from "@/data/seed-discussion.json";

/**
 * Discussion-board storage.
 *
 * For local development this writes to a JSON file on disk so posts
 * persist across requests and across server restarts. Seed posts are
 * copied in on first run.
 *
 * NOTE: this approach assumes a writable filesystem (works in `next dev`
 * and on any Node host). For read-only serverless deployments (e.g.
 * Vercel functions), swap `readPosts` / `writePosts` for a real
 * database — the rest of the app calls only those two functions.
 */

import type { Category, Post, Role } from "./discussion-types";

export type { Category, Post, Role } from "./discussion-types";

const ROLES: Role[] = ["Student", "Faculty", "Staff", "Alumni", "Other"];
const CATEGORIES: Category[] = ["thought", "classroom"];

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "discussion.json");

async function ensureFile(): Promise<void> {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(seed, null, 2), "utf8");
  }
}

export async function readPosts(): Promise<Post[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  const parsed = JSON.parse(raw) as Post[];
  return parsed.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

async function writePosts(posts: Post[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), "utf8");
}

export type CreatePostInput = {
  name?: string;
  role: string;
  category: string;
  body: string;
};

export type CreatePostResult =
  | { ok: true; post: Post }
  | { ok: false; error: string };

export async function createPost(
  input: CreatePostInput,
): Promise<CreatePostResult> {
  const name = (input.name ?? "").trim().slice(0, 60) || "Anonymous";
  const role = ROLES.includes(input.role as Role)
    ? (input.role as Role)
    : null;
  const category = CATEGORIES.includes(input.category as Category)
    ? (input.category as Category)
    : null;
  const body = (input.body ?? "").trim();

  if (!role) return { ok: false, error: "Pick your role." };
  if (!category) return { ok: false, error: "Pick a category." };
  if (body.length < 4)
    return { ok: false, error: "Say a little more — at least a sentence." };
  if (body.length > 1200)
    return {
      ok: false,
      error: "Trim to under 1,200 characters — short and pointed reads best.",
    };

  const post: Post = {
    id: `p-${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .slice(2, 8)}`,
    name,
    role,
    category,
    body,
    createdAt: new Date().toISOString(),
  };

  const existing = await readPosts();
  await writePosts([post, ...existing]);
  return { ok: true, post };
}

export const META = { ROLES, CATEGORIES };
