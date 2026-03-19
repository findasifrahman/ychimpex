import { CompanyIntro } from "@/components/sections/company-intro";
import { ContactPreview } from "@/components/sections/contact-preview";
import { CtaStrip } from "@/components/sections/cta-strip";
import { AuthorizationPreview } from "@/components/sections/authorization-preview";
import { FeaturedCategories } from "@/components/sections/featured-categories";
import { BrandsHighlight } from "@/components/sections/brands-highlight";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { HomeHero } from "@/components/sections/home-hero";
import { IndustriesServed } from "@/components/sections/industries-served";
import { MissionVision } from "@/components/sections/mission-vision";
import { SolutionsShowcase } from "@/components/sections/solutions-showcase";
import { WhyChimpex } from "@/components/sections/why-chimpex";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BrandMarquee />
      <CompanyIntro />
      <FeaturedCategories />
      <BrandsHighlight />
      <AuthorizationPreview />
      <SolutionsShowcase />
      <WhyChimpex />
      <MissionVision />
      <IndustriesServed />
      <ContactPreview />
      <CtaStrip />
    </>
  );
}
