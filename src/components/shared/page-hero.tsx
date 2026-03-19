import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl space-y-8">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={primaryHref}>
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/brands">View Brands</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
