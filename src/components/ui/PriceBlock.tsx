import { price, formatARS } from "@/data/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";

export function PriceBlock({
  ctaMessage,
  align = "left",
  className,
}: {
  ctaMessage: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="font-mono text-[0.65rem] tracking-[2px] uppercase text-accent border border-accent/30 bg-accent/8 px-3 py-1.5 w-fit clip-cartridge">
        Oferta por tiempo limitado · hasta agotar stock
      </span>

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="text-muted line-through text-lg">
          {formatARS(price.original)}
        </span>
        <span className="font-display font-bold text-[2.6rem] text-white leading-none">
          {formatARS(price.transferencia)}
        </span>
        <span className="text-[0.75rem] tracking-[1px] uppercase text-muted -ml-2">
          transferencia
        </span>
      </div>
      <p className="text-sm text-muted -mt-2">
        <span className="text-accent font-semibold">
          {formatARS(price.efectivo)}
        </span>{" "}
        pagando en efectivo
      </p>

      <WhatsAppButton message={ctaMessage} className="w-fit">
        Comprar por WhatsApp
      </WhatsAppButton>
    </div>
  );
}
