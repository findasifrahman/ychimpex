import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaStrip() {
  return (
    <section className="bg-cyan-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan-950 uppercase">
            Request a Quotation
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Need pricing, brand availability, or documentation-backed sourcing support?
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-cyan-800/20 bg-white/80 hover:bg-white"
          >
            <Link href="/products">Explore Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
