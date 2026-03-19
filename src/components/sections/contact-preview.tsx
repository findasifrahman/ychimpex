import Link from "next/link";
import { ArrowRight, Mail, MapPinned, Phone } from "lucide-react";

import { company } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactPreview() {
  const contactItems = [
    {
      label: "Addresses",
      value: company.addresses.flatMap((address) => [address.label, ...address.lines]),
      icon: MapPinned,
    },
    { label: "Phone", value: [company.phone], icon: Phone },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Card className="overflow-hidden border-slate-200 bg-slate-950 text-white">
              <CardContent className="space-y-8 p-8 sm:p-10">
                <SectionHeading
                  eyebrow="Contact"
                  title="Start a quotation or sourcing discussion with Chimpex International"
                  description="Share your target brand, use case, or procurement requirement and we can align the right product category, documentation path, and sourcing response."
                  tone="light"
                />
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/15 bg-white/10 text-white hover:bg-white/15 hover:text-white"
                  >
                    <Link href="/brands">View Brands</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {contactItems.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06}>
                <Card className="h-full bg-slate-50">
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex rounded-2xl bg-white p-3 text-cyan-700 shadow-sm">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {item.label}
                      </h3>
                      <div className="mt-3 space-y-1">
                        {item.value.map((line, itemIndex) => (
                          <p
                            key={`${item.label}-${line}-${itemIndex}`}
                            className="text-sm leading-7 text-slate-700"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
