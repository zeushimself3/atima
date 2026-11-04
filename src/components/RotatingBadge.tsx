import { Leaf } from "lucide-react";

export function RotatingBadge({
  text = "HIGH QUALITY FEED • BETTER RESULTS • ",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={`relative grid h-32 w-32 place-items-center ${className}`}>
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <circle cx="60" cy="60" r="58" className="fill-forest-800" />
        <text className="fill-sun-300 text-[10.5px] font-bold tracking-[0.18em]">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-sun-400 shadow-inner">
        <Leaf className="h-7 w-7 text-forest-800" strokeWidth={2.5} />
      </span>
      <span className="sr-only">High quality feed, better results</span>
    </div>
  );
}
