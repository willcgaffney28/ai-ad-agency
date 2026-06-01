# Agora

A multi-section landing page for **Agora**, a collaborative center at Dartmouth College focused on AI literacy, research, and innovation. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with custom color tokens (`warm-white`, `terracotta`, `cobalt`, `sage`, `stone`, `charcoal`)
- Fonts via `next/font/google` — Cormorant Garamond (serif headings) and Inter (sans body)
- Framer Motion for gentle on-scroll fade-in animations
- Inline SVG architectural motifs (columns, arches, keystones) used as low-opacity texture

## Structure

- `src/app/page.tsx` — assembles the page sections in order
- `src/components/sections/*` — Hero, Mission, Values, Objectives, Space, Footer
- `src/components/motifs.tsx` — reusable architectural SVGs
- `src/components/{Button,Section,FadeIn,Nav}.tsx` — shared UI primitives

The page is static — no backend, no CMS, no client data fetching. Everything renders at build time.
