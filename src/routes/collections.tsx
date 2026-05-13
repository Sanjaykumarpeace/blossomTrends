import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Heart } from "lucide-react";
import { waLink } from "@/lib/contact";

import catSaree from "@/assets/cat-saree.jpg";
import catEthnic from "@/assets/cat-ethnic.jpg";
import catFestive from "@/assets/cat-festive.jpg";
import catWestern from "@/assets/cat-western.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — BLOSSOMTRENDS Boutique, Yelahanka" },
      { name: "description", content: "Browse our saree, ethnic, western and festive collections at BLOSSOMTRENDS, Yelahanka, Bengaluru." },
      { property: "og:image", content: catSaree },
    ],
  }),
  component: CollectionsPage,
});

type Cat = "All" | "Sarees" | "Ethnic" | "Western" | "Festive";

const CATS: Cat[] = ["All", "Sarees", "Ethnic", "Western", "Festive"];

const items = [
  { img: p1,        name: "Blush Floral Saree",      cat: "Sarees",  tag: "New" },
  { img: catSaree,  name: "Royal Kanchipuram",       cat: "Sarees",  tag: "Bestseller" },
  { img: g3,        name: "Pastel Pink Drape",       cat: "Sarees",  tag: "Trending" },
  { img: p2,        name: "Emerald Chanderi Kurti",  cat: "Ethnic",  tag: "Bestseller" },
  { img: catEthnic, name: "Embroidered Kurti Set",   cat: "Ethnic",  tag: "New" },
  { img: p4,        name: "Rose Anarkali Suit",      cat: "Ethnic",  tag: "Festive" },
  { img: catWestern,name: "Blush Co-ord Suit",       cat: "Western", tag: "New" },
  { img: g4,        name: "Silk Stole Edit",         cat: "Western", tag: "Trending" },
  { img: catFestive,name: "Bridal Lehenga",          cat: "Festive", tag: "Festive" },
  { img: p3,        name: "Ivory Zardosi Lehenga",   cat: "Festive", tag: "Bestseller" },
  { img: g1,        name: "Festive Saree Wall",      cat: "Festive", tag: "New" },
  { img: g2,        name: "Gold-Work Silk",          cat: "Sarees",  tag: "Premium" },
];

function CollectionsPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <section className="pt-16 pb-10 md:pt-24 md:pb-12 px-6 md:px-10 text-center">
        <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Shop the Edit</span>
        <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance">The Collections</h1>
        <p className="mt-4 max-w-xl mx-auto text-foreground/70">
          From timeless sarees to festive lehengas — every piece is handpicked for the modern woman.
        </p>
      </section>

      <div className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] border transition-all ${
                active === c
                  ? "bg-ink text-cream border-ink"
                  : "border-rose-gold/30 text-foreground/70 hover:border-rose-gold hover:text-rose-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filtered.map((it) => (
            <div key={it.name} className="group hover-lift">
              <div className="relative overflow-hidden bg-blush aspect-[3/4]">
                <img src={it.img} alt={it.name} loading="lazy" className="img-zoom h-full w-full object-cover" />
                <span className="absolute top-3 left-3 bg-rose-gold text-white text-[9px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded-full">{it.tag}</span>
                <a href={waLink(`Hello! I'd like to enquire about: ${it.name}`)} target="_blank" rel="noopener noreferrer"
                   className="absolute inset-x-3 bottom-3 inline-flex items-center justify-center gap-2 bg-ink/90 backdrop-blur text-cream text-[10px] font-bold uppercase tracking-[0.2em] py-2.5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <MessageCircle size={12} /> Enquire on WhatsApp
                </a>
              </div>
              <div className="pt-4 flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-display text-lg leading-snug">{it.name}</h4>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">{it.cat}</p>
                </div>
                <Heart size={16} className="text-rose-gold mt-1 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
