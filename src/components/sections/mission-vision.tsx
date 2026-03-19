import { values } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function MissionVision() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Mission & Vision"
          title="A responsible approach to technical supply and long-term sourcing relationships"
          description="The company narrative emphasizes dependable sourcing, technically informed service, and a regional role in connecting buyers with global technologies."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] text-white">
              <CardContent className="space-y-6 p-8">
                <Badge className="border-white/15 bg-white/10 text-cyan-200">
                  Mission
                </Badge>
                <p className="text-xl leading-9 text-slate-100">
                  To connect institutions, laboratories, engineers, and industrial buyers
                  with trusted global technologies through responsible sourcing, reliable
                  supply, and technically informed service.
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full bg-slate-50">
              <CardContent className="space-y-6 p-8">
                <Badge variant="accent">Vision</Badge>
                <p className="text-xl leading-9 text-slate-800">
                  To become a trusted regional gateway for advanced scientific, technical,
                  and industrial solutions across research, education, infrastructure, and
                  innovation-driven sectors.
                </p>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => (
                    <Badge key={value}>{value}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
