"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Award, Handshake, ThumbsUp, Target, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { whyUs } from "@/lib/data";
import { Reveal, SectionTag } from "./motion";

const icons: LucideIcon[] = [Award, Target, Handshake];

export function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.25, 1]);
  const clip = useTransform(scrollYProgress, [0, 0.4], ["inset(12% 12% 12% 12% round 3rem)", "inset(0% 0% 0% 0% round 2rem)"]);

  return (
    <section id="why-us" ref={ref} className="relative bg-cream-100 py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div style={{ clipPath: clip }} className="relative h-[460px] overflow-hidden sm:h-[580px]">
          <motion.div style={{ scale }} className="absolute inset-0">
            <Image
              src="/images/farmer-field.jpg"
              alt="Farmer tending to his farm"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
          <div className="absolute right-6 bottom-6 left-6 rounded-2xl bg-white/15 p-5 text-white ring-1 ring-white/25 backdrop-blur-md">
            <p className="font-display text-xl font-bold">From startup to profitability</p>
            <p className="mt-1 text-sm text-white/80">We stay with you at every stage of your farm&apos;s journey.</p>
          </div>
        </motion.div>

        <div>
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

          <div className="mt-10 space-y-5">
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
      </div>
    </section>
  );
}
