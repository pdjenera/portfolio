import SectionLabel from "@/components/atoms/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import { steps } from "@/lib/data";

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-t-2 border-accent pt-4">
      <div className="font-heading text-[13px] text-accent mb-3">{number}</div>
      <h3 className="font-heading font-semibold text-base mb-[9px]">{title}</h3>
      <p className="text-[13px] leading-[1.55] text-muted m-0">{description}</p>
    </div>
  );
}

export default function Process() {
  return (
    <ScrollReveal>
      <section
        id="process"
        className="max-w-[1140px] mx-auto px-[26px] py-16 border-t border-border"
      >
        <SectionLabel>Process</SectionLabel>
        <h2 className="font-heading font-bold text-[30px] tracking-[-0.01em] mb-10 -mt-[22px]">
          How we&apos;ll work together
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[18px]">
          {steps.map((st) => (
            <StepCard
              key={st.number}
              number={st.number}
              title={st.title}
              description={st.description}
            />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
