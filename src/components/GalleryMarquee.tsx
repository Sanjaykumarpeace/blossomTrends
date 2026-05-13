import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import mauveFloralKurta from "@/assets/upload-mauve-floral-kurta.jpg";
import pinkLeafKurta from "@/assets/upload-pink-leaf-kurta.jpg";
import purplePalazzoSet from "@/assets/upload-purple-palazzo-set.jpg";
import floralBomber from "@/assets/upload-floral-bomber.jpg";
import roseHoodie from "@/assets/upload-rose-hoodie.jpg";
import mochaSweatshirt from "@/assets/upload-mocha-sweatshirt.jpg";
import knitTrio from "@/assets/upload-knit-trio.jpg";
import tiedyeStole from "@/assets/upload-tiedye-stole.jpg";
import pinkCape from "@/assets/upload-pink-cape.jpg";
import mustardSet from "@/assets/upload-mustard-set.jpg";
import tealVelvet from "@/assets/upload-teal-velvet.jpg";
import peachCoord from "@/assets/upload-peach-coord.jpg";

const STRIP = [
  mauveFloralKurta, pinkLeafKurta, purplePalazzoSet, floralBomber,
  roseHoodie, mochaSweatshirt, knitTrio, tiedyeStole,
  pinkCape, mustardSet, tealVelvet, peachCoord,
];

export function GalleryMarquee() {
  // duplicate set so the loop seam is invisible
  const loop = [...STRIP, ...STRIP];

  return (
    <section className="bg-cream py-16 md:py-20 overflow-hidden border-y border-rose-gold/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">A Quick Glance</span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl">Inside The Boutique</h2>
          <p className="mt-2 text-sm text-foreground/60 max-w-md">
            A live-flowing peek at our latest pieces. Tap any frame to step into the full gallery.
          </p>
        </div>
        <Link
          to="/gallery"
          className="self-start md:self-end inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] border-b-2 border-rose-gold pb-1 hover:text-rose-gold transition"
        >
          Open Gallery <ArrowRight size={13} />
        </Link>
      </div>

      <div className="relative group">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10" />

        <div
          className="flex gap-4 md:gap-5 w-max marquee-fast"
          style={{ animationPlayState: "running" }}
        >
          {loop.map((img, i) => (
            <Link
              to="/gallery"
              key={i}
              className="relative shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 aspect-[3/4] overflow-hidden bg-blush hover-lift"
            >
              <img
                src={img}
                alt={`BLOSSOMTRENDS piece ${i + 1}`}
                loading="lazy"
                className="img-zoom h-full w-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent text-cream text-[9px] font-bold uppercase tracking-[0.25em] px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                View Gallery
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
