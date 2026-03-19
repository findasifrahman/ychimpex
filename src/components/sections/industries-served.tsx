import { industries } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function IndustriesServed() {
  return (
    <section className="border-y border-slate-200 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Aligned with research, infrastructure, safety, and product development programs"
          description="Chimpex International supports the procurement context of universities, laboratories, industrial plants, infrastructure projects, and innovation-led engineering teams."
          tone="light"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((industry, index) => (
            <Reveal key={industry} delay={index * 0.03}>
              <div className="rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-slate-200">
                {industry}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
