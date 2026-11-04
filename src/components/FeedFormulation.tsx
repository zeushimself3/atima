"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Wheat } from "lucide-react";
import { useRef } from "react";
import { feedServices } from "@/lib/data";
import { Reveal, SectionTag, Stagger, StaggerItem } from "./motion";
import { RotatingBadge } from "./RotatingBadge";

export function FeedFormulation() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section id="feed" ref={ref} className="relative isolate overflow-hidden bg-forest-900 py-28 text-white sm:py-36">
      <div className="absolute inset-0 -z-10 bg-dots" />
      <div className="absolute -right-32 -bottom-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-leaf-500/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionTag dark>
              <Wheat className="h-3.5 w-3.5" /> Feed Formulation & Preparation
            </SectionTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl">
              Balanced Nutrition.
              <br />
              <span className="text-gradient-sun">Maximum Productivity.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Feed is the biggest cost on any livestock farm. Our formulations give your poultry and swine exactly what
              they need, and nothing they don&apos;t, so you get stronger growth for every cedi spent.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
            {feedServices.map((s) => (
              <StaggerItem key={s}>
                <div className="group flex h-full items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-sun-400/50">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf-500 transition-transform group-hover:scale-110">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </span>
                  <span className="font-medium">{s}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="relative">
          <motion.div
            style={{ rotate }}
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-[10px] border-white/10 shadow-2xl"
          >
            <motion.div style={{ y: imgY }} className="absolute -inset-[12%]">
              <Image
                src="/images/grain-hands.jpg"
                alt="Hands holding feed grain"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <Reveal delay={0.3} className="absolute top-4 -left-2 sm:left-0">
            <div className="animate-float overflow-hidden rounded-3xl border-4 border-forest-900 shadow-2xl">
              <div className="relative h-36 w-36 sm:h-44 sm:w-44">
                <Image src="/images/chicks-two.jpg" alt="Two yellow chicks" fill sizes="176px" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5} className="absolute -right-2 bottom-4 sm:right-4">
            <RotatingBadge className="h-36 w-36" />
          </Reveal>

          <Reveal delay={0.6} className="absolute bottom-0 left-6 sm:left-14">
            <div className="rounded-2xl bg-sun-400 px-5 py-3 text-forest-950 shadow-2xl">
              <p className="font-display text-lg font-extrabold">High Quality Feed</p>
              <p className="text-xs font-semibold tracking-wider uppercase">Better results</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
