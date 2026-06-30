import SectionLabel from "@/components/atoms/SectionLabel";
import TechTag from "@/components/atoms/TechTag";
import ScrollReveal from "@/components/ScrollReveal";
import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <ScrollReveal>
      <section
        id="stack"
        className="max-w-[1140px] mx-auto px-[26px] py-16 border-t border-border"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <div>
            <SectionLabel>Stack</SectionLabel>
            <h2 className="font-heading font-bold text-[30px] tracking-[-0.01em] mb-3.5 -mt-[22px]">
              Tools of the trade
            </h2>
            <p className="text-[15px] leading-[1.65] text-muted m-0">
              Modern, battle-tested technologies — chosen for speed,
              reliability, and easy maintenance.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
