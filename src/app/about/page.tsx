import type { Metadata } from "next";

import { CompanyIntro } from "@/components/sections/company-intro";
import { CtaStrip } from "@/components/sections/cta-strip";
import { IndustriesServed } from "@/components/sections/industries-served";
import { MissionVision } from "@/components/sections/mission-vision";
import { WhyChimpex } from "@/components/sections/why-chimpex";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "About | Chimpex International",
  description:
    "Learn about Chimpex International Co., Limited, its sourcing philosophy, mission, vision, and approach to laboratory and industrial equipment procurement.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Chimpex"
        title="Organized sourcing support for scientific, technical, and industrial procurement"
        description="Chimpex International Co., Limited presents itself as a Hong Kong based sourcing and supply company connecting buyers with documented manufacturer support, technical product categories, and structured procurement engagement."
      />
      <CompanyIntro />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Sourcing Philosophy"
            title="Clarity, documentation, and category depth"
            description="The company approach is to position brands accurately, support institutional procurement with the right documentation path, and handle technical product requirements with organized sourcing communication rather than generic catalog language."
          />
        </div>
      </section>
      <MissionVision />
      <WhyChimpex />
      <IndustriesServed />
      <CtaStrip />
    </>
  );
}
