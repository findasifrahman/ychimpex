import type { Metadata } from "next";

import { ContactPageContent } from "@/components/pages/contact-page-content";
import { CtaStrip } from "@/components/sections/cta-strip";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Contact | Chimpex International",
  description:
    "Contact Chimpex International Co., Limited for laboratory, scientific, industrial, and technical equipment sourcing inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start an inquiry for quotation, product sourcing, or brand-backed documentation support"
        description="Use the contact page to share your product category, brand of interest, project context, or institution requirement so the sourcing discussion can begin efficiently."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <ContactPageContent />
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
