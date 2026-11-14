import type { ReactNode } from "react";

interface SectionHeadProps {
  tag: string;
  title: ReactNode;
  sub?: string;
}

export default function SectionHead({ tag, title, sub }: SectionHeadProps) {
  return (
    <div className="sec-head">
      <span className="sec-tag">{tag}</span>
      <h2 className="sec-title">{title}</h2>
      {sub ? <p className="sec-sub">{sub}</p> : null}
    </div>
  );
}
