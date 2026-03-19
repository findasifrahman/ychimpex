import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CompanyGallery } from "@/components/sections/company-gallery";
import { CompanyMessage } from "@/components/sections/company-message";

export function CompanyIntro() {
  const points = [
    "Hong Kong and mainland china based sourcing and supply company serving technical procurement needs",
    "Focused on reputed international manufacturers and brand-backed equipment sourcing",
    "Supporting laboratories, R&D institutions, industrial operations, academic facilities, and safety-critical environments",
    "Experienced in specialized equipment supply, documentation support, and structured quotation workflows",
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Who We Are"
            title="A structured sourcing partner for scientific and engineering procurement"
            description="Chimpex International is positioned to support buyers who need dependable access to technical products, documentation-backed procurement, and organized engagement with global manufacturers."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="bg-slate-50/70">
            <CardContent className="space-y-6 p-8">
              {points.map((point) => (
                <div key={point} className="flex gap-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">{point}</p>
                </div>
              ))}
              <Button asChild variant="secondary" className="mt-2">
                <Link href="/about">
                  Learn More About Chimpex
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <CompanyMessage />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <CompanyGallery />
      </div>
    </section>
  );
}
