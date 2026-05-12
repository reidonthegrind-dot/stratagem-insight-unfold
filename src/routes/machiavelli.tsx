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
        <em>The Prince</em> is not a guide for being a good person. It is a guide for staying in power.
        Read today, with a company org chart in place of an old map of Florence, it feels surprisingly modern.
      </p>

      <Section title="1. The first job: keep the state alive.">
        <p>
          Machiavelli's prince has one main job: make sure his state survives.
          The modern version is easy to see.
          A CEO's first job, in the eyes of the board, is to keep the company strong and{" "}
          <Term definition="A company's ability to pay its debts and keep operating without going bankrupt.">
            solvent
          </Term>
          . Layoffs, sudden{" "}
          <Term definition="A deliberate change in a company's strategy, product, or market when the original plan isn't working.">
            pivots
          </Term>
          , and shutdowns are not seen as wrong inside this view. They are moves that keep the company
          standing.
        </p>
      </Section>

      <Section title="2. The lion and the fox.">
        <p>
          Machiavelli writes that a leader has to be both a{" "}
          <Term definition="Machiavelli's image of the leader who relies on raw strength and intimidation to scare off threats — powerful but easily trapped.">
            lion
          </Term>{" "}
          (to scare off wolves) and a{" "}
          <Term definition="Machiavelli's image of the leader who relies on cunning, deception, and pattern-recognition to spot traps — clever but unable to fight off real predators alone.">
            fox
          </Term>{" "}
          (to spot traps).
          Today's CEO does both jobs every week.
          The lion shows up in the big speech to staff and in the press. The fox shows up in private
          meetings, in legal moves, and in the timing of an{" "}
          <Term definition="When one company buys another and absorbs its assets, employees, or product line.">
            acquisition
          </Term>
          .
        </p>
      </Section>

      <Section title="3. Feared or loved?">
        <p>
          Machiavelli's most famous question is whether a leader should be feared or loved. His real
          answer is that having both is best. But if a leader has to pick one, fear is safer. Love is
          something other people give you, so they can also take it back. Fear is something you control
          yourself. Loyalty based on warm feelings can vanish the moment things get hard. Loyalty based
          on real consequences sticks around.
        </p>
        <p>
          The modern version is easy to spot. Companies that try to run only on the "we're a family"
          feeling tend to fall apart the second the market turns. Companies that mix real loyalty with
          real consequences, like{" "}
          <Term definition="A schedule that gives employees ownership of company stock gradually over time, so they only fully earn it if they stay long enough.">
            equity vesting
          </Term>
          ,{" "}
          <Term definition="A clause in an employment contract that bars a worker from joining a competitor for a set period after leaving.">
            non-competes
          </Term>
          , and performance reviews, last longer than the vibe.
        </p>
      </Section>

      <Section title="4. Acting the part.">
        <p>
          Machiavelli is blunt. A prince has to <em>look</em> kind, honest, caring, and good, even when
          his actual choices are the opposite.
          Modern CEOs do the same thing. Public reports about openness, mission statements about
          "doing the right thing," and carefully planned town halls are the same old Renaissance idea
          dressed up in HR language. The most{" "}
          <Term definition="Describes behavior that is cunning, manipulative, and willing to use deception or harsh tactics to gain or keep power — named after Niccolò Machiavelli.">
            Machiavellian
          </Term>{" "}
          thing a CEO can do today is look like they would never do anything Machiavellian.
        </p>
      </Section>

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
