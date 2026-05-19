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
            Two old books, one from a Chinese general and one from an Italian guy who got fired from
            his government job, still end up on the desks of <strong className="text-foreground">Sun Tzu</strong>{" "}
            and <strong className="text-foreground">Machiavelli</strong> fans running companies today.
            Why?
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
          How do Sun Tzu and Machiavelli's ideas show up in the business world today?
        </h2>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          Sun Tzu wrote for army generals around 2,500 years ago. Machiavelli wrote for rulers about
          500 years ago. Neither of them was thinking about Apple keynotes or layoffs over Zoom. But
          their advice keeps showing up anyway, just dressed up in business words. This site walks
          through how that happened, and where you can still see it.
        </p>
      </section>

      {/* Two columns */}
      <section className="mt-20 grid gap-10 md:grid-cols-2">
        <ThinkerCard
          to="/sun-tzu"
          tag="The Eastern General"
          name="Sun Tzu"
          work="The Art of War (c. 5th century BCE)"
          line="Win before the fight starts. Know the ground. Make your rival's plan useless."
          accent="jade"
        />
        <ThinkerCard
          to="/machiavelli"
          tag="The Western Prince"
          name="Niccolò Machiavelli"
          work="The Prince (1532)"
          line="Hold the state. Be lion and fox. Be feared if you cannot be loved."
          accent="crimson"
        />
      </section>

      {/* Findings preview */}
      <section className="mt-24">
        <h2 className="font-display text-3xl md:text-4xl">Three things I noticed.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          After reading these three sources, the same idea kept popping up: business isn't really a
          contest about who has the best product. It's more about who plans better, who looks better,
          and who moves at the right time.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Finding
            n="01"
            title="The best product doesn't always win."
            body="A smaller company with a smart plan can beat a bigger company that's just kind of winging it. This is basically Sun Tzu's whole thing."
          />
          <Finding
            n="02"
            title="How you look matters as much as what you do."
            body="CEOs today act caring and open in public the same way old rulers acted holy and fair. It's not always fake, but it's not an accident either."
          />
          <Finding
            n="03"
            title="The smartest move is to skip the fight."
            body="Apple didn't beat Nokia by making a cheaper phone. They made a different kind of phone, so price didn't even matter. McNeilly calls this Sun Tzu's number one rule."
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

function Finding({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6">
      <p className="font-mono text-xs text-accent">{n}</p>
      <h3 className="mt-2 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{body}</p>
    </article>
  );
}
