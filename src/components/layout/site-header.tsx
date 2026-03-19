"use client";

import { Menu, MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { company, navigationLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LogoMark } from "@/components/shared/logo-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/92 shadow-sm backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <LogoMark compact />
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold tracking-[0.12em] text-slate-500 uppercase sm:text-sm sm:tracking-[0.16em]">
              Hong Kong and Mainland China
            </p>
            <p className="truncate text-xs font-semibold text-slate-950 sm:text-base">
              {company.shortName}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-slate-100 text-slate-950"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">
              Request a Quote
              <MoveRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild className="lg:hidden">
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </DialogTrigger>
          <DialogContent className="top-auto bottom-4 left-4 right-4 w-auto translate-x-0 translate-y-0 rounded-[28px] p-0 sm:left-auto sm:right-4 sm:top-24 sm:bottom-auto sm:w-[420px]">
            <div className="sr-only">
              <DialogTitle>Mobile navigation</DialogTitle>
              <DialogDescription>
                Navigate through the main sections of the Chimpex International website.
              </DialogDescription>
            </div>
            <div className="space-y-2 p-6">
              <div className="mb-6 flex items-center gap-3">
                <LogoMark compact />
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    {company.shortName}
                  </p>
                  <p className="text-xs text-slate-500">{company.tagline}</p>
                </div>
              </div>
              {navigationLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-medium transition",
                      active
                        ? "bg-slate-950 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-4 w-full">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
