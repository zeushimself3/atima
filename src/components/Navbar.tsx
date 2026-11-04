"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { contact, navLinks } from "@/lib/data";
import { Logo } from "./Logo";

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-sun-400 via-leaf-400 to-sun-400"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "mx-3 bg-forest-950/80 shadow-2xl shadow-forest-950/30 ring-1 ring-white/10 backdrop-blur-xl xl:mx-auto"
            : "bg-transparent"
        }`}
      >
        <a href="#top" aria-label="KAG Consult home">
          <Logo light />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition hover:text-white"
              >
                {l.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-sun-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${contact.phones[0].tel}`}
            className="group relative hidden overflow-hidden rounded-full bg-sun-400 px-5 py-2.5 text-sm font-bold text-forest-950 shadow-lg shadow-sun-500/30 transition hover:bg-sun-300 sm:inline-flex sm:items-center sm:gap-2"
          >
            <Phone className="h-4 w-4" />
            Book Us Now
            <span className="absolute inset-y-0 left-0 w-1/3 bg-white/50 blur-md animate-shine" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="mx-3 mt-2 rounded-2xl bg-forest-950/95 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-medium text-white/85 hover:bg-white/5 hover:text-sun-400"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-sun-400 py-3 font-bold text-forest-950"
            >
              <Phone className="h-4 w-4" /> Book Us Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
