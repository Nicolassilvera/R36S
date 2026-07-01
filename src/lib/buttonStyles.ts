export type ButtonVariant = "primary" | "outline" | "whatsapp";

export const buttonBase =
  "inline-flex items-center gap-3 px-9 py-3.5 text-sm font-bold uppercase tracking-[0.15em] clip-cartridge transition-all duration-150 hover:-translate-y-0.5";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent2",
  outline:
    "border border-border text-white hover:border-accent hover:text-accent",
  whatsapp: "bg-[#25d366] text-white hover:opacity-90",
};
