import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-2 text-muted-foreground">This stratagem leads nowhere.</p>
        <Link to="/" className="mt-6 inline-block underline">Return to the citadel</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">A skirmish occurred</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-primary-foreground"
        >
          Regroup
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Strategists & CEOs — Sun Tzu and Machiavelli in Modern Business" },
      { name: "description", content: "How the strategies of Sun Tzu and Machiavelli shape the modern business world, with an interactive strategy puzzle." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          Strategists <span className="text-accent">&</span> CEOs
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/sun-tzu" activeProps={{ className: "text-accent" }} className="hover:text-accent transition">Sun Tzu</Link>
          <Link to="/machiavelli" activeProps={{ className: "text-accent" }} className="hover:text-accent transition">Machiavelli</Link>
          <Link to="/game" activeProps={{ className: "text-accent" }} className="hover:text-accent transition">The Puzzle</Link>
          <Link to="/sources" activeProps={{ className: "text-accent" }} className="hover:text-accent transition">Sources</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <p>A research exhibit on ancient strategy and modern business.</p>
        <p className="mt-1">Citations follow MLA format. See <Link to="/sources" className="underline">Sources</Link>.</p>
      </div>
    </footer>
  );
}
