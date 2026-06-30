import SectionLabel from "@/components/atoms/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <ScrollReveal>
      <section
        id="about"
        className="max-w-[1140px] mx-auto px-[26px] py-16 border-t border-border"
      >
        <SectionLabel>About</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-[54px] items-stretch">
          {/* Headshot placeholder */}
          <div className="flex flex-col border border-border bg-card">
            <div className="flex items-center gap-[7px] px-[13px] py-2.5 border-b border-border">
              <span className="w-[9px] h-[9px] rounded-full bg-accent" />
              <span className="font-heading text-[11px] tracking-[0.08em] text-muted">
                headshot.jpg
              </span>
            </div>
            <div
              className="flex-1 min-h-[300px] flex flex-col items-center justify-center gap-3.5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #eef1ea, #eef1ea 11px, #fff 11px, #fff 22px)",
              }}
            >
              <div className="w-[72px] h-[72px] rounded-full border-[1.5px] border-muted flex items-center justify-center bg-card">
                <span className="font-heading text-[22px] text-muted">PD</span>
              </div>
              <span className="font-heading text-[11px] tracking-[0.1em] uppercase text-muted bg-card border border-border px-2.5 py-1">
                drop photo here
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading font-bold text-[30px] leading-[1.15] tracking-[-0.01em] mb-[22px]">
              A developer who sticks around.
            </h2>
            <div className="text-base leading-[1.7] text-muted flex flex-col gap-4">
              <p className="m-0">
                I work with businesses of every size to design and build exactly
                the website or web app they have in mind — from a clean one-page
                presence to a full custom application with the features your
                day-to-day actually needs.
              </p>
              <p className="m-0">
                I care about clean, fast, modern code and a process that&apos;s
                clear from the first call to launch. No jargon, no surprises, no
                disappearing once the invoice clears.
              </p>
              <p className="m-0 text-fg">
                And I don&apos;t stop at launch — I maintain every site I build,
                handling updates, fixes, and improvements whenever you need them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
