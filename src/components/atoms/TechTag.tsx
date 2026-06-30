"use client";

export default function TechTag({ children }: { children: string }) {
  return (
    <span className="font-heading text-[13.5px] text-fg bg-card border border-border px-[15px] py-[9px] transition-colors hover:border-accent hover:text-accent">
      {children}
    </span>
  );
}
