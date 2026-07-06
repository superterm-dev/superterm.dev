---
date: 2026-06-17
tag: Fix
title: Lighter on your CPU
---

Background monitoring got a lot cheaper. tmux pane queries are batched
into a single `list-panes` call, process sampling now uses a cached
gopsutil sampler instead of forking `ps`, and superterm skips the tmux
inventory entirely when you have no sessions running. Less fan noise,
more battery.
