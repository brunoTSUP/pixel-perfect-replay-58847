import { cva, type VariantProps } from "class-variance-authority";

export const btn = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "border border-primary bg-primary text-primary-foreground hover:brightness-110 shadow-soft",
        accent: "border border-accent bg-accent text-accent-foreground hover:brightness-110 shadow-soft",
        outline: "border border-accent text-accent hover:bg-accent/5",
        light: "bg-surface text-foreground hover:bg-background",
        ghostLight: "border border-graphite-foreground/40 text-graphite-foreground hover:bg-graphite-foreground/10",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export type BtnVariant = VariantProps<typeof btn>["variant"];
