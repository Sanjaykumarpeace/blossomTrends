import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Clock, Mail } from "lucide-react";
import { SHOP, waLink, telLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-3xl font-bold tracking-tight text-rose-gold-soft">
              BLOSSOMTRENDS
            </span>
            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] opacity-60">
              {SHOP.nameKn}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
              Premium boutique fashion for the modern woman of Bengaluru —
              handpicked sarees, ethnic, festive & contemporary edits.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={SHOP.instagram} target="_blank" rel="noopener noreferrer"
                 className="grid size-10 place-items-center rounded-full border border-cream/15 hover:border-rose-gold-soft hover:text-rose-gold-soft transition">
                <Instagram size={16} />
              </a>
              <a href={SHOP.facebook} target="_blank" rel="noopener noreferrer"
                 className="grid size-10 place-items-center rounded-full border border-cream/15 hover:border-rose-gold-soft hover:text-rose-gold-soft transition">
                <Facebook size={16} />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                 className="grid size-10 place-items-center rounded-full border border-cream/15 hover:border-rose-gold-soft hover:text-rose-gold-soft transition">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-rose-gold-soft mb-5">
              Explore
            </h5>
            <ul className="space-y-3 text-sm text-cream/75">
              <li><Link to="/" className="hover:text-rose-gold-soft">Home</Link></li>
              <li><Link to="/collections" className="hover:text-rose-gold-soft">Collections</Link></li>
              <li><Link to="/about" className="hover:text-rose-gold-soft">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-rose-gold-soft">Visit Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-rose-gold-soft mb-5">
              Visit the Boutique
            </h5>
            <ul className="space-y-4 text-sm text-cream/75">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-rose-gold-soft" /><span>{SHOP.address}</span></li>
              <li className="flex gap-3"><Clock size={16} className="mt-0.5 shrink-0 text-rose-gold-soft" /><span>{SHOP.hours}</span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-rose-gold-soft" /><a href={telLink} className="hover:text-rose-gold-soft">{SHOP.phone}</a></li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-rose-gold-soft" /><a href={`mailto:${SHOP.email}`} className="hover:text-rose-gold-soft">{SHOP.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-cream/45">
          <p>© {new Date().getFullYear()} BLOSSOMTRENDS · Bengaluru</p>
          <p>Crafted with elegance · Trendy · Affordable · Premium</p>
        </div>
      </div>
    </footer>
  );
}
