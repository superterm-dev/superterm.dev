# Changelog

One markdown file per entry. Filename is `YYYY-MM-DD-slug.md` (the date in
the filename is just for ordering on disk; the `date:` frontmatter is what
renders).

## Frontmatter

```yaml
---
date: 2026-06-30          # YYYY-MM-DD, shown on the entry
tag: Pro                  # New | Pro | Fix  → coloured pill
title: Short headline     # one line
media:                    # optional; zero, one, or many items
  - /media/my-feature     #   clip: base path → .webm + .mp4 (+ .jpg poster)
  - /media/before.png     #   image: full path with an image extension
draft: true               # optional; hidden in the production build
---

Body is plain markdown — a sentence, or a few paragraphs with **bold**,
`code`, [links](/pricing/), and lists.
```

`media` is a list, so an entry can have **no media, one item, or several**
(they lay out in a grid beyond one). Each item is either:

- a **clip** — a base path with no extension (`/media/x`), which resolves to
  `x.webm` + `x.mp4` and an optional `x.jpg` poster; or
- an **image** — a full path ending in `.png`, `.jpg`, `.gif`, `.webp`,
  `.avif`, or `.svg`.

A single item may also be written inline as `media: /media/x`. The older
`clip: /media/x` field still works as an alias.

Drafts (`draft: true`) show while running `next dev` so you can preview
them, and are excluded from `next build`. Flip to `draft: false` (or remove
the line) to publish.

## Clips

Keep them small: crop to the region, ≤720px wide, 12–15 fps, no audio,
output **both** webm and mp4. Drop the files in `/public/media/`.

```bash
# capture a region with Kooha (Wayland) or Peek (X11), then:

# web-optimised mp4
ffmpeg -i raw.mkv -vf "scale=600:-2,fps=15" \
  -c:v libx264 -crf 28 -preset veryslow -movflags +faststart -an my-feature.mp4

# smaller vp9 webm (served first, browser picks)
ffmpeg -i raw.mkv -vf "scale=600:-2,fps=15" \
  -c:v libvpx-vp9 -b:v 0 -crf 34 -an my-feature.webm

# poster (first frame), shown before the clip loads
ffmpeg -i my-feature.mp4 -vframes 1 my-feature.jpg
```

For "mobile" footage, record Chrome DevTools' device toolbar (e.g.
390×844) rather than a real phone — crisp, reproducible, and easy to crop.

The files currently in `/public/media/` are tiny generated **placeholders**
("PLACEHOLDER — record …"); replace them with real recordings.
