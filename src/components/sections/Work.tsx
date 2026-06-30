import Image from "next/image";
import SectionLabel from "@/components/atoms/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/lib/data";

function ProjectCard({
  name,
  category,
  description,
  tags,
  image,
  url,
  isLive,
}: (typeof projects)[number]) {
  return (
    <a
      href={url}
      target={isLive ? "_blank" : undefined}
      rel={isLive ? "noopener noreferrer" : undefined}
      className="flex flex-col bg-card border border-border transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)]"
    >
      {isLive ? (
        <div className="aspect-[16/11] overflow-hidden border-b border-border relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div
          className="aspect-[16/11] border-b border-border flex items-center justify-center"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #f1f3ed, #f1f3ed 10px, #fff 10px, #fff 20px)",
          }}
        >
          <span className="font-heading text-xs tracking-[0.1em] text-muted uppercase">
            + new project
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col gap-[9px] flex-1">
        <div className="font-heading text-[11px] tracking-[0.1em] uppercase text-accent">
          {category}
        </div>
        <h3 className="font-heading font-semibold text-lg m-0 flex items-center gap-2">
          {name} <span className="text-muted font-normal">&nearr;</span>
        </h3>
        <p className="text-[13.5px] leading-[1.55] text-muted my-0.5 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-heading text-[10.5px] tracking-[0.04em] text-muted border border-border px-2 py-[3px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <ScrollReveal>
      <section
        id="work"
        className="max-w-[1140px] mx-auto px-[26px] py-16 border-t border-border"
      >
        <SectionLabel>Selected Work</SectionLabel>
        <h2 className="font-heading font-bold text-[30px] tracking-[-0.01em] mb-10 -mt-[22px]">
          Recent projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
