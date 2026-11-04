"use client";

import { Award, Handshake, ThumbsUp, Target, type LucideIcon } from "lucide-react";
import { whyUs } from "@/lib/data";
import { Reveal, SectionTag } from "./motion";

const icons: LucideIcon[] = [Award, Target, Handshake];

export function WhyUs() {
  return (
    <section id="why-us" className="relative bg-cream-100 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <SectionTag>
              <ThumbsUp className="h-3.5 w-3.5" /> Why Choose Us
            </SectionTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              A partner invested in <span className="text-leaf-500">your success</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 space-y-5 text-left">
          {whyUs.map((w, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={w.title} delay={0.15 + i * 0.12} x={40} y={0}>
                <div className="group flex items-start gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-forest-900/5 transition-all duration-500 hover:translate-x-2 hover:shadow-xl">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-forest-800 text-sun-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{w.title}</h3>
                    <p className="mt-1 text-forest-900/65">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
