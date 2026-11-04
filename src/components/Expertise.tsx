"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { expertise } from "@/lib/data";
import { Reveal, SectionTag, Stagger, StaggerItem } from "./motion";

function TiltCard({ item, index }: { item: (typeof expertise)[number]; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative h-[460px] overflow-hidden rounded-[2rem] shadow-xl"
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent transition-opacity duration-500 group-hover:from-forest-900" />
      <span className="absolute top-5 left-5 font-display text-6xl font-extrabold text-white/20">0{index + 1}</span>
      <span className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-sun-400 text-forest-950 transition-transform duration-500 group-hover:rotate-45">
        <ArrowUpRight className="h-6 w-6" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <span className="inline-block rounded-full bg-sun-400 px-4 py-1.5 font-display text-lg font-bold text-forest-950">
          {item.title}
        </span>
        <p className="mt-4 max-h-0 overflow-hidden text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}

export function Expertise() {
  return (
    <section className="relative bg-cream-100 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionTag>What We Do</SectionTag>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
                Three pillars of a <span className="text-leaf-500">profitable</span> farm.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-forest-900/70">
              From the first chick or piglet to market day, we cover the essentials that make or break a livestock
              business.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {expertise.map((item, i) => (
            <StaggerItem key={item.title}>
              <TiltCard item={item} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
