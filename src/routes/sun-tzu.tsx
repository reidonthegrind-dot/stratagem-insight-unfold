import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sun-tzu")({
  head: () => ({
    meta: [
      { title: "Sun Tzu in Modern Business — Strategists & CEOs" },
      { name: "description", content: "The three Sun Tzu techniques used in the Strategist's Puzzle, each in one sentence." },
    ],
  }),
  component: SunTzuPage,
});

function SunTzuPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-jade">The Eastern General</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Sun Tzu's Techniques</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        The three moves from <em>The Art of War</em> that show up in the puzzle.
      </p>

      <ul className="mt-12 space-y-6">
        <Technique
          name="Win without fighting"
          line="The best win is the one where you change the game so the fight never has to happen."
        />
        <Technique
          name="Know the terrain"
          line="Learn the market, the customers, and the rules before you make a single move."
        />
        <Technique
          name="Attack weakness, not strength"
          line="Go after the spot your rival is ignoring instead of slamming into their strongest wall."
        />
      </ul>

      <div className="mt-16 flex flex-wrap gap-4">
        <Link to="/machiavelli" className="rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition">
          Cross to the West: Machiavelli →
        </Link>
        <Link to="/game" className="rounded-full seal px-6 py-3 text-sm hover:opacity-90 transition">
          Test your strategy →
        </Link>
      </div>
    </main>
  );
}

function Technique({ name, line }: { name: string; line: string }) {
  return (
    <li className="rounded-xl border border-border bg-card p-6">
      <h2 className="font-display text-2xl">{name}</h2>
      <p className="mt-2 text-foreground/90 leading-relaxed">{line}</p>
    </li>
  );
}
