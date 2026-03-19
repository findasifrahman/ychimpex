import Link from "next/link";

import { company, navigationLinks, authorizedBrands } from "@/data/site";
import { LogoMark } from "@/components/shared/logo-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-10">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <LogoMark compact />
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-cyan-300 uppercase">
                Laboratory & Industrial Sourcing
              </p>
              <p className="font-semibold text-white">{company.shortName}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Hong Kong and mainland China based technical sourcing partner for
            scientific instruments, industrial systems, and documented manufacturer-backed procurement support.
          </p>
          <p className="text-sm text-slate-500">
            Designed for global laboratory and industrial sourcing
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Authorized Brands</h3>
          <ul className="space-y-3 text-sm">
            {authorizedBrands.slice(0, 5).map((brand) => (
              <li key={brand.name}>
                <Link href="/authorization-letters" className="transition hover:text-cyan-300">
                  {brand.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/authorization-letters"
                className="transition hover:text-cyan-300"
              >
                Authorization Letters
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
          <div className="space-y-3 text-sm text-slate-400">
            {company.addresses.map((address) => (
              <div key={address.label} className="space-y-1">
                <p className="font-semibold text-slate-200">{address.label}</p>
                {address.lines.map((line) => (
                  <p key={`${address.label}-${line}`}>{line}</p>
                ))}
              </div>
            ))}
            <p>{company.email}</p>
            <p>{company.phone}</p>
            <div className="flex gap-3 pt-2">
              <span className="rounded-full border border-slate-800 px-3 py-1 text-xs">
                LinkedIn
              </span>
              <span className="rounded-full border border-slate-800 px-3 py-1 text-xs">
                WeChat
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 px-6 py-5 text-center text-xs text-slate-500">
        Copyright © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
