import type { Metadata } from "next";

import { ProductsCatalogue } from "@/components/pages/products-catalogue";
import { CtaStrip } from "@/components/sections/cta-strip";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Products & Solutions | Chimpex International",
  description:
    "Explore laboratory and industrial solutions from Chimpex International including measurement systems, electronics tools, safety technologies, and engineering equipment.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Solutions"
        title="Solution-oriented technical portfolio for laboratories, R&D, and industrial buyers"
        description="The products and solutions portfolio is presented by use case, category, and industry relevance to support faster quotation and procurement discussions."
      />
      <section className="bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <ProductsCatalogue />
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
