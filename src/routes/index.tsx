import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strategists & CEOs — Sun Tzu and Machiavelli in Modern Business" },
      { name: "description", content: "Research exhibit examining how Sun Tzu and Machiavelli's techniques shape today's business strategy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="grid gap-10 py-20 md:grid-cols-[1.3fr_1fr] md:py-28 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Research Exhibit · 2026</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] md:text-7xl text-balance">
            Of Generals <span className="italic text-accent">&</span> Princes,<br/>
            of Quarters <span className="italic text-accent">&</span> Markets.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            How do the philosophies of <strong className="text-foreground">Sun Tzu</strong> and{" "}
            <strong className="text-foreground">Niccolò Machiavelli</strong> still pull the strings of today's
            boardrooms, market entries, and corporate power plays?
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/sun-tzu" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition">
              Enter the East →
            </Link>
            <Link to="/machiavelli" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition">
              Enter the West →
            </Link>
            <Link to="/game" className="rounded-full seal px-6 py-3 text-sm font-medium hover:opacity-90 transition">
              Play: The Strategist's Puzzle
            </Link>
          </div>
        </div>
        <aside className="paper relative rounded-lg p-8">
          <div className="absolute -top-4 -right-4 seal flex h-20 w-20 items-center justify-center rounded-full text-center font-display text-xs leading-tight">
            Thesis<br/>Stamp
          </div>
          <p className="font-display text-2xl italic leading-snug">
            "The supreme art of war is to subdue the enemy without fighting."
          </p>
          <p className="mt-3 text-sm text-muted-foreground">— Sun Tzu, <em>The Art of War</em></p>
          <div className="divider-fancy my-6" />
          <p className="font-display text-2xl italic leading-snug">
            "It is much safer to be feared than loved, when one of the two must be wanting."
          </p>
          <p className="mt-3 text-sm text-muted-foreground">— Machiavelli, <em>The Prince</em></p>
        </aside>
      </section>

      {/* Question */}
      <section className="rounded-2xl border border-border bg-card/60 p-10 md:p-14">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Research Question</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-balance">
          How do the techniques of Sun Tzu and Machiavelli affect today's business world?
        </h2>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          Two thinkers, separated by two thousand years and a continent, both wrote handbooks on power.
          One wrote for generals; the other for princes. Today, their pages are dog-eared on the desks of CEOs,
          startup founders, and product strategists. This exhibit traces the strategies that survived the journey
          from battlefield and palace into the modern marketplace.
        </p>
      </section>

      {/* Two columns */}
      <section className="mt-20 grid gap-10 md:grid-cols-2">
        <ThinkerCard
          to="/sun-tzu"
          tag="The Eastern General"
          name="Sun Tzu"
          work="The Art of War (c. 5th century BCE)"
          line="Win before the fight. Know the terrain. Render the rival's strategy useless."
          accent="jade"
        />
        <ThinkerCard
          to="/machiavelli"
          tag="The Western Prince"
          name="Niccolò Machiavelli"
          work="The Prince (1532)"
          line="Hold the state. Be lion and fox. Be feared, if love is uncertain."
          accent="crimson"
        />
      </section>

      {/* Findings preview */}
      <section className="mt-24">
        <h2 className="font-display text-3xl md:text-4xl">Three findings, one thesis.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Across three sources, a single argument emerges: modern business is not a meritocracy of products —
          it is a theater of strategy, perception, and timing.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Finding
            n="01"
            title="Strategy beats product."
            body="The best product rarely wins on its own. A patient strategist with weaker resources can outmaneuver a stronger rival who lacks vision."
            cite="(Tzu, Griffith trans., ch. 3)"
          />
          <Finding
            n="02"
            title="Perception is power."
            body="Modern CEOs perform transparency the way Renaissance princes performed virtue — appearance is a tool of stability and control."
            cite="(Machiavelli, Marriott trans., ch. XVIII)"
          />
          <Finding
            n="03"
            title="Win without fighting."
            body="Apple did not beat competitors on price; it captured a market by innovation, exactly the move McNeilly maps onto Sun Tzu's first principle."
            cite="(McNeilly 23–46)"
          />
        </div>
      </section>
    </main>
  );
}

function ThinkerCard({ to, tag, name, work, line, accent }: { to: "/sun-tzu" | "/machiavelli"; tag: string; name: string; work: string; line: string; accent: "jade" | "crimson" }) {
  const accentClass = accent === "jade" ? "text-jade" : "text-crimson";
  return (
    <Link to={to} className="group block rounded-2xl border border-border bg-card p-10 transition hover:-translate-y-1 hover:shadow-scroll">
      <p className={`font-mono text-xs uppercase tracking-[0.3em] ${accentClass}`}>{tag}</p>
      <h3 className="mt-3 font-display text-5xl">{name}</h3>
      <p className="mt-2 italic text-muted-foreground">{work}</p>
      <p className="mt-6 font-display text-xl leading-snug text-balance">"{line}"</p>
      <p className="mt-8 text-sm font-medium group-hover:text-accent transition">Read the analysis →</p>
    </Link>
  );
}

function Finding({ n, title, body, cite }: { n: string; title: string; body: string; cite: string }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6">
      <p className="font-mono text-xs text-accent">{n}</p>
      <h3 className="mt-2 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{body}</p>
      <p className="mt-4 font-mono text-xs text-muted-foreground">{cite}</p>
    </article>
  );
}
