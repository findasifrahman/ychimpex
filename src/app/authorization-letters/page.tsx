import type { Metadata } from "next";

import { AuthorizationGrid } from "@/components/pages/authorization-grid";
import { CtaStrip } from "@/components/sections/cta-strip";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Authorization Letters | Chimpex International",
  description:
    "Review selected manufacturer authorizations and distribution confirmations presented by Chimpex International Co., Limited.",
};

export default function AuthorizationLettersPage() {
  return (
    <>
      <PageHero
        eyebrow="Authorization Letters"
        title="Selected manufacturer authorizations presented with clear procurement context"
        description="This page highlights documented manufacturer support references for selected brands. Additional supporting documents and technical references can be provided upon request."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <AuthorizationGrid />
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
