import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

import shopInterior from "@/assets/upload-shop-interior.jpg";
import scarf from "@/assets/upload-scarf.jpg";
import pinkCape from "@/assets/upload-pink-cape.jpg";
import purpleCape from "@/assets/upload-purple-cape.jpg";
import mustardSet from "@/assets/upload-mustard-set.jpg";
import limePalazzo from "@/assets/upload-lime-palazzo.jpg";
import tealVelvet from "@/assets/upload-teal-velvet.jpg";
import peachCoord from "@/assets/upload-peach-coord.jpg";
import purpleJacket from "@/assets/upload-purple-jacket.jpg";
import sweaters from "@/assets/upload-sweaters.jpg";
import purplePalazzoSet from "@/assets/upload-purple-palazzo-set.jpg";
import whiteStole from "@/assets/upload-white-stole.jpg";
import knitTrio from "@/assets/upload-knit-trio.jpg";
import tiedyeStole from "@/assets/upload-tiedye-stole.jpg";
import roseHoodie from "@/assets/upload-rose-hoodie.jpg";
import floralBomber from "@/assets/upload-floral-bomber.jpg";
import pinkLeafKurta from "@/assets/upload-pink-leaf-kurta.jpg";
import mochaSweatshirt from "@/assets/upload-mocha-sweatshirt.jpg";
import mauveFloralKurta from "@/assets/upload-mauve-floral-kurta.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — BLOSSOMTRENDS Boutique, Yelahanka" },
      { name: "description", content: "Step inside BLOSSOMTRENDS — a visual gallery of our boutique, festive co-ord sets, capes, palazzos, sarees and winter knits in Yelahanka, Bengaluru." },
      { property: "og:title", content: "Gallery — BLOSSOMTRENDS" },
      { property: "og:description", content: "A peek into our boutique and signature pieces." },
      { property: "og:image", content: pinkCape },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { img: shopInterior, title: "Inside Our Boutique", tag: "Store" },
  { img: mauveFloralKurta, title: "Mauve Floral Kurta Set", tag: "Signature" },
  { img: pinkLeafKurta, title: "Pink Leaf Cotton Kurta", tag: "Signature" },
  { img: purplePalazzoSet, title: "Purple Jacket Palazzo Set", tag: "Designer" },
  { img: floralBomber, title: "Tropical Floral Bomber", tag: "Western" },
  { img: roseHoodie, title: "Rose Hooded Co-ord", tag: "Loungewear" },
  { img: mochaSweatshirt, title: "Mocha Crew Sweatshirt", tag: "Western" },
  { img: knitTrio, title: "Cable Knit Sweater Trio", tag: "Winter" },
  { img: tiedyeStole, title: "Indigo Tie-Dye Stole", tag: "Accessory" },
  { img: whiteStole, title: "Ivory Fringe Stole", tag: "Accessory" },
  { img: pinkCape,     title: "Magenta Cape Co-ord", tag: "Festive" },
  { img: purpleCape,   title: "Midnight Sequin Cape", tag: "Designer" },
  { img: mustardSet,   title: "Marigold Mirror Set",  tag: "Festive" },
  { img: limePalazzo,  title: "Lime Sharara Jacket",  tag: "Ethnic" },
  { img: tealVelvet,   title: "Teal Velvet Palazzo",  tag: "Premium" },
  { img: peachCoord,   title: "Peach Floral Co-ord",  tag: "New" },
  { img: purpleJacket, title: "Purple Threadwork",    tag: "Trending" },
  { img: scarf,        title: "Marble Print Stole",   tag: "Accessory" },
  { img: sweaters,     title: "Winter Knit Edit",     tag: "Western" },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-16 pb-10 md:pt-24 md:pb-12 px-6 md:px-10 text-center">
        <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Visual Diary</span>
        <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance">The Gallery</h1>
        <p className="mt-4 max-w-xl mx-auto text-foreground/70">
          A closer look at our boutique and the signature pieces that define BLOSSOMTRENDS.
        </p>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-7xl columns-2 md:columns-3 lg:columns-4 gap-5 md:gap-6 [column-fill:_balance]">
          {ITEMS.map((it, i) => (
            <figure
              key={it.title}
              className="group relative mb-5 md:mb-6 break-inside-avoid overflow-hidden bg-blush hover-lift"
            >
              <img
                src={it.img}
                alt={it.title}
                loading={i < 4 ? "eager" : "lazy"}
                className="img-zoom w-full h-auto object-cover"
              />
              <span className="absolute top-3 left-3 bg-rose-gold text-white text-[9px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded-full">
                {it.tag}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent text-cream opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <p className="font-display text-lg leading-tight">{it.title}</p>
                <a
                  href={waLink(`Hello! I'd like to enquire about: ${it.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-gold hover:text-cream"
                >
                  <MessageCircle size={11} /> Enquire
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
