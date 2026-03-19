import Image from "next/image";

import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10",
        compact ? "h-11 w-11" : "h-16 w-16",
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt="Chimpex International logo"
        fill
        className="object-contain p-1"
        unoptimized
      />
    </div>
  );
}
