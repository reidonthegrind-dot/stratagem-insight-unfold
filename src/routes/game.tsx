import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/game")({
  head: () => ({
    meta: [
      { title: "The Strategist's Puzzle — Strategists & CEOs" },
      { name: "description", content: "Match each business scenario to the strategy from Sun Tzu or Machiavelli that explains it. Plus a bonus level for experts." },
    ],
  }),
  component: GamePage,
});

type Principle = {
  id: string;
  label: string;
  source: "Sun Tzu" | "Machiavelli";
};

const PRINCIPLES: Principle[] = [
  { id: "win-without-fighting", label: "Win without fighting", source: "Sun Tzu" },
  { id: "know-terrain", label: "Know the terrain", source: "Sun Tzu" },
  { id: "attack-weakness", label: "Attack weakness, not strength", source: "Sun Tzu" },
  { id: "lion-fox", label: "Be both lion and fox", source: "Machiavelli" },
  { id: "feared-vs-loved", label: "Better feared than loved", source: "Machiavelli" },
  { id: "appear-virtuous", label: "Look good in public", source: "Machiavelli" },
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
    text: "Apple launches the iPhone and refuses to fight Nokia on price. Instead it changes what a phone even is, so the price war stops mattering.",
    answerId: "win-without-fighting",
    explanation: "Apple beat the competition by changing the game, not by attacking head-on.",
  },
  {
    id: "s2",
    text: "A startup spends three months talking to customers and studying the rules of the market before writing a single line of code.",
    answerId: "know-terrain",
    explanation: "Sun Tzu says the leader who reads the ground first wins. The market is the ground.",
  },
  {
    id: "s3",
    text: "A small SaaS company avoids the giant's main product and goes after a small group of customers the giant has ignored for years.",
    answerId: "attack-weakness",
    explanation: "Hitting the strong part is wasteful. Go where the rival is not paying attention.",
  },
  {
    id: "s4",
    text: "A CEO gives a warm all-hands speech in the morning and signs a hostile takeover deal that same afternoon.",
    answerId: "lion-fox",
    explanation: "The lion shows strength in public; the fox makes quiet deals. Machiavelli's leader is both.",
  },
  {
    id: "s5",
    text: "A founder backs every promise with strict stock rules and clear punishments instead of trusting people to be nice.",
    answerId: "feared-vs-loved",
    explanation: "Love is given by other people and can disappear. Consequences stay in your hands.",
  },
  {
    id: "s6",
    text: "A company puts out a shiny yearly report about being open and honest while quietly making its contracts more strict.",
    answerId: "appear-virtuous",
    explanation: "Machiavelli's leader needs to look good no matter what is really happening behind the scenes.",
  },
];

