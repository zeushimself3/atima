import { Sparkle } from "lucide-react";

const items = [
  "Poultry Farming",
  "Swine Farming",
  "Feed Formulation",
  "Animal Nutrition",
  "Farm Setup",
  "Health Optimization",
  "Balanced Nutrition",
  "Maximum Productivity",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative z-10 -mt-16 -rotate-2 overflow-hidden bg-sun-400 py-5 shadow-xl sm:-mt-20">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 font-display text-2xl font-extrabold whitespace-nowrap text-forest-900 uppercase sm:text-3xl"
          >
            {t}
            <Sparkle className="h-6 w-6 fill-forest-700 text-forest-700" />
          </span>
        ))}
      </div>
    </div>
  );
}
