"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

import { cn } from "@/lib/utils";

type AssetMediaProps = {
  src: string;
  alt: string;
  hint: string;
  className?: string;
};

export function AssetMedia({ src, alt, hint, className }: AssetMediaProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex aspect-[16/10] items-center justify-center bg-[linear-gradient(135deg,#dbeafe,#f8fafc)] px-6 text-center",
          className,
        )}
      >
        <div className="rounded-[24px] border border-white/80 bg-white/90 px-5 py-4 shadow-lg">
          <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
            Add Product Image
          </p>
          <p className="mt-2 text-sm font-medium text-slate-700">{hint}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
