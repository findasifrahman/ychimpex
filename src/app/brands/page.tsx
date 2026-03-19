import type { Metadata } from "next";

import { BrandsCatalogue } from "@/components/pages/brands-catalogue";
import { CtaStrip } from "@/components/sections/cta-strip";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Brands & Partners | Chimpex International",
  description:
    "Explore documented brand partners and featured product portfolio areas supported by Chimpex International Co., Limited.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands & Partners"
        title="Documented brand partners and a broader representative product portfolio"
        description="Authorized brands are separated clearly from featured solution and product references so institutional buyers and procurement teams can review the portfolio with confidence."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <BrandsCatalogue />
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
