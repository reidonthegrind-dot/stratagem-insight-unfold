import { createFileRoute, Link } from "@tanstack/react-router";
import { Term } from "@/components/Term";

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
        <em>The Prince</em> isn't really a book about being a good person. It's a book about
        staying on top once you actually got there. Swap the old Florence map for a company org
        chart and honestly, a lot of it still hits pretty hard.
      </p>

      <section className="mt-12 space-y-4 text-foreground/90 leading-relaxed text-lg">
        <p>
          Machiavelli's whole thing is staying in power once you have it. The first job of his
          prince is keeping the state in one piece, which in modern words is just keeping the
          company alive and{" "}
          <Term definition="A company's ability to pay its debts and keep operating without going bankrupt.">
            solvent
          </Term>
          . Thats why layoffs, sudden{" "}
          <Term definition="A deliberate change in a company's strategy, product, or market when the original plan isn't working.">
            pivots
          </Term>
          , and killing off projects don't really count as "wrong" in this mindset. They count as
          whatever keeps the lights on. He says a leader has to be both a{" "}
          <Term definition="Machiavelli's image of the leader who relies on raw strength and intimidation to scare off threats — powerful but easily trapped.">
            lion
          </Term>{" "}
          and a{" "}
          <Term definition="Machiavelli's image of the leader who relies on cunning, deception, and pattern-recognition to spot traps — clever but unable to fight off real predators alone.">
            fox
          </Term>
          , and CEOs kinda do both every single week. The lion shows up in the big speech, and the
          fox shows up in the quiet meeting where the lawyers are timing an{" "}
          <Term definition="When one company buys another and absorbs its assets, employees, or product line.">
            acquisition
          </Term>
          . His most famous question is whether a leader should be feared or loved. His answer is
          that fear is safer, because love can get taken back, but fear is something you actually
          control. You see this in companies that try to run on pure "we're a family" vibes and
          then kinda fall apart at the first bad quarter. Then there's the ones that back up the
          loyalty with{" "}
          <Term definition="A schedule that gives employees ownership of company stock gradually over time, so they only fully earn it if they stay long enough.">
            equity vesting
          </Term>
          ,{" "}
          <Term definition="A clause in an employment contract that bars a worker from joining a competitor for a set period after leaving.">
            non-competes
          </Term>
          , and real performance reviews. And Machiavelli's last big move is image. A prince has to{" "}
          <em>look</em> kind and honest even when the actual choices arent. Which is pretty much
          exactly what modern transparancy reports and mission statements are doing. The most{" "}
          <Term definition="Describes behavior that is cunning, manipulative, and willing to use deception or harsh tactics to gain or keep power — named after Niccolò Machiavelli.">
            Machiavellian
          </Term>{" "}
          thing a CEO can pull off today is looking like the kind of person who would never do
          anything Machiavellian.
        </p>
      </section>

      <Pullquote>
        Modern business preaches openness. The Prince teaches how to perform it.
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
