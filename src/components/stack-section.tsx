import type { LucideIcon } from "lucide-react";

type StackCard = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
};

/**
 * Sticky-stack scroll effect: each card pins to the same offset and the
 * next card (later in DOM/paint order) slides up to cover it, so cards
 * visually pile on top of each other while scrolling past the section.
 * Pure CSS (position: sticky) — no scroll-linked JS needed.
 */
export function StackSection({ cards }: { cards: StackCard[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      {cards.map((card, i) => (
        <div
          key={card.step}
          className="sticky"
          style={{ top: `${88 + i * 14}px` }}
        >
          <div
            className={`flex min-h-[280px] flex-col justify-center rounded-2xl border border-card-border bg-card p-8 shadow-xl md:min-h-[360px] md:p-12 ${i > 0 ? "mt-6" : ""}`}
          >
            <div className="flex items-start gap-5">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-md text-lg font-extrabold ${card.tone}`}
              >
                <card.icon className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted">
                  {card.step}
                </span>
                <h3 className="mt-1 text-2xl font-extrabold">{card.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
