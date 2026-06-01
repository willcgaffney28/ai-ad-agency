"use server";

import { revalidatePath } from "next/cache";
import { createPost } from "@/lib/discussion";

export type SubmitState = {
  ok: boolean;
  error: string | null;
  ts: number;
};

export async function submitPost(
  _prev: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  const result = await createPost({
    name: formData.get("name")?.toString(),
    role: formData.get("role")?.toString() ?? "",
    category: formData.get("category")?.toString() ?? "",
    body: formData.get("body")?.toString() ?? "",
  });

  if (!result.ok) {
    return { ok: false, error: result.error, ts: Date.now() };
  }

  revalidatePath("/discussion");
  return { ok: true, error: null, ts: Date.now() };
}
