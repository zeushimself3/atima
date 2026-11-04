"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, CheckCircle2, Egg, Phone, Sprout } from "lucide-react";
import { useRef } from "react";
import { contact } from "@/lib/data";
import { RotatingBadge } from "./RotatingBadge";

const headline = ["Your", "Partner", "in", "Profitable", "Poultry", "&", "Swine", "Farming"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden bg-forest-950 pt-32 pb-40 text-white lg:pt-40 lg:pb-52"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-dots" />
      <div className="absolute -top-40 -left-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-leaf-500/25 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-sun-400/15 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sun-300 ring-1 ring-white/15 backdrop-blur"
          >
            <Sprout className="h-4 w-4" /> Poultry · Swine · Nutrition
          </motion.span>

          <h1 aria-label={headline.join(" ")} className="mt-6 font-display text-5xl leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {headline.map((word, i) => (
              <span key={i} aria-hidden className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className={`mr-[0.25em] inline-block ${word === "Profitable" ? "text-gradient-sun" : ""}`}
                  initial={{ y: "110%", rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            We help farmers establish and grow successful poultry and swine ventures with tailored
            solutions, expert advice and custom feed formulation built for maximum productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sun-400 px-7 py-4 font-bold text-forest-950 shadow-xl shadow-sun-500/25 transition hover:-translate-y-0.5 hover:bg-sun-300"
            >
              Book Us Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-y-0 left-0 w-1/3 bg-white/50 blur-md animate-shine" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70"
          >
            {contact.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="inline-flex items-center gap-2 hover:text-sun-300">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-leaf-500/20 text-leaf-300">
                  <Phone className="h-4 w-4" />
                </span>
                {p.display}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image collage */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tr-[8rem] shadow-2xl shadow-black/40 ring-4 ring-white/10"
          >
            <Image
              src="/images/hen-hero.jpg"
              alt="Healthy brown hen on a farm"
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
          </motion.div>

          {/* Floating egg basket */}
          <motion.div
            style={{ y: floatY }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -right-4 -bottom-10 w-44 sm:-right-10 sm:w-56"
          >
            <div className="animate-float overflow-hidden rounded-full border-8 border-forest-950 shadow-2xl">
              <div className="relative aspect-square">
                <Image src="/images/eggs-basket3.jpg" alt="Basket of fresh eggs" fill sizes="224px" className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Floating piglet card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute top-10 -left-6 sm:-left-14"
          >
            <div className="animate-float-slow flex items-center gap-3 rounded-2xl bg-white/95 p-2.5 pr-5 text-forest-900 shadow-2xl backdrop-blur">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                <Image src="/images/pig-cage.jpg" alt="Piglet" fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold">Swine Farming</p>
                <p className="text-xs text-forest-700/70">Setup to profitability</p>
              </div>
            </div>
          </motion.div>

          {/* Floating checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute bottom-24 -left-4 hidden sm:-left-16 sm:block"
          >
            <div className="rounded-2xl bg-forest-800/90 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur">
              {["Balanced nutrition", "Healthy flocks", "Higher yields"].map((t) => (
                <p key={t} className="flex items-center gap-2 py-0.5 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-leaf-300" /> {t}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, type: "spring", stiffness: 120 }}
            className="absolute -top-8 -right-2 sm:-right-8"
          >
            <RotatingBadge />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, type: "spring" }}
            className="absolute top-1/2 -right-3 grid h-12 w-12 place-items-center rounded-full bg-sun-400 text-forest-900 shadow-xl sm:-right-6"
          >
            <Egg className="h-6 w-6" />
          </motion.div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <svg
        className="absolute inset-x-0 -bottom-px h-24 w-full text-cream-50 sm:h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,72 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}
