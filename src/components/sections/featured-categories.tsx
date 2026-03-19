import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { featuredCategories } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedCategories() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Product Categories"
          title="Technical categories aligned with real procurement requirements"
          description="The portfolio spans laboratory infrastructure, measurement systems, design and prototyping tools, safety technologies, and specialized industrial support equipment."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.04}>
              <Card className="group h-full hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(14,116,144,0.4)]">
                <CardContent className="flex h-full flex-col p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-700 transition group-hover:bg-cyan-100">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <Badge>{category.badge}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{category.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {category.description}
                  </p>
                  <div className="mt-5 space-y-4">
                    <p className="text-sm text-slate-500">
                      Example brands:{" "}
                      <span className="font-medium text-slate-700">
                        {category.exampleBrands.join(", ")}
                      </span>
                    </p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-800"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
