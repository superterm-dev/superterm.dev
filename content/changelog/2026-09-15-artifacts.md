---
date: 2026-09-15
tag: New
title: Artifacts — an agent's work, beside its terminal
media: /media/artifacts-flash-next
---

An agent on a long job can now keep a page beside its terminal: a status
board, a report, a slide deck. It writes plain HTML into a folder that
belongs to its session, and superterm renders it next to the terminal on
desktop, split with a draggable divider, or over it on a phone, reloading
whenever the files change. The agent spends nothing on delivery; it writes
files.

In the clip, an agent brings Qwen3.8-Flash-Next up on a pair of DGX Sparks
while a readiness dashboard fills in beside it: the checkpoint staged and
relayed, vLLM up with a 3.65M-token KV cache, a health check, a benchmark
that draws its own chart. Then it writes a serving report as a second
artifact, and the picker lists both, newest first.

- `superterm artifact init status --title "Onboarding progress"` prints the
  folder; write `index.html` there and it appears.
- Several per session, listed newest first with their ages, and they survive
  the agent exiting.
- Open one on its own page, print it to a PDF that paginates, or download it:
  a single file as itself, a folder as a zip.
- Private to your superterm login, and only that. The page runs sandboxed,
  confined to its own origin: no cookie, no API, no way out.
- `superterm skill artifacts` tells an agent when and how to use it.
