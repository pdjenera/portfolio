export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2.5 font-heading text-xs tracking-[0.18em] uppercase mb-9">
      <span className="text-accent">{"//"}</span>
      <span className="text-muted">{children}</span>
    </div>
  );
}
