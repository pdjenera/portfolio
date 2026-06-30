import SectionLabel from "@/components/atoms/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/lib/data";

function ServiceCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card px-7 py-[30px] transition-colors hover:bg-card2">
      <div className="font-heading text-[13px] text-accent mb-4">{number}</div>
      <h3 className="font-heading font-semibold text-[19px] mb-2.5">{title}</h3>
      <p className="text-[14.5px] leading-[1.6] text-muted m-0">
        {description}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <ScrollReveal>
      <section
        id="services"
        className="max-w-[1140px] mx-auto px-[26px] py-16 border-t border-border"
      >
        <SectionLabel>Services</SectionLabel>
        <h2 className="font-heading font-bold text-[30px] tracking-[-0.01em] mb-10 -mt-[22px]">
          What I can build for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {services.map((s) => (
            <ServiceCard
              key={s.number}
              number={s.number}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
