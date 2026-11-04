"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { gallery } from "@/lib/data";
import { Reveal, SectionTag } from "./motion";

export function Gallery() {
  return (
    <section className="py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <SectionTag>Life on the Farm</SectionTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Healthy animals. <span className="text-leaf-500">Happy farmers.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-flow-dense grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl ${g.className}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