const BONUS_SCENARIOS: Scenario[] = [
  {
    id: "b1",
    text: "Netflix kills its own DVD business to push streaming, even though DVDs still make money. Customers and investors panic, but a few years later there is no rival close enough to catch up.",
    answerId: "win-without-fighting",
    explanation: "Netflix did not fight Blockbuster on Blockbuster's ground. It moved to a place where the old fight could not happen at all.",
  },
  {
    id: "b2",
    text: "A new electric car company hires engineers from every big automaker, buys their old factories, and signs deals with battery makers a full year before launching anything. By the time rivals notice, the supply chain is already locked up.",
    answerId: "know-terrain",
    explanation: "The win happened before the public fight. They mapped the ground, the supply, and the people first.",
  },
  {
    id: "b3",
    text: "A founder publicly says they treat staff like family. They also write contracts with strong non-competes and quietly track who talks to recruiters.",
    answerId: "appear-virtuous",
    explanation: "The kind public face matters. The hard rules underneath protect the company. Machiavelli says do both.",
  },
  {
    id: "b4",
    text: "A challenger phone brand skips the flagship market entirely. Instead it floods countries the giants treat as small or boring, builds a huge user base there, then walks back into the main market with money and trust already in hand.",
    answerId: "attack-weakness",
    explanation: "Do not throw yourself at the strongest wall. Take the unguarded door, then come back stronger.",
  },
  {
    id: "b5",
    text: "A CEO is loved by the press for being kind. When two top engineers leak product plans, she fires them the same day and makes sure the whole company hears about it.",
    answerId: "feared-vs-loved",
    explanation: "Being liked is fine, but the team has to know there is a real cost for crossing the line.",
  },
  {
    id: "b6",
    text: "A startup raises a giant round, throws a flashy launch party, and tells the press it is unstoppable. At the same time, it secretly buys two small rivals so no one can copy its move.",
    answerId: "lion-fox",
    explanation: "Loud and brave in public, quiet and clever in private. That is the lion and the fox working together.",
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
  const [mode, setMode] = useState<"main" | "bonus">("main");
  const scenarios = useMemo(
    () => shuffle(mode === "main" ? SCENARIOS : BONUS_SCENARIOS),
    [seed, mode],
  );
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [bonusUnlocked, setBonusUnlocked] = useState(false);

  const scenario = scenarios[current];
  const isCorrect = picked === scenario?.answerId;

  function pick(id: string) {
    if (picked) return;
    setPicked(id);
    if (id === scenario.answerId) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= scenarios.length) {
      if (mode === "main") setBonusUnlocked(true);
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

  function startBonus() {
    setMode("bonus");
    setSeed((s) => s + 1);
    setCurrent(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  function backToMain() {
    setMode("main");
    reset();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        Interactive · {mode === "bonus" ? "Bonus Level" : "Puzzle"}
      </p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">
        {mode === "bonus" ? "The General's Trial" : "The Strategist's Puzzle"}
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        {mode === "bonus"
          ? "Six harder cases. The moves are messier and more than one idea could fit. Pick the one that explains the move best."
          : "A modern business story will pop up. Match it to the idea from The Art of War or The Prince that explains the move best. Six rounds."}
      </p>

      <div className="mt-10 flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span>Round {Math.min(current + 1, scenarios.length)} / {scenarios.length}</span>
        <span>Score: <span className="text-accent">{score}</span></span>
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full transition-all ${mode === "bonus" ? "bg-crimson" : "bg-accent"}`}
          style={{ width: `${((done ? scenarios.length : current) / scenarios.length) * 100}%` }}
        />
      </div>

      {!done ? (
        <article className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-scroll">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-jade">
            {mode === "bonus" ? "Hard Scenario" : "Scenario"}
          </p>
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
                    {p.source}
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
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {mode === "bonus" ? "Trial complete" : "Campaign complete"}
          </p>
          <h2 className="mt-3 font-display text-5xl">{score} / {scenarios.length}</h2>
          <p className="mt-4 text-muted-foreground">{verdict(score, scenarios.length, mode)}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={reset} className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition">
              Play again
            </button>
            {mode === "main" && bonusUnlocked && (
              <button
                onClick={startBonus}
                className="rounded-full bg-crimson px-6 py-3 text-sm text-primary-foreground hover:opacity-90 transition"
              >
                Try the bonus level →
              </button>
            )}
            {mode === "bonus" && (
              <button
                onClick={backToMain}
                className="rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition"
              >
                ← Back to main puzzle
              </button>
            )}
            <Link to="/sources" className="rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition">
              Read the sources →
            </Link>
          </div>
        </article>
      )}
    </main>
  );
}

function verdict(score: number, total: number, mode: "main" | "bonus") {
  const r = score / total;
  if (mode === "bonus") {
    if (r === 1) return "A flawless run. Sun Tzu and Machiavelli would both nod.";
    if (r >= 0.75) return "Sharp eyes. You can read a messy fight.";
    if (r >= 0.5) return "Not bad. The hard cases hide more than one move at once.";
    return "These were the tricky ones. Try again, the patterns get clearer.";
  }
  if (r === 1) return "A leader worthy of both ancient China and old Florence.";
  if (r >= 0.75) return "Sharp instincts. You read the ground well.";
  if (r >= 0.5) return "A solid strategist, but the fox still has things to teach you.";
  return "Pull back, study the chapters, and try again. The market rewards study.";
}
