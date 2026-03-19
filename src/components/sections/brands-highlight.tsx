import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { authorizedBrands, featuredBrands } from "@/data/site";
import { BrandLogo } from "@/components/shared/brand-logo";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function BrandsHighlight() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl space-y-14 px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Brands & Partners"
          title="Documented brand relationships and a broader technical portfolio"
          description="Authorized brands are presented separately from the wider representative product portfolio to preserve clarity and content accuracy."
        />

        <div className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-slate-950">
                Authorized / Documented Brand Partners
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Supported by uploaded authorization letters and shown with a stronger trust presentation.
              </p>
            </div>
            <Link
              href="/authorization-letters"
              className="hidden items-center gap-2 text-sm font-semibold text-cyan-700 md:inline-flex"
            >
              Review Letters
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {authorizedBrands.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.05}>
                <Card className="group h-full border-cyan-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fdff_100%)] hover:-translate-y-1">
                  <CardContent className="flex h-full flex-col gap-5 p-7">
                    <div className="flex items-start justify-between gap-4">
                      <BrandLogo
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        mode={brand.logoMode}
                        className="w-full max-w-[220px]"
                      />
                      <Badge variant="success">{brand.badge}</Badge>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-slate-950">{brand.name}</h4>
                      <p className="text-sm font-medium text-cyan-700">{brand.category}</p>
                      <p className="text-sm leading-7 text-slate-600">{brand.description}</p>
                    </div>
                    <Link
                      href={brand.href}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                    >
                      View authorization
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-slate-950">
              Featured Brands and Solution Areas
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Representative product portfolio shown for solution coverage and sourcing capability.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredBrands.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.04}>
                <Card className="group h-full bg-white hover:-translate-y-1">
                  <CardContent className="space-y-4 p-6">
                    <BrandLogo
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      mode={brand.logoMode}
                    />
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-slate-950">{brand.name}</h4>
                      <Badge>{brand.category}</Badge>
                      <p className="text-sm leading-7 text-slate-600">{brand.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
