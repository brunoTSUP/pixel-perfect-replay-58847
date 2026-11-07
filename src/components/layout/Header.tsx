import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const headerCta =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/quartos", label: "Quartos" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="reference-page fixed inset-x-0 top-0 z-50 border-b border-border bg-surface text-foreground transition-all duration-500">
      <div className="container-site flex h-18 items-center justify-between gap-4 py-4">
        <Link to="/" className="flex min-w-0 flex-col leading-none" aria-label="Hotel Moreno — Início">
          <span className="font-display text-xl tracking-[0.18em] sm:text-2xl">HOTEL MORENO</span>
          <span className="mt-1 text-[0.65rem] tracking-[0.35em] text-muted-foreground">
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
          <Link to="/contato" className={headerCta}>
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
            <Link to="/contato" onClick={() => setOpen(false)} className={cn(headerCta, "mt-3")}>
              Consultar disponibilidade
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
