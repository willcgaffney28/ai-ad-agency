import type { ComponentType, SVGProps } from "react";
import {
  IconArch,
  IconCircleOfChairs,
  IconColumn,
  IconKeystone,
} from "@/components/motifs";

export type Example = {
  title: string;
  body: string;
};

export type Program = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  intro: string;
  examples: Example[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const programs: Program[] = [
  {
    slug: "build-ai-literacy",
    tag: "Skills",
    title: "Build AI Literacy",
    description:
      "Equip students and faculty across campus with the skills to use AI thoughtfully.",
    intro:
      "Literacy is more than knowing how to type a prompt. We treat it as a habit of mind — knowing when to reach for an AI tool, when to set it aside, and how to question what it gives back. The work begins in conversation.",
    examples: [
      {
        title: "Peer tutoring on AI use",
        body: "RWIT-style peer tutors trained to help students think through AI in their writing and research process, not to police it.",
      },
      {
        title: "A walk-in AI literacy hub",
        body: "An always-on space inside Agora with quick references, prompt libraries, and case studies from across disciplines, curated by students and faculty together.",
      },
      {
        title: "Faculty workshops",
        body: "Working sessions where instructors can sit with their actual syllabi and decide, course by course, how AI fits — or doesn't.",
      },
      {
        title: "Open hours",
        body: "Drop-in time where students bring a real assignment and work through the AI questions it raises out loud, with peers and faculty in the room.",
      },
    ],
    Icon: IconColumn,
  },
  {
    slug: "support-ai-research",
    tag: "Research",
    title: "Support AI Research",
    description:
      "Fund and connect academic exploration of AI across disciplines.",
    intro:
      "Good thinking about AI is already happening across Dartmouth — in classics, in biology, in studio art. Agora's job is to find that work, fund it where useful, and put it in the same room.",
    examples: [
      {
        title: "Faculty seed grants",
        body: "Small, fast grants for professors exploring AI questions inside their own field, with light reporting and a presumption of trust.",
      },
      {
        title: "Undergraduate research pairings",
        body: "Matching curious students with faculty who need a thinking partner — across every division, not just computer science and engineering.",
      },
      {
        title: "A termly research showcase",
        body: "An open evening each term where projects from anywhere on campus get a hearing. The sciences and humanities sharing one stage.",
      },
      {
        title: "Reading groups",
        body: "Small, low-commitment circles around new papers, open to anyone who wants to read them carefully and talk them through.",
      },
    ],
    Icon: IconKeystone,
  },
  {
    slug: "prototype-solutions",
    tag: "Innovation",
    title: "Prototype Solutions",
    description:
      "Generate and pilot tools that help students and professors harness rapidly evolving technology.",
    intro:
      "Some questions only become tractable once you have built something. Agora is a place to try, share what works, and quietly retire what doesn't.",
    examples: [
      {
        title: "A student-submitted idea queue",
        body: "Anyone can propose a tool that would make their classes, research, or coursework better. The room reads the queue and decides what to build next.",
      },
      {
        title: "Pilot AI workshop program",
        body: "Short, focused workshops co-taught by students and faculty, each testing a single idea about how to teach or learn with AI.",
      },
      {
        title: "Small-batch tool development",
        body: "Short builds that solve one specific teaching or learning problem, released to a few classes and revised in public.",
      },
      {
        title: "Critique sessions",
        body: "Prototypes get stress-tested by the people they are meant for. Honest feedback, no pitch decks.",
      },
    ],
    Icon: IconArch,
  },
  {
    slug: "widen-the-conversation",
    tag: "Discussion",
    title: "Widen the Conversation",
    description:
      "Bring diverse perspectives into AI conversations on campus.",
    intro:
      "The conversation about AI gets stuck when it stays inside the disciplines that make the tools. Agora invites in everyone who has to live with them.",
    examples: [
      {
        title: "Open forums",
        body: "Topic nights on questions like academic integrity, AI in the humanities, or what counts as expertise now. All majors welcome.",
      },
      {
        title: "Speaker series",
        body: "Visitors from inside and outside the academy — writers, lawyers, teachers, artists — sharing how AI lands in their work.",
      },
      {
        title: "Cross-disciplinary panels",
        body: "Two or three faculty who would rarely share a stage, on one shared question about AI in their respective fields.",
      },
      {
        title: "Talk-it-out hours",
        body: "Open hours where anyone can drop in to think aloud with the Agora team — no agenda required.",
      },
    ],
    Icon: IconCircleOfChairs,
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getAdjacentPrograms(slug: string) {
  return programs.filter((p) => p.slug !== slug);
}
