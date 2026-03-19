import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  mode?: "light" | "dark" | string;
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({
  src,
  alt,
  width = 160,
  height = 56,
  mode = "light",
  className,
  imageClassName,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "flex min-h-[92px] items-center justify-center rounded-[24px] border px-5 py-4 transition",
        mode === "dark"
          ? "border-slate-800 bg-slate-950"
          : "border-slate-200 bg-white",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("h-auto max-h-12 w-auto object-contain", imageClassName)}
        unoptimized
      />
    </div>
  );
}
