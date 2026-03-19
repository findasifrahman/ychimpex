import {
  Globe2,
  Layers3,
  ShieldCheck,
  SquareStack,
  Telescope,
  WalletCards,
} from "lucide-react";

import { whyChimpex } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";

const icons = [Globe2, WalletCards, Telescope, ShieldCheck, Layers3, SquareStack];

export function WhyChimpex() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Why Chimpex"
          title="Built for institutional and technical procurement confidence"
          description="The value proposition centers on trusted sourcing, accurate positioning of manufacturer relationships, and support across multi-category technical requirements."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChimpex.map((point, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={point} delay={index * 0.05}>
                <Card className="h-full hover:-translate-y-1">
                  <CardContent className="space-y-4 p-7">
                    <div className="inline-flex rounded-2xl bg-cyan-50 p-3 text-cyan-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-lg font-semibold leading-8 text-slate-900">{point}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
