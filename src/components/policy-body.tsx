import Link from "next/link";
import type { ReactNode } from "react";
import type { PolicyBlock, PolicySection } from "@/content/policies";
import { DataTable } from "./ui";

/**
 * Chuỗi nội dung chính sách dùng cú pháp rút gọn: **in đậm** và [nhãn](href).
 * Hàm này dựng thành React node, không dùng dangerouslySetInnerHTML.
 */
function renderInline(text: string): ReactNode[] {
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [full, bold, linkLabel, linkHref] = match;
    if (bold !== undefined) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-brand-900">
          {bold}
        </strong>,
      );
    } else if (linkLabel !== undefined && linkHref !== undefined) {
      nodes.push(
        <Link
          key={match.index}
          href={linkHref}
          className="font-medium text-brand-600 underline hover:text-brand-700"
        >
          {linkLabel}
        </Link>,
      );
    }
    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function Block({ block }: { block: PolicyBlock }) {
  switch (block.kind) {
    case "text":
      return <p className="text-lg leading-relaxed">{renderInline(block.text)}</p>;

    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "ordered":
      return (
        <ol className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-base font-semibold text-brand-700"
              >
                {i + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );

    case "table":
      return <DataTable headers={block.headers} rows={block.rows} />;

    case "quote":
      return (
        <div className="rounded-2xl border-l-4 border-brand-500 bg-brand-50 px-5 py-4">
          {block.lines.map((line, i) => (
            <p
              key={line}
              className={`text-lg leading-relaxed ${i === 0 ? "font-semibold text-brand-900" : "text-muted"}`}
            >
              {renderInline(line)}
            </p>
          ))}
        </div>
      );
  }
}

export function PolicyBody({ sections }: { sections: PolicySection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.number} id={`muc-${section.number}`} className="scroll-mt-24">
          <h2 className="text-xl font-bold text-brand-900 sm:text-2xl">
            <span className="text-brand-500">{section.number}.</span>{" "}
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
