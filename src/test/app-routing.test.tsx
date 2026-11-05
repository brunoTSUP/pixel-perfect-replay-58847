import { QueryClient } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRouter,
  rootRouteId,
  RouterProvider,
} from "@tanstack/react-router";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { routeTree } from "@/routeTree.gen";

beforeEach(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      disconnect() {}
      unobserve() {}
    },
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each([
    ["/", /Seu descanso merece um lugar/, "Hotel Moreno | Hotel e Hospedagem em Itajobi - SP"],
    ["/quartos/", "Nossas acomodações", "Quartos e Acomodações | Hotel Moreno - Itajobi SP"],
    ["/contato/", "Entre em contato", "Contato e Localização | Hotel Moreno - Itajobi SP"],
    [
      "/privacidade/",
      "Política de Privacidade",
      "Política de Privacidade | Hotel Moreno - Itajobi SP",
    ],
  ])("renders %s directly in the browser with its metadata", async (path, heading, title) => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: [path] }),
      context: { queryClient: new QueryClient() },
    });
    await router.load();
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { level: 1, name: heading })).toBeVisible();
    await waitFor(() => expect(document.title).toBe(title));
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute("content");
    expect(document.head.querySelector('script[type="application/ld+json"]')).toHaveTextContent(
      '"@type":"Hotel"',
    );
  });

  it("navigates from the home page to contact without a server", async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
      context: { queryClient: new QueryClient() },
    });
    await router.load();
    render(<RouterProvider router={router} />);

    fireEvent.click(screen.getByRole("link", { name: "Contato" }));

    expect(
      await screen.findByRole("heading", { level: 1, name: "Entre em contato" }),
    ).toBeVisible();
    expect(await screen.findByRole("alert")).toHaveTextContent("WhatsApp");
    await waitFor(() =>
      expect(document.title).toBe("Contato e Localização | Hotel Moreno - Itajobi SP"),
    );
  });
});
