import { Leaf } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-leaf-400 to-forest-700 shadow-lg shadow-forest-900/30">
        <Leaf className="h-5 w-5 text-sun-300" strokeWidth={2.5} />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-forest-900"}`}>
          KAG <span className="text-sun-500">Consult</span>
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.25em] ${light ? "text-white/60" : "text-forest-700/70"}`}>
          Poultry · Swine · Feed
        </span>
      </span>
    </span>
  );
}
