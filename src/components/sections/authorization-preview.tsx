"use client";

import { FileText, ShieldCheck } from "lucide-react";

import { authorizationLetters } from "@/data/site";
import { authorizedBrands } from "@/data/site";
import { BrandLogo } from "@/components/shared/brand-logo";
import { DocumentPreview } from "@/components/shared/document-preview";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AuthorizationPreview() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Authorization Letters"
          title="Premium presentation for documented manufacturer support"
          description="Selected manufacturer authorizations and distribution confirmations available for review. Additional brand documentation and technical references can be provided upon request."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {authorizationLetters.map((letter, index) => (
            <Reveal key={letter.brand} delay={index * 0.05}>
              {(() => {
                const brand = authorizedBrands.find((item) =>
                  item.name.includes(letter.brand) || letter.brand.includes(item.name),
                );

                return (
              <Card className="h-full overflow-hidden hover:-translate-y-1">
                <CardContent className="space-y-5 p-0">
                  <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,#e2e8f0,#f8fafc)]">
                    {brand ? (
                      <BrandLogo
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        mode={brand.logoMode}
                        className="w-[220px]"
                      />
                    ) : (
                      <div className="rounded-[24px] border border-white/80 bg-white/85 p-6 shadow-lg">
                        <FileText className="mx-auto h-8 w-8 text-cyan-700" />
                        <p className="mt-3 text-center text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
                          Document Preview
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4 px-6 pb-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-slate-950">{letter.brand}</h3>
                      <Badge variant="success">Authorized</Badge>
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{letter.note}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          View Authorization
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="space-y-6">
                          <div className="sr-only">
                            <DialogTitle>{letter.brand} authorization letter</DialogTitle>
                            <DialogDescription>{letter.summary}</DialogDescription>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-700">
                              <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-950">
                                {letter.brand}
                              </p>
                              <p className="text-sm text-slate-500">{letter.summary}</p>
                            </div>
                          </div>
                          <DocumentPreview
                            src={letter.imagePath}
                            alt={`${letter.brand} authorization letter preview`}
                          />
                          <p className="text-sm leading-7 text-slate-600">{letter.note}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
                );
              })()}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
