import StatusDot from "@/components/atoms/StatusDot";

function TerminalCard() {
  return (
    <div className="bg-card border border-border shadow-[0_14px_40px_rgba(0,0,0,0.08)] font-heading text-[13px] leading-[1.85]">
      <div className="flex items-center gap-[7px] px-3.5 py-[11px] border-b border-border">
        <span className="w-[11px] h-[11px] rounded-full bg-[#e0635a]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#e3b341]" />
        <span className="w-[11px] h-[11px] rounded-full bg-accent" />
        <span className="ml-2 text-[11px] text-muted">peter.config.ts</span>
      </div>
      <div className="px-[18px] pt-[18px] pb-[22px]">
        <div className="text-muted">{"// freelance developer"}</div>
        <div>
          <span className="text-accent2">const</span>{" "}
          <span className="text-accent">peter</span> = {"{"}
        </div>
        <div className="pl-5">
          role: <span className="text-accent2">&quot;full-stack dev&quot;</span>,
        </div>
        <div className="pl-5">
          stack: [<span className="text-accent2">&quot;Next.js&quot;</span>,{" "}
          <span className="text-accent2">&quot;React&quot;</span>],
        </div>
        <div className="pl-5">
          builds:{" "}
          <span className="text-accent2">
            &quot;anything you need&quot;
          </span>
          ,
        </div>
        <div className="pl-5">
          maintains: <span className="text-accent">true</span>,
        </div>
        <div>{"}"}</div>
        <div className="mt-2.5 text-muted">
          ${" "}
          <span className="text-fg">deploy --prod</span>
          <span
            className="inline-block w-2 h-[15px] bg-accent ml-1 align-[-2px]"
            style={{ animation: "blink 1.1s steps(1) infinite" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header
      id="top"
      className="max-w-[1140px] mx-auto px-[26px] pt-[78px] pb-16 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[54px] items-center"
    >
      <div style={{ animation: "float-in 0.7s ease both" }}>
        <div className="inline-flex items-center gap-[9px] font-heading text-xs tracking-[0.04em] text-accent border border-border px-3 py-1.5 bg-card mb-[26px]">
          <StatusDot size={7} animate />
          available for new projects
        </div>
        <h1 className="font-heading font-bold text-[54px] leading-[1.04] tracking-[-0.02em] m-0 mb-[22px] text-balance">
          Websites &amp; web apps,
          <br />
          built and <span className="text-accent">maintained</span> for your
          business.
        </h1>
        <p className="text-[16.5px] leading-[1.65] text-muted max-w-[480px] mb-8">
          I&apos;m Peter — a freelance software developer. I design, build, and
          look after fast, reliable websites and web applications, so you can
          focus on running your business.
        </p>
        <div className="flex gap-3.5 flex-wrap">
          <a
            href="#contact"
            className="font-heading text-[13.5px] font-medium tracking-[0.01em] px-[22px] py-3.5 bg-transparent text-fg border border-fg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.16)]"
          >
            Start a project &rarr;
          </a>
          <a
            href="#work"
            className="font-heading text-[13.5px] font-medium tracking-[0.01em] px-[22px] py-3.5 bg-card text-fg border border-border transition-colors hover:border-fg"
          >
            View work
          </a>
        </div>
      </div>

      <div
        className="hidden lg:block"
        style={{ animation: "float-in 0.9s ease both" }}
      >
        <TerminalCard />
      </div>
    </header>
  );
}
