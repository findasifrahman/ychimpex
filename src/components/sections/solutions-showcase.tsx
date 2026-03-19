import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { solutions } from "@/data/site";
import { AssetMedia } from "@/components/shared/asset-media";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function SolutionsShowcase() {
  const [featuredSolution, ...otherSolutions] = solutions;

  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef6ff_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Solutions"
          title="A cleaner, application-first product presentation"
          description="Each solution is now framed inside a fixed media layout so the section stays visually stable even when product images have very different dimensions."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <Reveal className="lg:col-span-2 xl:col-span-2">
            <Card className="h-full overflow-hidden border-slate-200 bg-slate-950 text-white">
              <AssetMedia
                src={featuredSolution.imagePath}
                alt={`${featuredSolution.title} representative product photo`}
                hint={featuredSolution.imagePath}
                className="aspect-[16/8]"
              />
              <CardContent className="space-y-6 p-8 lg:p-10">
                <div className="flex flex-wrap gap-2">
                  <Badge className="border-white/15 bg-white/10 text-cyan-200">
                    {featuredSolution.category}
                  </Badge>
                  <Badge className="border-white/15 bg-white/10 text-white">
                    {featuredSolution.industry}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    {featuredSolution.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                    {featuredSolution.useCase}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {featuredSolution.applications.map((application) => (
                    <span
                      key={application}
                      className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-slate-200"
                    >
                      {application}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                >
                  Request solution details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </Reveal>

          {otherSolutions.map((solution, index) => (
            <Reveal
              key={solution.title}
              delay={index * 0.04}
              className={index === 0 ? "xl:col-span-1" : undefined}
            >
              <Card className="h-full overflow-hidden bg-white hover:-translate-y-1">
                <AssetMedia
                  src={solution.imagePath}
                  alt={`${solution.title} representative product photo`}
                  hint={solution.imagePath}
                />
                <CardContent className="space-y-4 p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge>{solution.category}</Badge>
                    <Badge variant="accent">{solution.industry}</Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{solution.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{solution.useCase}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((application) => (
                      <span
                        key={application}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
