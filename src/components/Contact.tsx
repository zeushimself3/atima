"use client";

import { motion } from "motion/react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useRef, useState, type FormEvent, type MouseEvent } from "react";
import { submitConsultation } from "@/app/actions";
import { contact } from "@/lib/data";
import { Reveal, SectionTag } from "./motion";

const interests = [
  "Poultry farming setup & management",
  "Swine farming setup & management",
  "Custom feed formulation",
  "Nutrition & health optimization",
  "General consultation",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", interest: interests[0], message: "" });

  const body = `Hello KAG Consult,\n\nName: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.interest}\n\n${form.message}`;

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ kind: "idle" | "saving" | "saved" | "error"; text?: string }>({
    kind: "idle",
  });

  async function save(channel: "whatsapp" | "email") {
    setStatus({ kind: "saving" });
    const res = await submitConsultation({ ...form, channel });
    setStatus(
      res.ok
        ? { kind: "saved", text: "Thanks! We've received your request and will be in touch." }
        : { kind: "error", text: res.error },
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // Open WhatsApp synchronously so the popup isn't blocked, then record the lead.
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    void save("whatsapp");
  }

  function onEmailClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!formRef.current?.reportValidity()) {
      e.preventDefault();
      return;
    }
    void save("email");
  }

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    `Booking request: ${form.interest}`,
  )}&body=${encodeURIComponent(body)}`;

  const input =
    "w-full rounded-xl bg-white/10 px-4 py-3.5 text-white placeholder:text-white/40 ring-1 ring-white/15 outline-none transition focus:bg-white/15 focus:ring-2 focus:ring-sun-400";

  return (
    <section id="contact" className="relative px-3 py-20 sm:px-6 sm:py-28">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest-800 via-forest-900 to-forest-950 px-6 py-16 text-white shadow-2xl sm:px-12 lg:px-16 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-dots" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-sun-400/30 blur-[100px]"
        />

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTag dark>Book Us Now</SectionTag>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
                Ready to build a <span className="text-gradient-sun">thriving farm</span>?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-md text-lg text-white/70">
                Tell us about your farm and goals. We&apos;ll get back to you with practical next steps.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {contact.phones.map((p, i) => (
                <Reveal key={p.tel} delay={0.25 + i * 0.08} y={20}>
                  <a
                    href={`tel:${p.tel}`}
                    className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-sun-400 text-forest-950 transition-transform group-hover:rotate-12">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs tracking-wider text-white/50 uppercase">Call us</span>
                      <span className="font-display text-xl font-bold">{p.display}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
              <Reveal delay={0.41} y={20}>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-leaf-500 text-white transition-transform group-hover:rotate-12">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wider text-white/50 uppercase">Email</span>
                    <span className="font-display text-lg font-bold break-all">{contact.email}</span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.49} y={20}>
                <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-sun-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-wider text-white/50 uppercase">Location</span>
                    <span className="font-display text-lg font-bold">{contact.location}</span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2} x={40} y={0}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/15 backdrop-blur-md sm:p-8"
            >
              <h3 className="font-display text-2xl font-bold">Request a consultation</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-white/70">Full name</span>
                  <input
                    required
                    className={input}
                    placeholder="Kwame Mensah"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-white/70">Phone</span>
                  <input
                    required
                    type="tel"
                    className={input}
                    placeholder="+233 ..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-sm font-medium text-white/70">I&apos;m interested in</span>
                <select
                  className={`${input} appearance-none`}
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                >
                  {interests.map((i) => (
                    <option key={i} value={i} className="text-forest-950">
                      {i}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-sm font-medium text-white/70">Tell us about your farm</span>
                <textarea
                  rows={4}
                  className={`${input} resize-none`}
                  placeholder="e.g. I want to start a 500-bird layer farm..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-sun-400 px-6 py-4 font-bold text-forest-950 shadow-lg shadow-sun-500/20 hover:bg-sun-300"
                >
                  <MessageCircle className="h-5 w-5" /> Send via WhatsApp
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={mailto}
                  onClick={onEmailClick}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold ring-1 ring-white/25 hover:bg-white/10"
                >
                  <Send className="h-5 w-5" /> Send via Email
                </motion.a>
              </div>
              <p
                role="status"
                aria-live="polite"
                className={`mt-4 min-h-5 text-sm ${status.kind === "error" ? "text-red-300" : "text-sun-300"}`}
              >
                {status.kind === "saving" ? "Saving your request…" : status.text}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
