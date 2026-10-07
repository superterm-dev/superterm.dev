---
date: 2026-10-07
tag: New
title: Focusing on the impact with Artifacts + Dictation
media: /media/superterm-dictation-artifacts
audio: true
---

Say what you want, end with "send it", and get back to thinking about the
result instead of the keystrokes. Dictation goes straight into the coding
agent in front of you, and when the work is better read as a page than as
scrollback, the agent writes it up as a superterm artifact beside the
terminal.

**Sound on for this one.** The clip starts from an empty superterm: a new
session, a clone of the SlicerVM agent skills, and opencode on Qwen3.8 27B.
Two spoken requests follow. The first asks for an audit of the skills,
written up as an artifact with a summary and a table of findings. The second
corrects it with something only the person knows, and asks for the fixes.
Nine files change, and the artifact updates itself to match. The narration
and the dictated lines are Alex's cloned voice; he didn't record them.
Dictation is self-hosted (Parakeet plus a polish model), silent waits for
the model are sped up and labelled, and everything spoken plays in real
time.

- Ctrl+Alt+M (Cmd+Option+M on a Mac) starts dictation in any session.
- End with "send it" and it is sent: no click, no Enter.
- The polished text is shown before it goes, so you can see what was heard.
- Agents write artifacts with `superterm artifact init`: reports, status
  boards, and decks that render beside the terminal and refresh as they
  change.
- Open an artifact full width when it deserves the whole screen.
