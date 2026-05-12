import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function Term({
  children,
  definition,
}: {
  children: React.ReactNode;
  definition: React.ReactNode;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="underline decoration-accent decoration-dotted underline-offset-4 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          {children}
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className="max-w-xs border-border bg-card text-sm leading-relaxed text-foreground/90 shadow-scroll"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Definition</p>
        <p className="mt-1.5">{definition}</p>
      </PopoverContent>
    </Popover>
  );
}
