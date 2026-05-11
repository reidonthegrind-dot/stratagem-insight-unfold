import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: "The Strategist's Puzzle — Strategists & CEOs" },
      { name: "description", content: "Match each business scenario to the strategic principle from Sun Tzu or Machiavelli that explains it." },
    ],
  }),
  component: GamePage,
});

type Principle = {
  id: string;
  label: string;
  source: "Sun Tzu" | "Machiavelli";
  cite: string;
};

const PRINCIPLES: Principle[] = [
  { id: "win-without-fighting", label: "Win without fighting", source: "Sun Tzu", cite: "(McNeilly 23–46)" },
  { id: "know-terrain", label: "Know the terrain", source: "Sun Tzu", cite: "(Tzu, ch. X)" },
  { id: "attack-weakness", label: "Attack weakness, not strength", source: "Sun Tzu", cite: "(McNeilly 71–94)" },
  { id: "lion-fox", label: "Be both lion and fox", source: "Machiavelli", cite: "(Machiavelli, ch. XVIII)" },
  { id: "feared-vs-loved", label: "Better feared than loved", source: "Machiavelli", cite: "(Machiavelli, ch. XVII)" },
  { id: "appear-virtuous", label: "Perform virtue publicly", source: "Machiavelli", cite: "(Machiavelli, ch. XVIII)" },
];

type Scenario = {
  id: string;
  text: string;
  answerId: string;
  explanation: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: "s1",
    text: "Apple launches the iPhone and refuses to compete with Nokia on price — instead it redefines what a phone is, making the price war irrelevant.",
    answerId: "win-without-fighting",
    explanation: "McNeilly uses this exact case: Apple subdued the competition by changing the category, not by attacking it head-on.",
  },
  {
    id: "s2",
    text: "A startup spends three months interviewing customers and mapping the regulatory landscape before writing a single line of code.",
    answerId: "know-terrain",
    explanation: "Sun Tzu insists the commander who reads the ground first wins. The market is the terrain.",
  },
  {
    id: "s3",
    text: "A challenger SaaS firm avoids the giant's flagship product entirely and targets a niche the giant has neglected for years.",
    answerId: "attack-weakness",
    explanation: "Frontal assault on strength is wasteful. Exploit the gap the rival has left undefended.",
  },
  {
    id: "s4",
    text: "A CEO gives an inspiring all-hands keynote in the morning and signs a hostile acquisition term sheet that afternoon.",
    answerId: "lion-fox",
    explanation: "The lion roars in public; the fox negotiates in private. Machiavelli's leader is both.",
  },
  {
    id: "s5",
    text: "A founder backs every employee promise with strict equity vesting and clear consequences for breach, rather than relying on goodwill.",
    answerId: "feared-vs-loved",
    explanation: "Affection is granted by others and can vanish; consequence is held by you. Machiavelli's preferred footing.",
  },
  {
    id: "s6",
    text: "A company publishes a glossy annual transparency report while quietly tightening its NDAs.",
    answerId: "appear-virtuous",
    explanation: "Machiavelli's prince must appear merciful and upright, whatever policy requires beneath the surface.",
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function GamePage() {
  const [seed, setSeed] = useState(0);
  const scenarios = useMemo(() => shuffle(SCENARIOS), [seed]);
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const scenario = scenarios[current];
  const isCorrect = picked === scenario?.answerId;

  function pick(id: string) {
    if (picked) return;
    setPicked(id);
    if (id === scenario.answerId) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= scenarios.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  }

  function reset() {
    setSeed((s) => s + 1);
    setCurrent(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Interactive · Puzzle</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">The Strategist's Puzzle</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        A modern business scenario will appear. Match it to the strategic principle from <em>The Art of War</em> or
        <em> The Prince</em> that best explains the move. Six rounds.
      </p>

      <div className="mt-10 flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span>Round {Math.min(current + 1, scenarios.length)} / {scenarios.length}</span>
        <span>Score: <span className="text-accent">{score}</span></span>
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${((done ? scenarios.length : current) / scenarios.length) * 100}%` }}
        />
      </div>

      {!done ? (
        <article className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-scroll">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-jade">Scenario</p>
          <p className="mt-3 font-display text-2xl leading-snug text-balance">{scenario.text}</p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {PRINCIPLES.map((p) => {
              const isPickedOption = picked === p.id;
              const isAnswer = scenario.answerId === p.id;
              const state = !picked
                ? "idle"
                : isPickedOption && isAnswer
                ? "correct"
                : isPickedOption && !isAnswer
                ? "wrong"
                : isAnswer
                ? "reveal"
                : "dim";
              const cls = {
                idle: "border-border hover:border-accent hover:bg-secondary cursor-pointer",
                correct: "border-jade bg-jade/10",
                wrong: "border-destructive bg-destructive/10",
                reveal: "border-jade/60 bg-jade/5",
                dim: "border-border opacity-50",
              }[state];
              return (
                <button
                  key={p.id}
                  onClick={() => pick(p.id)}
                  disabled={!!picked}
                  className={`rounded-xl border-2 p-4 text-left transition ${cls}`}
                >
                  <p className="font-display text-lg">{p.label}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {p.source} · {p.cite}
                  </p>
                </button>
              );
            })}
          </div>

          {picked && (
            <div className="mt-6 rounded-lg border border-border bg-background/60 p-5">
              <p className={`font-display text-xl ${isCorrect ? "text-jade" : "text-crimson"}`}>
                {isCorrect ? "Well-fought." : "A misstep."}
              </p>
              <p className="mt-2 text-sm text-foreground/90">{scenario.explanation}</p>
              <button
                onClick={next}
                className="mt-5 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition"
              >
                {current + 1 >= scenarios.length ? "See result →" : "Next round →"}
              </button>
            </div>
          )}
        </article>
      ) : (
        <article className="mt-10 rounded-2xl border border-border bg-card p-10 text-center shadow-scroll">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Campaign complete</p>
          <h2 className="mt-3 font-display text-5xl">{score} / {scenarios.length}</h2>
          <p className="mt-4 text-muted-foreground">{verdict(score, scenarios.length)}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={reset} className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition">
              Play again
            </button>
            <Link to="/sources" className="rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition">
              Read the sources →
            </Link>
          </div>
        </article>
      )}
    </main>
  );
}

function verdict(score: number, total: number) {
  const r = score / total;
  if (r === 1) return "A general worthy of Sun Tzu and a prince worthy of Florence.";
  if (r >= 0.75) return "Sharp instincts. Your terrain is well-read.";
  if (r >= 0.5) return "A capable strategist — but the fox still has lessons for you.";
  return "Retreat, regroup, and re-read the chapters. The market rewards study.";
}
