import { createFileRoute, Link } from "@tanstack/react-router";
import { Term } from "@/components/Term";

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
        <em>The Art of War</em> is like 2,000 years old and it still kinda reads like a how-to for
        starting a company. Sun Tzu's big point is pretty simple. The best general doesn't just
        barely win a tough fight. The best general already won before the fight even started.
      </p>

      <section className="mt-12 space-y-4 text-foreground/90 leading-relaxed text-lg">
        <p>
          Sun Tzu's whole thing is that the best general wins before any fighting happens, and he
          gets there by knowing the ground he's standing on really well. In business that ground is
          the{" "}
          <Term definition="In Sun Tzu, the physical ground of battle. In business, the full landscape a company operates in: customers, regulators, competitors, and cultural mood.">
            market
          </Term>
          . The customers, the rules, the other companies, even what mood people are in that month.
          A smart{" "}
          <Term definition="A person who plans long-term moves to gain advantage, weighing strengths, weaknesses, timing, and the moves of others — not just executing tactics.">
            strategist
          </Term>{" "}
          with way less money can still beat a bigger rival that doesn't really get the ground it
          keeps tripping over. His most famous line is that the best win is the one you never had
          to fight, and Mark McNeilly basically turns that into a buisness rule. Instead of getting
          stuck in{" "}
          <Term definition="A competitive race in which rivals repeatedly cut prices to undercut each other, often shrinking everyone's profit until only the cheapest survives.">
            price wars
          </Term>
          , build something new enough that the fight isn't even on the same field. The iPhone is
          McNeilly's go-to one. Apple didn't try to undercut Nokia. They just made the price thing
          kinda not matter. Sun Tzu also warns about running straight at the strongest wall, like a{" "}
          <Term definition="A direct, head-on attack against the strongest, most defended part of an opponent — usually costly and rarely decisive.">
            frontal assault
          </Term>
          , and McNeilly's version of that is Microsoft. They didn't beat IBM on hardware. They
          grabbed the operating system, which IBM wasn't even really watching. The other big piece
          is speed, because long wars just burn through everything. Today people call it "shipping
          fast,"{" "}
          <Term definition="The competitive edge a company gains by being the first to enter a new market — capturing customers, brand recognition, and key partnerships before rivals arrive.">
            "first-mover advantage,"
          </Term>{" "}
          or{" "}
          <Term definition="A startup tactic, coined by Reid Hoffman, of prioritizing breakneck growth over efficiency in order to dominate a market before competitors can react.">
            "blitzscaling."
          </Term>{" "}
          The mind games part is just as old too. If your rival already thinks they lost, they
          kinda stop trying for real, and thats half the battle right there.
        </p>
      </section>

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
