import SectionLabel from "@/components/atoms/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import { reviews } from "@/lib/data";

function ReviewCard({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="m-0 bg-card border border-border p-[26px] flex flex-col gap-[18px]">
      <div className="font-heading text-[32px] text-accent leading-[0.5] h-[18px]">
        &ldquo;
      </div>
      <blockquote className="m-0 text-[15px] leading-[1.6] text-fg">
        {quote}
      </blockquote>
      <figcaption className="font-heading text-xs text-muted mt-auto">
        — {author}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <ScrollReveal>
      <section
        id="reviews"
        className="max-w-[1140px] mx-auto px-[26px] py-16 border-t border-border"
      >
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="font-heading font-bold text-[30px] tracking-[-0.01em] mb-10 -mt-[22px]">
          What clients say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <ReviewCard key={r.author} quote={r.quote} author={r.author} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
