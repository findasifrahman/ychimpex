import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <Badge variant={tone === "light" ? undefined : "accent"}>{eyebrow}</Badge>
      ) : null}
      <div className="space-y-3">
        <h2
          className={cn(
            "text-8xl font-semibold tracking-tight sm:text-5xl lg:text-6xl",
            tone === "light" ? "text-white" : "text-slate-950",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "text-lg leading-8 sm:text-xl",
              tone === "light" ? "text-slate-300" : "text-slate-600",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
