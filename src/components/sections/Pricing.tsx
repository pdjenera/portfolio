import SectionLabel from "@/components/atoms/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import { tiers } from "@/lib/data";

function PricingCard({
  name,
  price,
  unit,
  description,
  features,
  featured,
  cta,
}: (typeof tiers)[number]) {
  return (
    <div
      className="bg-card border border-border px-[26px] py-[30px] flex flex-col gap-[18px] relative"
      style={
        featured
          ? {
              borderColor: "#2e7d52",
              boxShadow: "0 12px 34px rgba(0,0,0,0.08)",
            }
          : undefined
      }
    >
      {featured && (
        <div className="absolute -top-px -right-px font-heading text-[10px] tracking-[0.1em] uppercase bg-accent text-white px-[11px] py-[5px]">
          Popular
        </div>
      )}

      <div>
        <h3 className="font-heading font-semibold text-lg mb-3">{name}</h3>
        <div className="flex items-baseline gap-[7px]">
          <span className="font-heading font-bold text-[26px]">{price}</span>
          {unit && (
            <span className="font-heading text-xs text-muted">{unit}</span>
          )}
        </div>
        <p className="text-[13.5px] text-muted mt-2.5 mb-0 leading-[1.5]">
          {description}
        </p>
      </div>

      <div className="h-px bg-border" />

      <div className="flex flex-col gap-[11px]">
        {features.map((f) => (
          <div
            key={f}
            className="flex items-start gap-2.5 text-[13.5px] text-fg"
          >
            <span className="text-accent font-heading">&rarr;</span>
            <span>{f}</span>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="font-heading text-[13px] text-center py-3 mt-1.5 bg-transparent text-fg border border-fg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.16)]"
      >
        {cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <ScrollReveal>
      <section
        id="pricing"
        className="max-w-[1140px] mx-auto px-[26px] py-16 border-t border-border"
      >
        <SectionLabel>Pricing</SectionLabel>
        <h2 className="font-heading font-bold text-[30px] tracking-[-0.01em] mb-2.5 -mt-[22px]">
          Simple, project-based pricing
        </h2>
        <p className="text-[15px] text-muted mb-10">
          Starting points — every quote is tailored to your project. Maintenance
          available on all plans.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <PricingCard key={t.name} {...t} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
