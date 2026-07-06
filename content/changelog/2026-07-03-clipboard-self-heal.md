---
date: 2026-07-03
tag: Fix
title: Clipboard copy that repairs itself
---

Copying out of full-screen TUIs depends on tmux's `set-clipboard`
option, which could silently end up off if tmux started before
superterm wrote its config. superterm now verifies the live tmux server
on start and re-applies its settings whenever they disagree — so copy
from TUIs keeps working without a manual restart.
