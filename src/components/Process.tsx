"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import { Blend, Cylinder, Package, Scale, ShoppingBasket, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { Reveal, SectionTag } from "./motion";

const icons: LucideIcon[] = [ShoppingBasket, Scale, Blend, Cylinder, Package];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionTag>Our Feed Preparation Process</SectionTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Five steps to <span className="text-leaf-500">high-quality</span> feed.
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* Track (horizontal on desktop, vertical on mobile) */}
          <div className="absolute top-12 right-[10%] left-[10%] hidden h-1.5 rounded-full bg-forest-900/10 lg:block">
            <motion.div
              style={{ scaleX: progress }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-leaf-500 to-sun-400"
            />
          </div>
          <div className="absolute top-0 bottom-0 left-12 w-1.5 rounded-full bg-forest-900/10 lg:hidden">
            <motion.div
              style={{ scaleY: progress }}
              className="h-full origin-top rounded-full bg-gradient-to-b from-leaf-500 to-sun-400"
            />
          </div>

          <ol className="relative grid gap-12 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-6 lg:flex-col lg:items-center lg:text-center"
                >
                  <div className="relative shrink-0">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-leaf-500 shadow-xl ring-8 ring-cream-50 transition-transform duration-500 group-hover:scale-110">
                      <Image src={step.image} alt="" fill sizes="96px" className="object-cover" />
                      <div className="absolute inset-0 grid place-items-center bg-forest-900/55 transition-colors group-hover:bg-forest-900/20">
                        <Icon className="h-9 w-9 text-sun-300 transition-opacity group-hover:opacity-0" />
                      </div>
                    </div>
                    <span className="absolute -top-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-sun-400 text-sm font-extrabold text-forest-950 shadow-lg">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-2 lg:pt-6">
                    <h3 className="font-display text-lg font-bold text-forest-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-900/65">{step.text}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
