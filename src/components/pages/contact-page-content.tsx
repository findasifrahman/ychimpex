import { Mail, MapPinned, Phone, Send, ShieldCheck } from "lucide-react";

import { company } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactPageContent() {
  const details = [
    {
      title: "Office Addresses",
      body: company.addresses.flatMap((address) => [address.label, ...address.lines]),
      icon: MapPinned,
      tone: "bg-cyan-500/12 text-cyan-700",
    },
    {
      title: "Email",
      body: [company.email],
      icon: Mail,
      tone: "bg-emerald-500/12 text-emerald-700",
    },
    {
      title: "Phone",
      body: [company.phone],
      icon: Phone,
      tone: "bg-indigo-500/12 text-indigo-700",
    },
  ];

  return (
    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <Card className="overflow-hidden border-slate-200 bg-slate-950 text-white">
        <CardContent className="space-y-8 p-8 sm:p-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Contact Details
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s start the quotation process with the right technical context
            </h2>
            <p className="text-base leading-8 text-slate-300">
              Share your target product category, brand of interest, or project requirement and
              we can align the right sourcing path, documentation support, and quotation response.
            </p>
          </div>

          <div className="grid gap-4">
            {details.map((detail) => (
              <div
                key={detail.title}
                className="rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-2xl p-3 ${detail.tone}`}>
                    <detail.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{detail.title}</h3>
                    <div className="mt-2 space-y-1">
                      {detail.body.map((line, index) => (
                        <p
                          key={`${detail.title}-${line}-${index}`}
                          className="text-sm leading-7 text-slate-300"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5">
            <div className="flex aspect-[16/11] items-center justify-center bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(15,23,42,0.4))]">
              <div className="rounded-[26px] border border-white/15 bg-slate-950/65 px-6 py-5 text-center shadow-xl backdrop-blur-sm">
                <p className="text-xs font-semibold tracking-[0.16em] text-cyan-300 uppercase">
                  Hong Kong & Guangzhou Placeholder
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Replace with an embedded map or dual-location visual for both offices.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-cyan-400/15 bg-cyan-400/10 px-6 py-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 text-cyan-300" />
              <p className="text-sm leading-7 text-slate-200">
                Documentation-backed procurement support, authorization references, and technical
                sourcing discussion can be aligned during inquiry review.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden bg-white">
        <CardContent className="space-y-8 p-8 sm:p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Inquiry Form
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Request a quote or send a sourcing brief
            </h2>
            <p className="text-base leading-8 text-slate-600">
              Use the form for laboratory, scientific, industrial, and safety-related inquiries.
            </p>
          </div>

          <form className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-700">
                Company
              </label>
              <Input id="company" name="company" placeholder="Company / Institution" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="name@company.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Phone
              </label>
              <Input id="phone" name="phone" placeholder="Direct contact number" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="interest" className="text-sm font-medium text-slate-700">
                Product / Brand of Interest
              </label>
              <Input
                id="interest"
                name="interest"
                placeholder="Brand, product category, application, or required model"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirement, quantity, documentation needs, project use case, or institution context"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-2">
              <p className="text-sm text-slate-500">
                We can align quotation support, available brands, and documentation references.
              </p>
              <Button type="submit" size="lg">
                Submit Inquiry
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
