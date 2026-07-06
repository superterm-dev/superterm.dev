---
date: 2026-07-02
tag: New
title: Talk to your agents — voice dictation
---

Dictate to a session instead of typing. Speech streams over the
WebSocket and is transcribed live, with a preview you can edit before it
sends — handy on mobile, or when a prompt is faster spoken than typed.

Since the first cut, the whole flow has been hardened for daily use.
Previews now transcribe the full recording, so what you see converges on
the final text, and your manual edits are never overwritten by a late
result. The review toast is down to three actions — **Cancel**, **Add**,
and **Send** — where Add dictates a further segment onto what you've
already reviewed, so a long prompt no longer has to land in one take.

Under the hood, transcription moved to **Parakeet TDT 0.6B**, which
emits punctuated, capitalised text natively, and the polish step now
refuses to drop terms like `MCP` from a correct transcript. It's
private by default: audio is transcribed on your own machine and never
leaves it — no cloud, no API keys, no third parties.
