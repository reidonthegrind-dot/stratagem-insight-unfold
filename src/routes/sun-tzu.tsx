import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sun-tzu")({
  head: () => ({
    meta: [
      { title: "Sun Tzu in Modern Business — Strategists & CEOs" },
      { name: "description", content: "How Sun Tzu's Art of War shapes modern business strategy: winning without fighting, knowing the terrain, attacking weakness." },
    ],
  }),
  component: SunTzuPage,
});

function SunTzuPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-jade">The Eastern General</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Sun Tzu in the Boardroom</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Two and a half millennia after it was written, <em>The Art of War</em> reads less like a relic and more
        like a market-entry playbook. Sun Tzu's argument is simple: the smartest general wins before the fight begins.
      </p>

      <Section title="1. Know the terrain — know the market.">
        <p>
          Sun Tzu insists that victory belongs to the commander who reads the ground before stepping on it.
          Translated into business, the "terrain" is the market itself: the customers, the regulators, the
          competitors, the cultural mood. A founder launching a product without studying the terrain is, by
          Sun Tzu's standard, already defeated <Cite>(Tzu, Griffith trans., ch. X)</Cite>.
        </p>
        <p>
          From a marketing standpoint this becomes literal: you must know who you are speaking to (the terrain)
          and who else is speaking to them (the opponent). A strong strategist with a smaller budget can still
          win because they have mapped the ground their rival is fumbling across blindly.
        </p>
      </Section>

      <Section title="2. Win without fighting.">
        <p>
          The most quoted line of <em>The Art of War</em> — "the supreme art of war is to subdue the enemy without
          fighting" — is also the one most aggressively applied in modern business. Mark McNeilly translates it as
          the principle of capturing markets through innovation rather than through price wars
          <Cite>(McNeilly 23–46)</Cite>.
        </p>
        <p>
          Apple's iPhone launch is McNeilly's textbook case. Apple did not undercut Nokia or BlackBerry on price; it
          made the conversation about price irrelevant by redefining what a phone could be. That is winning without
          fighting: rendering the opponent's strategy useless rather than defeating it head-on.
        </p>
      </Section>

      <Section title="3. Attack weakness, not strength.">
        <p>
          Sun Tzu warns against frontal assault on a fortified position. McNeilly maps this directly onto
          competitive strategy — exploit a competitor's strategic gaps instead of meeting their strengths
          <Cite>(McNeilly 71–94)</Cite>. Microsoft's early dominance, he argues, came not from out-engineering IBM
          but from occupying the operating-system seat that IBM had left lightly defended.
        </p>
      </Section>

      <Section title="4. Speed and psychological dominance.">
        <p>
          Sun Tzu prizes speed: a campaign drawn out too long drains the treasury and the morale of the troops
          <Cite>(Tzu, Griffith trans., ch. II)</Cite>. In the modern startup vocabulary this is "shipping fast,"
          "first-mover advantage," and "blitzscaling." The psychological half is just as old: a competitor who
          believes they have already lost will stop investing in the fight.
        </p>
      </Section>

      <Pullquote>
        Having the best product doesn't mean you will win. A strong strategist can win while being down.
      </Pullquote>

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
