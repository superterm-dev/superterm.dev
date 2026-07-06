---
date: 2026-07-06
tag: Fix
title: Calmer readback, steadier dictation
---

The dictation review sheet no longer reappears after you've sent — a
trailing polish result could resurrect it with stale text. The readback
overlay swaps its sweeping flash for a calm accent border while
speaking (the level bars carry the motion), and a new
`speech.readback_speed` setting (0.5–2.0) controls the pace of spoken
summaries.
