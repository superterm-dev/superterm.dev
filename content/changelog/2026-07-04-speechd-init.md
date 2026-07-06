---
date: 2026-07-04
tag: New
title: Set up dictation with one command
---

`superterm speechd init` takes local transcription from a hand-built
Python environment to a single command: it checks prerequisites, prints
the exact install commands for anything missing, creates the
environment, and writes a ready-to-run config.

The default engine is now **ONNX** — a ~250 MB, CPU-only setup that
transcribes a 96-second dictation in about 2 seconds, no GPU required.
Got one anyway? init spots it and recommends `--gpu`. Add `--systemd`
to install everything as user services that survive a reboot, and if
you already run llama-server or vLLM for another model, the polish
step can point at that endpoint instead of needing its own.
