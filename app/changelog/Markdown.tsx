import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Renders changelog body markdown with the site's dark theme. No tailwind
// typography plugin in this project, so element styles are mapped here.
export function Markdown({ children }: { children: string }) {
  return (
    <div className="text-[15px] text-text-muted leading-relaxed space-y-3">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p>{children}</p>,
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-accent/90 underline underline-offset-2 hover:text-accent"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-text">{children}</strong>
          ),
          code: ({ children }) => (
            <code className="font-mono text-[13px] text-accent/85 bg-bg/40 px-1 py-0.5 rounded border border-border-bright/40">
              {children}
            </code>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 space-y-1.5">{children}</ul>
          ),
          li: ({ children }) => <li>{children}</li>,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
