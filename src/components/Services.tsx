import { HeartPulse, Settings, TrendingUp, Warehouse, Wheat, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal, SectionTag, Stagger, StaggerItem } from "./motion";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  warehouse: Warehouse,
  trending: TrendingUp,
  wheat: Wheat,
  heart: HeartPulse,
};

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionTag>
              <Settings className="h-3.5 w-3.5" /> Services Offered
            </SectionTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Everything your farm needs to <span className="text-leaf-500">grow</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-forest-900/70">
              Practical, expert-led services that take you from idea to a running, profitable operation.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <StaggerItem key={s.title}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-forest-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-forest-900/10">
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-br from-forest-800 to-forest-950 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-leaf-500/10 text-leaf-500 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-sun-400 group-hover:text-forest-950">
                        <Icon className="h-8 w-8" />
                      </span>
                      <span className="font-display text-5xl font-extrabold text-forest-900/5 transition-colors group-hover:text-white/10">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-xl font-bold text-forest-900 transition-colors group-hover:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-forest-900/65 transition-colors group-hover:text-white/75">
                      {s.text}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
