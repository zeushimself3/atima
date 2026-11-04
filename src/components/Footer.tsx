import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks } from "@/lib/data";
import { Logo } from "./Logo";

async function Year() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="bg-forest-950 pt-20 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-white/60">
              Your partner in profitable poultry and swine farming. Expert advice, custom feed formulation and hands-on
              support from startup to profitability.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-sun-400">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 transition hover:pl-1 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-sun-400">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-white/70">
              {contact.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="flex items-center gap-3 hover:text-white">
                    <Phone className="h-4 w-4 text-leaf-400" /> {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white">
                  <Mail className="h-4 w-4 text-leaf-400" /> {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-leaf-400" /> {contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p aria-hidden className="font-display text-[14vw] leading-none font-extrabold tracking-tighter whitespace-nowrap text-white/[0.04] select-none xl:text-[10.5rem]">
            KAG CONSULT
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
          <p>© <Year /> KAG Consult. All rights reserved.</p>
          <p>Photos courtesy of Unsplash</p>
        </div>
      </div>
    </footer>
  );
}
