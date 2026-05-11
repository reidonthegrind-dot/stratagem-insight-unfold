import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sources")({
  head: () => ({
    meta: [
      { title: "Annotated Sources — Strategists & CEOs" },
      { name: "description", content: "MLA-cited annotated bibliography for the research exhibit on Sun Tzu and Machiavelli in modern business." },
    ],
  }),
  component: SourcesPage,
});

function SourcesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Bibliography · MLA</p>
      <h1 className="mt-3 font-display text-5xl">Annotated Sources</h1>
      <p className="mt-4 text-muted-foreground">Three works ground this exhibit. Each entry includes a summary and a research reflection.</p>

      <ol className="mt-12 space-y-12">
        <Entry
          citation={<>Machiavelli, Niccolò. <em>The Prince</em>. Translated by W. K. Marriott, Simon & Schuster, 2018.</>}
          summary="The Prince is a ruthless and systematic guide whose sole goal is the attainment and maintenance of power. Machiavelli argues that the primary duty of a leader is the stability of the state, and that this requires both cunning and strength — a leader must be both a lion and a fox. He is best known for posing the question of whether it is better to be feared or loved, concluding that both are ideal, but that fear is preferable when one must choose, because it ensures loyalty and prevents rebellion."
          reflection="I used this source to develop my understanding of the Western approach to power dynamics. While modern business publicly promotes transparency, reading The Prince helped me see how today's CEOs use perception to appear transparent when, in reality, they are far from it — underscoring the importance of perception in modern decision-making."
        />
        <Entry
          citation={<>McNeilly, Mark R. <em>Sun Tzu and the Art of Business: Six Strategic Principles for Managers</em>. Revised ed., Oxford University Press, 2012.</>}
          summary="McNeilly adapts The Art of War into six actionable business strategies. He emphasizes principles such as winning without fighting — capturing markets through innovation rather than through price wars — and attacking weakness by exploiting competitors' strategic gaps. He uses modern cases such as Apple and Microsoft to show how psychological dominance and speed translate into competitive edge."
          reflection="This source shifted my thinking from a purely aggressive view of strategy toward a more intelligent and patient one. McNeilly demonstrated that Sun Tzu's techniques are highly relevant to market entry, where the goal is to render your opponent's strategy useless relative to your own. It provided the bridge between ancient texts and the present age. (Thanks, Gramps for helping me find this.)"
        />
        <Entry
          citation={<>Tzu, Sun. <em>The Art of War</em>. Translated by Samuel B. Griffith, Oxford University Press, 1963.</>}
          summary="A foundational text on military strategy emphasizing flexibility, intelligence, and the psychological state of the opponent. Sun Tzu argues that a leader should use deception and knowledge of terrain to outmaneuver enemies. The book is divided into thirteen chapters, each focused on a different facet of strategic thought."
          reflection="This source helped me understand the psychological side of warfare through Sun Tzu's tactics. It gave me the connection that 'knowing your terrain' is the same as a business knowing its market — knowing your opponent and knowing the ground you fight on. From a marketing standpoint, you know who you're marketing to (the terrain) and who your opponent is. This source supports the argument that having the best product doesn't mean you will win; a strong strategist can win while being down."
        />
      </ol>
    </main>
  );
}

function Entry({ citation, summary, reflection }: { citation: React.ReactNode; summary: string; reflection: string }) {
  return (
    <li className="rounded-2xl border border-border bg-card p-8">
      <p className="font-display text-lg leading-snug">{citation}</p>
      <div className="mt-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Summary</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/90">{summary}</p>
      </div>
      <div className="mt-5">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-jade">Reflection</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/90">{reflection}</p>
      </div>
    </li>
  );
}
