import { waLink } from "@/data/site";
import { cn } from "@/lib/utils";
import { buttonBase, buttonVariants, type ButtonVariant } from "@/lib/buttonStyles";

export function WhatsAppButton({
  message,
  variant = "primary",
  className,
  children,
}: {
  message: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener"
      className={cn(buttonBase, buttonVariants[variant], className)}
    >
      {children}
    </a>
  );
}
