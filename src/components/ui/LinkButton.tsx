import { cn } from "@/lib/utils";
import { buttonBase, buttonVariants, type ButtonVariant } from "@/lib/buttonStyles";

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn(buttonBase, buttonVariants[variant], className)}>
      {children}
    </a>
  );
}
