"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { MessageSquareQuote, Sparkles, Star } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function CompanyMessage() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">
      <Reveal>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-5 top-8 hidden h-24 w-24 rounded-[28px] bg-cyan-200/70 blur-2xl lg:block" />
          <div className="absolute -right-4 bottom-10 hidden h-28 w-28 rounded-full bg-amber-200/70 blur-2xl lg:block" />
          <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.3)]">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#eff6ff,#f8fafc)]">
              {!failed ? (
                <img
                  src="/images/chairman.png"
                  alt="Company representative portrait"
                  className="aspect-[1/1.6] h-full w-full object-cover"
                  loading="lazy"
                  onError={() => setFailed(true)}
                />
              ) : (
                <div className="flex aspect-[1/1.6] items-center justify-center px-8 text-center">
                  <div className="space-y-3">
                    <MessageSquareQuote className="mx-auto h-10 w-10 text-slate-400" />
                    <p className="text-lg font-semibold text-slate-700">
                      Add `/chaiman.png`
                    </p>
                    <p className="text-sm leading-7 text-slate-500">
                      The Company Message portrait will appear here automatically.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <Card className="h-full overflow-hidden border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_45%,#fff7ed_100%)]">
          <CardContent className="flex h-full flex-col justify-between space-y-8 p-8 sm:p-10">
            <div className="space-y-5">
              <Badge variant="accent">Company Message</Badge>
              <div className="flex items-start gap-4">
                <div className="rounded-[22px] bg-slate-950 p-3 text-cyan-300 shadow-lg shadow-slate-900/10">
                  <MessageSquareQuote className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    A sourcing philosophy built on trust, technical clarity, and long-term relationships
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                    Chimpex International is committed to representing technical brands
                    responsibly, supporting buyers with organized communication, and helping
                    institutions source specialized products with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[26px] border border-cyan-200 bg-cyan-50/80 p-5">
                <Sparkles className="h-5 w-5 text-cyan-700" />
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Technical understanding over generic sales language
                </p>
              </div>
              <div className="rounded-[26px] border border-indigo-200 bg-indigo-50/80 p-5">
                <Star className="h-5 w-5 text-indigo-700" />
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Clear positioning of documented and portfolio brands
                </p>
              </div>
              <div className="rounded-[26px] border border-amber-200 bg-amber-50/80 p-5">
                <MessageSquareQuote className="h-5 w-5 text-amber-700" />
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Responsive support for laboratories, institutions, and industrial teams
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
}
