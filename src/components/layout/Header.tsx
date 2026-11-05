import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { btn } from "@/components/ui/btn";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/quartos", label: "Quartos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        overHero
          ? "bg-transparent text-graphite-foreground"
          : "border-b border-border bg-surface/90 text-foreground backdrop-blur-md",
      )}
    >
      <div className="container-site flex h-18 items-center justify-between gap-4 py-4">
        <Link to="/" className="flex min-w-0 flex-col leading-none" aria-label="Hotel Moreno — Início">
          <span className="font-display text-xl tracking-[0.18em] sm:text-2xl">HOTEL MORENO</span>
          <span className={cn("mt-1 text-[0.65rem] tracking-[0.35em]", overHero ? "opacity-80" : "text-muted-foreground")}>
            ITAJOBI · SP
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-sm tracking-wide after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              activeProps={{ className: "after:w-full" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contato" className={btn({ variant: overHero ? "light" : "primary" })}>
            Consultar disponibilidade
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu móvel"
          className="animate-in fade-in slide-in-from-top-2 border-t border-border bg-surface md:hidden"
        >
          <div className="container-site flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-display text-xl"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)} className={cn(btn(), "mt-3")}>
              Consultar disponibilidade
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
