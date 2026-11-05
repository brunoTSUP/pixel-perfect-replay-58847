import { cva, type VariantProps } from "class-variance-authority";

export const btn = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-accent shadow-soft",
        accent: "bg-accent text-accent-foreground hover:brightness-110",
        outline: "border border-foreground/20 text-foreground hover:border-foreground hover:bg-surface",
        light: "bg-surface text-foreground hover:bg-background",
        ghostLight: "border border-graphite-foreground/40 text-graphite-foreground hover:bg-graphite-foreground/10",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export type BtnVariant = VariantProps<typeof btn>["variant"];
