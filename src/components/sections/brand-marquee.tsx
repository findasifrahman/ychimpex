import { brandLogoWall } from "@/data/site";
import { BrandLogo } from "@/components/shared/brand-logo";

const marqueeLogos = [...brandLogoWall, ...brandLogoWall];

export function BrandMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Brand Portfolio
          </p>
          <p className="text-sm text-slate-500">
            Documented brands and representative solution portfolio
          </p>
        </div>
        <div className="marquee-mask">
          <div className="marquee-track">
            {marqueeLogos.map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="mx-3 min-w-[220px]">
                <BrandLogo
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  mode={brand.logoMode}
                  className="min-h-[84px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
