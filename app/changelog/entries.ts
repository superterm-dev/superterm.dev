import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Tag = "New" | "Pro" | "Fix";

export type Entry = {
  slug: string;
  date: string; // YYYY-MM-DD
  tag: Tag;
  title: string;
  // Zero or more media items. A clip is a base path ("/media/queued-send")
  // resolving to .webm + .mp4; an image is a full path ("/media/x.png").
  media: string[];
  body: string; // raw markdown
};

// Accept `media` as a YAML list or single string, or the legacy `clip` field.
function normaliseMedia(data: Record<string, unknown>): string[] {
  const raw = data.media ?? data.clip;
  if (Array.isArray(raw)) return raw.map(String);
  if (raw) return [String(raw)];
  return [];
}

const CONTENT_DIR = path.join(process.cwd(), "content", "changelog");

// Drafts are visible while running `next dev`, hidden in the production build.
const showDrafts = process.env.NODE_ENV !== "production";

export function getEntries(): Entry[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md");

  const entries = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);

    const date =
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date);

    return {
      slug: file.replace(/\.md$/, ""),
      date,
      tag: (data.tag as Tag) ?? "New",
      title: String(data.title ?? ""),
      media: normaliseMedia(data),
      body: content.trim(),
      draft: data.draft === true,
    };
  });

  return entries
    .filter((e) => showDrafts || !e.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .map(({ draft: _draft, ...e }) => e);
}
