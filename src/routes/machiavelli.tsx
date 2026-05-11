import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/machiavelli")({
  head: () => ({
    meta: [
      { title: "Machiavelli in Modern Business — Strategists & CEOs" },
      { name: "description", content: "How Machiavelli's Prince shapes the modern CEO: perception, power, and the lion-and-fox doctrine." },
    ],
  }),
  component: MachPage,
});

function MachPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson">The Western Prince</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Machiavelli in the C-Suite</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        <em>The Prince</em> is not a manual for being good — it is a manual for staying in power.
        Read in 2026 with a corporate org chart instead of a Florentine map, it is uncomfortably current.
      </p>

      <Section title="1. The primary duty: stability of the state.">
        <p>
          Machiavelli's prince serves one master: the continued existence of his state
          <Cite>(Machiavelli, Marriott trans., ch. III)</Cite>. The modern translation is unmistakable —
          a CEO's first duty, in the eyes of the board, is the continued solvency and dominance of the company.
          Layoffs, pivots, and shutdowns are not failures of ethics inside this framework; they are stabilizing
          maneuvers.
        </p>
      </Section>

      <Section title="2. The lion and the fox.">
        <p>
          A leader, Machiavelli writes, must be both a lion (to frighten wolves) and a fox (to recognize traps)
          <Cite>(Machiavelli, Marriott trans., ch. XVIII)</Cite>. Today's executive embodies this hybrid daily:
          the lion appears in the all-hands speech and the press cycle; the fox shows up in the closed-door
          negotiation, the legal strategy, the timing of an acquisition.
        </p>
      </Section>

      <Section title="3. Feared or loved?">
        <p>
          Machiavelli's most famous question is whether it is better to be feared or loved. His answer, often
          flattened, is that <em>both</em> is ideal — but if forced to choose, fear is more reliable, because
          love is granted by others while fear is held by you. Loyalty built on affection evaporates the moment
          conditions change; loyalty built on consequence does not.
        </p>
        <p>
          Modern parallel: companies that rely solely on cultural affection ("we're a family") collapse the
          instant the market turns. Companies that combine genuine loyalty with structural consequence —
          equity vesting, non-competes, performance review — outlast the mood.
        </p>
      </Section>

      <Section title="4. The performance of virtue.">
        <p>
          Machiavelli is blunt: a prince must <em>appear</em> merciful, faithful, humane, religious, and upright,
          even when policy requires the opposite <Cite>(Machiavelli, Marriott trans., ch. XVIII)</Cite>. The
          modern CEO has inherited this exactly. Public-facing transparency reports, mission statements about
          "doing the right thing," carefully staged town halls — these are the Renaissance virtues in HR clothing.
          The most Machiavellian move available to a 21st-century executive is to look the least Machiavellian.
        </p>
      </Section>

      <Pullquote>
        Modern business preaches transparency. The Prince teaches the performance of it.
      </Pullquote>

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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-foreground/90 leading-relaxed">{children}</div>
    </section>
  );
}
function Cite({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-xs text-muted-foreground"> {children}</span>;
}
function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-16 border-l-4 border-accent pl-6 font-display text-2xl italic leading-snug text-balance">
      "{children}"
    </blockquote>
  );
}
