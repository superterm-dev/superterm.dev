---
date: 2026-10-07
tag: New
title: Talk to your agents, and hear them answer
media: /media/superterm-voice-agents
audio: true
---

Turn on voice mode in a chat and talk to the agents doing your work. Ask
what they are up to, tell one what to do next, and get a second opinion
from another model, without touching the keyboard. When an agent you set
to work mails back that it is done, superterm says so aloud, unprompted.

**Sound on for this one.** In the clip, superterm runs in a Slicer VM with
two opencode agents. The chat runs on GLM-5.3 Flash, the second opinion is
DeepSeek V4 Flash, and the speech is self-hosted: Parakeet listens, Kokoro
answers. The person's lines are Alex's own voice, cloned from an 18-second
recording; he didn't record them. Silent waits for the models are sped up
and labelled; everything spoken plays in real time.

- Ask what your agents are doing, and hear a summary read from their panes.
- Hand an agent a job by voice. Its report comes back as mail, and is
  spoken the moment it arrives.
- "Let's get a second opinion": the chat asks another model and gives you
  its answer, marked as that model's.
- Talk over a reply to interrupt it. Mute, Skip, and End sit beside the
  voice strip, and a conversation left silent checks in, then hangs up.
- Speech stays on your own hardware: `superterm speechd init` sets up the
  speech-to-text and the voice.
