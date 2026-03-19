import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import { LogoMark } from "@/components/shared/logo-mark";
import { Reveal } from "@/components/shared/reveal";

const heroPoints = [
  "Laboratory systems and scientific instruments",
  "Industrial, safety, and facility solutions",
  "Brand-backed sourcing and quotation support",
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <Image
        src="/images/hero/hero.png"
        alt="Abstract scientific instrumentation and laboratory background artwork"
        fill
        priority
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88),rgba(2,6,23,0.68),rgba(2,6,23,0.82))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_22%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-10">
        <Reveal className="max-w-4xl space-y-8">
          <Badge className="border-white/15 bg-white/10 text-cyan-200" style={{fontSize:22}}>
            Hong Kong and Mainland China Based Technical Sourcing Partner
          </Badge>

          <div className="flex items-center gap-4">
            <LogoMark className="border-white/10 bg-white/10 text-cyan-200 shadow-cyan-500/10" />
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">
                {company.name}
              </p>
              <p className="text-sm text-slate-400">
                Scientific, laboratory, and industrial equipment supply
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trusted Hong Kong Partner for Laboratory, Scientific & Industrial Equipment
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Chimpex International supplies advanced instruments, laboratory systems,
              industrial equipment, technical tools, and specialized solutions from
              reputed global manufacturers for research, education, testing, safety,
              and production environments.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroPoints.map((point) => (
              <div
                key={point}
                className="rounded-[24px] border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-100">{point}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 bg-white/10 text-white hover:bg-white/15 hover:text-white"
            >
              <Link href="/brands">View Brands</Link>
            </Button>
          </div>

          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-300" />
            <span>{company.heroTrust}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
