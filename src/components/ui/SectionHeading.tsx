import { cn } from "@/lib/utils";

export function SectionHeading({
  tag,
  title,
  desc,
  align = "left",
  className,
}: {
  tag: string;
  title: React.ReactNode;
  desc?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p className="font-mono text-[0.72rem] text-accent tracking-[3px] uppercase mb-3">
        {tag}
      </p>
      <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1] uppercase mb-4">
        {title}
      </h2>
      {desc && (
        <p
          className={cn(
            "text-muted leading-[1.7] text-[0.95rem]",
            align === "center" ? "max-w-xl mx-auto" : "max-w-xl"
          )}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
