"use client";

import StatusDot from "@/components/atoms/StatusDot";

const links = [
  { href: "#about", label: "about" },
  { href: "#services", label: "services" },
  { href: "#work", label: "work" },
  { href: "#pricing", label: "pricing" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between gap-4 px-[26px] py-3.5 border-b border-border backdrop-blur-[10px] bg-bg/86">
      <a
        href="#top"
        className="flex items-center gap-2.5 font-heading font-bold text-sm tracking-[0.02em]"
      >
        <StatusDot size={9} />
        <span>P. Djeneralovic</span>
      </a>
      <div className="flex items-center gap-[22px] font-heading text-[12.5px] tracking-[0.02em]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted transition-colors hover:text-fg"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="text-fg border border-fg px-3.5 py-[7px] transition-colors hover:bg-fg hover:text-bg"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
