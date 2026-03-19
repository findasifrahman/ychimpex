"use client";
/* eslint-disable @next/next/no-img-element */

import { FileText } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function DocumentPreview({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex aspect-[4/3] items-center justify-center rounded-[28px] border border-slate-200 bg-slate-50",
          className,
        )}
      >
        <div className="space-y-2 text-center">
          <FileText className="mx-auto h-10 w-10 text-slate-400" />
          <p className="font-medium text-slate-700">Authorization image not found</p>
          <p className="text-sm text-slate-500">
            Add the JPG file in `/public/images/authorization`.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden rounded-[28px]", className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
