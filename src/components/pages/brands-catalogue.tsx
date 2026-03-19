"use client";

import { useMemo, useState } from "react";

import { authorizedBrands, featuredBrands } from "@/data/site";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function getCategories(items: { category: string }[]) {
  return ["All", ...Array.from(new Set(items.map((item) => item.category)))];
}

export function BrandsCatalogue() {
  const [authorizedFilter, setAuthorizedFilter] = useState("All");
  const [featuredFilter, setFeaturedFilter] = useState("All");

  const authorizedCategories = useMemo(() => getCategories(authorizedBrands), []);
  const featuredCategories = useMemo(() => getCategories(featuredBrands), []);

  const filteredAuthorized = authorizedBrands.filter(
    (brand) => authorizedFilter === "All" || brand.category === authorizedFilter,
  );
  const filteredFeatured = featuredBrands.filter(
    (brand) => featuredFilter === "All" || brand.category === featuredFilter,
  );

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-950">
            Authorized / Documented Brand Partners
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            These brands are shown as documented or authorized based on the listed supporting
            authorization letters and related documentation references.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {authorizedCategories.map((category) => (
            <button
              key={category}
              onClick={() => setAuthorizedFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                authorizedFilter === category
                  ? "border-cyan-600 bg-cyan-50 text-cyan-700"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredAuthorized.map((brand) => (
            <Card key={brand.name} className="group h-full border-cyan-100">
              <CardContent className="space-y-5 p-7">
                <div className="flex items-start justify-between gap-4">
                  <BrandLogo
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    mode={brand.logoMode}
                    className="w-full max-w-[220px]"
                  />
                  <Badge variant="success">Authorized</Badge>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-950">{brand.name}</h3>
                  <Badge variant="accent">{brand.category}</Badge>
                  <p className="text-sm leading-7 text-slate-600">{brand.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-950">
            Featured Brands and Representative Product Portfolio
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            These brands are shown as featured product and solution references. They are not
            presented as formally authorized unless listed in the authorized section above.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {featuredCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFeaturedFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                featuredFilter === category
                  ? "border-cyan-600 bg-cyan-50 text-cyan-700"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredFeatured.map((brand) => (
            <Card key={brand.name} className="group h-full">
              <CardContent className="space-y-5 p-6">
                <BrandLogo
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  mode={brand.logoMode}
                />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-950">{brand.name}</h3>
                  <Badge>{brand.category}</Badge>
                  <p className="text-sm leading-7 text-slate-600">{brand.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
