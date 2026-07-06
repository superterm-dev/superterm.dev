---
date: 2026-07-06
tag: Fix
title: Calmer readback, dictation without a GPU
---

Dictation runs on CPU by default — no GPU required — so speech-to-text
works on any machine, with a GPU an optional speed-up rather than a
prerequisite. The readback overlay swaps its sweeping flash for a calm
accent border while speaking (the level bars carry the motion), and a
new `speech.readback_speed` setting (0.5–2.0) controls the pace of
spoken summaries.
