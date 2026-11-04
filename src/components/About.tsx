"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Info } from "lucide-react";
import { useRef } from "react";
import { Reveal, SectionTag } from "./motion";

const points = [
  "Poultry and swine farming specialists",
  "Animal nutrition and feed formulation",
  "Tailored solutions for every farm size",
  "Practical, on-farm support",
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 90]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative h-[520px] sm:h-[600px]">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-0 left-0 h-[78%] w-[68%] overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <Image
              src="/images/white-chicken.jpg"
              alt="White chickens in a modern poultry house"
              fill
              sizes="(min-width: 1024px) 30vw, 65vw"
              className="object-cover transition-transform duration-[1.5s] hover:scale-110"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute right-0 bottom-0 h-[58%] w-[56%] overflow-hidden rounded-[2rem] border-8 border-cream-50 shadow-2xl"
          >
            <Image
              src="/images/pigs-pen.jpg"
              alt="Young pigs in a straw-lined pen"
              fill
              sizes="(min-width: 1024px) 25vw, 55vw"
              className="object-cover transition-transform duration-[1.5s] hover:scale-110"
            />
          </motion.div>
          <Reveal delay={0.3} className="absolute top-[58%] left-[8%] z-10">
            <div className="flex items-center gap-3 rounded-2xl bg-forest-900 px-5 py-4 text-white shadow-2xl">
              <span className="font-display text-4xl font-extrabold text-sun-400">2</span>
              <span className="text-sm leading-tight font-semibold">
                Livestock
                <br />
                specialties
              </span>
            </div>
          </Reveal>
          <div className="absolute -top-6 right-10 -z-10 h-40 w-40 rounded-full bg-sun-300/50 blur-2xl" />
        </div>

        <div>
          <Reveal>
            <SectionTag>
              <Info className="h-3.5 w-3.5" /> About Us
            </SectionTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Helping farmers build <span className="text-leaf-500">thriving</span> farms.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-forest-900/75">
              <strong className="text-forest-900">KAG Consult</strong> specializes in poultry and swine farming and
              nutrition. Our goal is to help farmers establish and grow successful poultry and swine ventures with
              tailored solutions.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-lg leading-relaxed text-forest-900/75">
              Partner with us for expert advice and practical support in building a thriving farm, whether you&apos;re
              raising your first flock or scaling an established operation.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.35 + i * 0.08} y={20}>
                <li className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-forest-900/5 transition hover:-translate-y-1 hover:shadow-lg">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf-500" />
                  <span className="font-medium text-forest-900">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
