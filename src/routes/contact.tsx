import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import { SHOP, waLink, telLink } from "@/lib/contact";
import boutique from "@/assets/boutique.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit BLOSSOMTRENDS — Yelahanka, Bengaluru" },
      { name: "description", content: "Visit BLOSSOMTRENDS at Kattigenahalli, Yelahanka, Bengaluru. Phone +91 96632 54548. Open 10:30 AM – 9 PM daily." },
      { property: "og:image", content: boutique },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 md:px-10 text-center">
        <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Get in Touch</span>
        <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance">Visit the Boutique</h1>
        <p className="mt-4 max-w-xl mx-auto text-foreground/70">
          Step into our Yelahanka studio or reach out — we'd love to help you find your next favorite piece.
        </p>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="bg-white border border-rose-gold/15 p-8 hover-lift">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Item icon={MapPin} label="Address">{SHOP.address}</Item>
                <Item icon={Clock} label="Opening Hours">{SHOP.hours}</Item>
                <Item icon={Phone} label="Phone"><a href={telLink} className="hover:text-rose-gold">{SHOP.phone}</a></Item>
                <Item icon={Mail} label="Email"><a href={`mailto:${SHOP.email}`} className="hover:text-rose-gold">{SHOP.email}</a></Item>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1ebe57] transition">
                  <MessageCircle size={13} /> WhatsApp
                </a>
                <a href={telLink} className="inline-flex items-center gap-2 bg-ink text-cream px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-rose-gold transition">
                  <Phone size={13} /> Call Us
                </a>
                <a href={SHOP.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition">
                  <MapPin size={13} /> Directions
                </a>
              </div>
            </div>

            <div className="bg-blush/50 p-8">
              <h3 className="font-display text-2xl">Follow our journey</h3>
              <p className="mt-2 text-sm text-foreground/65">Daily styling tips, new arrivals & festival edits.</p>
              <div className="mt-5 flex gap-3">
                <a href={SHOP.instagram} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full bg-white border border-rose-gold/20 hover:bg-rose-gold hover:text-white transition"><Instagram size={16} /></a>
                <a href={SHOP.facebook} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full bg-white border border-rose-gold/20 hover:bg-rose-gold hover:text-white transition"><Facebook size={16} /></a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-full bg-white border border-rose-gold/20 hover:bg-rose-gold hover:text-white transition"><MessageCircle size={16} /></a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border border-rose-gold/15 bg-blush min-h-[480px]">
            <iframe
              src={SHOP.mapsEmbed}
              title="BLOSSOMTRENDS location"
              loading="lazy"
              className="w-full h-full min-h-[480px]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Item({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="grid place-items-center size-10 shrink-0 rounded-full bg-blush text-rose-gold"><Icon size={16} /></div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/55 mb-1">{label}</p>
        <p className="text-sm text-foreground/85 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
