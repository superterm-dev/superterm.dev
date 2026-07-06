---
date: 2026-07-04
tag: Pro
title: Screen readback — hear what your agent is up to
---

Ask superterm to read a session back to you: it summarises what's on
the agent's screen and speaks it aloud, so you can catch up on a run
without wading through scrollback.

The summary comes from the polish LLM you already configured for
dictation, and it scales to the content — dense screens keep their
substance rather than being squashed into a headline. Voice is an
optional extra via a text-to-speech endpoint (Kokoro works well);
without one, the summary arrives as text instead.
