---
date: 2026-08-22
tag: Pro
title: Agent mail — second opinions without you in the loop
media: /media/superterm-agent-mail
---

Sessions can now mail each other: durable messages with threads, read
receipts, and a kernel-verified sender, stored on your server. A
doorbell types the exact read command into the recipient's composer,
so any agent knows what to do with no SDK and no glue code — and
`--await-reply` lets a sender block until the answer lands.

In the clip, one coding agent asks a second model for a design review
by mail, and gets it — while you watch, rather than relay.

Since then, addressing has grown pane-level precision: in a session
shared by two agents, `session.agent` reaches exactly one of them, and
replies come back pane-qualified automatically.
