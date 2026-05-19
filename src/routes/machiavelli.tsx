import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/machiavelli")({
  head: () => ({
    meta: [
      { title: "Machiavelli in Modern Business — Strategists & CEOs" },
      { name: "description", content: "The three Machiavelli techniques used in the Strategist's Puzzle, each in one sentence." },
    ],
  }),
  component: MachPage,
});

function MachPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson">The Western Prince</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Machiavelli's Techniques</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        The three moves from <em>The Prince</em> that show up in the puzzle.
      </p>

      <ul className="mt-12 space-y-6">
        <Technique
          name="Be both lion and fox"
          line="A leader needs raw strength in public and quiet cunning in the meetings nobody sees."
        />
        <Technique
          name="Better feared than loved"
          line="Love can get taken back at any time, but consequences are something you actually control."
        />
        <Technique
          name="Look good in public"
          line="A leader has to seem kind and honest even when the real choices behind the curtain arent."
        />
      </ul>

      <div className="mt-16 flex flex-wrap gap-4">
        <Link to="/sun-tzu" className="rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition">
          ← Back to the East: Sun Tzu
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
