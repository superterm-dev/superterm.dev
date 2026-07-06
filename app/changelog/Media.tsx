// Renders an entry's media: zero, one, or many items. A grid kicks in beyond
// one. Items ending in an image extension render as <img>; anything else is
// treated as a clip base path resolving to .webm + .mp4 (+ .jpg poster).
// See content/changelog/README.md for the ffmpeg recipe.
const IMAGE_RE = /\.(png|jpe?g|gif|webp|avif|svg)$/i;

export function Media({ items }: { items: string[] }) {
  if (!items.length) return null;

  const multi = items.length > 1;
  const itemClass =
    "w-full rounded-xl border border-border-bright/50 ring-1 ring-white/[0.02]";

  return (
    <div className={multi ? "mt-5 grid sm:grid-cols-2 gap-3" : "mt-5"}>
      {items.map((src) =>
        IMAGE_RE.test(src) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            className={`${itemClass} ${multi ? "" : "max-w-md"}`}
          />
        ) : (
          <video
            key={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={`${src}.jpg`}
            className={`${itemClass} ${multi ? "" : "max-w-md"}`}
          >
            <source src={`${src}.webm`} type="video/webm" />
            <source src={`${src}.mp4`} type="video/mp4" />
          </video>
        ),
      )}
    </div>
  );
}
