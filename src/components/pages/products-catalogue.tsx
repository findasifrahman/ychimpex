"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { solutions } from "@/data/site";
import { AssetMedia } from "@/components/shared/asset-media";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function collectFilters<T extends string>(items: T[]) {
  return ["All", ...Array.from(new Set(items))];
}

export function ProductsCatalogue() {
  const [category, setCategory] = useState("All");
  const [industry, setIndustry] = useState("All");

  const categoryFilters = useMemo(
    () => collectFilters(solutions.map((solution) => solution.category)),
    [],
  );
  const industryFilters = useMemo(
    () => collectFilters(solutions.map((solution) => solution.industry)),
    [],
  );

  const filtered = solutions.filter(
    (solution) =>
      (category === "All" || solution.category === category) &&
      (industry === "All" || solution.industry === industry),
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Filter by category
          </p>
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setCategory(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  category === filter
                    ? "border-cyan-600 bg-cyan-50 text-cyan-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
            Filter by industry
          </p>
          <div className="flex flex-wrap gap-2">
            {industryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setIndustry(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  industry === filter
                    ? "border-cyan-600 bg-cyan-50 text-cyan-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((solution) => (
          <Card key={solution.title} className="overflow-hidden">
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
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-950">{solution.title}</h2>
                <p className="text-sm leading-7 text-slate-600">{solution.useCase}</p>
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
              >
                Request quotation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
