import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Star, Sparkles, Heart, Truck, ShieldCheck, MessageCircle } from "lucide-react";
import { SHOP, waLink, telLink } from "@/lib/contact";
import { GalleryMarquee } from "@/components/GalleryMarquee";

import hero from "@/assets/hero.jpg";
import catSaree from "@/assets/cat-saree.jpg";
import catEthnic from "@/assets/cat-ethnic.jpg";
import catFestive from "@/assets/cat-festive.jpg";
import catWestern from "@/assets/cat-western.jpg";
import boutique from "@/assets/boutique.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLOSSOMTRENDS — Premium Fashion Boutique in Yelahanka, Bengaluru" },
      { name: "description", content: "Premium boutique for sarees, ethnic wear, kurtis, festive collections and modern western wear in Kattigenahalli, Yelahanka, Bengaluru. Visit BLOSSOMTRENDS today." },
      { property: "og:title", content: "BLOSSOMTRENDS — Where Fashion Blossoms" },
      { property: "og:description", content: "Trendy • Elegant • Affordable — boutique fashion in Yelahanka, Bengaluru." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const categories = [
  { img: catSaree, title: "Saree Collection", subtitle: "Timeless Ethnic", tag: "01" },
  { img: catEthnic, title: "Ethnic Wear", subtitle: "Kurtis · Salwars · Suits", tag: "02" },
  { img: catWestern, title: "Western Fusion", subtitle: "Contemporary Chic", tag: "03" },
  { img: catFestive, title: "Festive Edit", subtitle: "Lehengas · Designer", tag: "04" },
];

const products = [
  { img: p1, name: "Blush Floral Saree", tag: "New" },
  { img: p2, name: "Emerald Chanderi Kurti", tag: "Bestseller" },
  { img: p3, name: "Ivory Zardosi Lehenga", tag: "Festive" },
  { img: p4, name: "Rose Anarkali Suit", tag: "Trending" },
];

const reviews = [
  { name: "Priya R.", role: "Yelahanka", text: "Loved the saree collection — quality is premium and the staff helped me pick the perfect drape for my function. Highly recommend BLOSSOMTRENDS!", stars: 5 },
  { name: "Ananya K.", role: "Hebbal",     text: "Trendy kurtis at very reasonable prices. The boutique vibe is so warm and personal — feels like a luxury fitting room.", stars: 5 },
  { name: "Meera S.",  role: "Jakkur",     text: "Best place in North Bengaluru for festive shopping. Their lehengas are stunning and the embroidery is top class.", stars: 5 },
];

const stats = [
  { value: "1500+", label: "Happy Clients" },
  { value: "500+",  label: "Curated Designs" },
  { value: "8+",    label: "Years Of Trust" },
  { value: "4.8★",  label: "Google Rating" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="BLOSSOMTRENDS premium boutique" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="reveal text-rose-gold text-[11px] font-semibold uppercase tracking-[0.4em] mb-5">
              Bengaluru's Premier Boutique
            </p>
            <h1 className="reveal reveal-delay-1 font-display text-5xl sm:text-6xl md:text-8xl leading-[1.02] text-balance">
              Where Fashion <br />
              <span className="italic font-normal text-rose-gold">Blossoms.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-md text-base md:text-lg text-foreground/70 leading-relaxed text-pretty">
              Trendy · Elegant · Affordable — a curated edit of sarees, ethnic
              wear and modern silhouettes for the women of Bengaluru.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
              <Link to="/collections" className="group inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-rose-gold transition-colors">
                Explore Collection <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-ink/20 bg-cream/40 backdrop-blur px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-all">
                Visit Store
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-rose-gold/40 text-rose-gold px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-rose-gold hover:text-white transition-all">
                <MessageCircle size={13} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* floating fashion card */}
        <div className="hidden lg:block absolute right-10 bottom-10 z-10 reveal reveal-delay-4">
          <div className="float-y w-64 rounded-xl border border-rose-gold/15 bg-cream/85 backdrop-blur-xl p-5 shadow-luxe">
            <div className="flex items-center gap-2 text-rose-gold">
              <Sparkles size={14} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Today's Trend</span>
            </div>
            <p className="mt-3 font-display text-xl leading-snug">Pastel Silk Sarees & Hand-Painted Drapes</p>
            <div className="mt-4 flex items-center gap-1 text-rose-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
              <span className="ml-2 text-[10px] uppercase tracking-widest text-foreground/60">4.8 · 320+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="bg-ink text-cream/80 py-4 overflow-hidden border-y border-rose-gold/10">
        <div className="flex marquee whitespace-nowrap text-[11px] uppercase tracking-[0.35em] font-medium">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 px-6 shrink-0">
              {["✦ New Arrivals Weekly", "✦ Free Styling Consultations", "✦ Festive Collection 2025", "✦ Premium Sarees & Kurtis", "✦ Visit Our Yelahanka Studio", "✦ Trendy · Elegant · Affordable"].map((t, i) => (
                <span key={i} className="text-rose-gold-soft">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* LOOPING GALLERY GLANCE */}
      <GalleryMarquee />

      {/* CATEGORY SPOTLIGHT */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Curated</span>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">The Curated Edit</h2>
              <p className="mt-2 text-sm text-foreground/60">Handpicked for the modern woman</p>
            </div>
            <Link to="/collections" className="self-start md:self-end inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] border-b-2 border-rose-gold pb-1 hover:text-rose-gold transition">
              View All <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((c, i) => (
              <Link
                to="/collections"
                key={c.title}
                className={`group block hover-lift ${i % 2 === 1 ? "lg:mt-12" : ""}`}
              >
                <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-blush">
                  <img src={c.img} alt={c.title} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]">
                    ({c.tag})
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-cream/90 backdrop-blur px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-gold">{c.subtitle}</p>
                    <h3 className="font-display text-xl">{c.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING / NEW ARRIVALS */}
      <section className="bg-blush/40 py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Today's Trending Styles</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">New Arrivals & Best Sellers</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {products.map((p) => (
              <div key={p.name} className="group hover-lift">
                <div className="relative overflow-hidden bg-white aspect-[3/4]">
                  <img src={p.img} alt={p.name} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 bg-rose-gold text-white text-[9px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded-full">{p.tag}</span>
                  <a href={waLink(`Hello! I'd like to enquire about: ${p.name}`)} target="_blank" rel="noopener noreferrer"
                     className="absolute inset-x-3 bottom-3 inline-flex items-center justify-center gap-2 bg-ink/90 backdrop-blur text-cream text-[10px] font-bold uppercase tracking-[0.2em] py-2.5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <MessageCircle size={12} /> Enquire
                  </a>
                </div>
                <div className="pt-4 flex items-start justify-between gap-2">
                  <h4 className="font-display text-lg leading-snug">{p.name}</h4>
                  <Heart size={16} className="text-rose-gold mt-1 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STATS */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="overflow-hidden">
              <img src={boutique} alt="Inside the BLOSSOMTRENDS boutique" loading="lazy" className="w-full aspect-[5/4] object-cover img-zoom" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-rose-gold text-white p-6 max-w-[220px] shadow-luxe">
              <p className="font-display italic text-2xl leading-snug">"A boutique that feels like home."</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.25em] font-bold">— Google Reviews</p>
            </div>
          </div>
          <div>
            <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">About BLOSSOMTRENDS</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl leading-[1.05]">Crafting Bengaluru's <span className="italic">Style</span></h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Located in the heart of Kattigenahalli, Yelahanka, BLOSSOMTRENDS is more than just a store —
              it's a destination where traditional craftsmanship meets contemporary silhouettes. We specialize in
              affordable luxury for college students, working professionals and family shoppers.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-rose-gold pl-4">
                  <div className="font-display text-3xl md:text-4xl text-rose-gold">{s.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-foreground/60">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 bg-ink text-cream px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-rose-gold transition">
                Our Story <ArrowRight size={13} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition">
                Visit Studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-ink text-cream py-12 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Sparkles, title: "Premium Quality", text: "Handpicked fabrics & finishes" },
            { icon: Heart, title: "Personalized Styling", text: "1-on-1 consultations" },
            { icon: Truck, title: "City-Wide Delivery", text: "Across Bengaluru" },
            { icon: ShieldCheck, title: "Trusted Boutique", text: "8+ years in Yelahanka" },
          ].map((f, i) => (
            <div key={i} className="text-center">
              <div className="inline-grid place-items-center size-12 rounded-full border border-rose-gold-soft/40 text-rose-gold-soft mb-4">
                <f.icon size={18} />
              </div>
              <h4 className="font-display text-lg">{f.title}</h4>
              <p className="mt-1 text-xs text-cream/60">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Loved by Bengaluru</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Customer Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="hover-lift bg-white border border-rose-gold/10 p-8">
                <div className="flex gap-1 text-rose-gold mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="font-display text-lg italic leading-relaxed text-foreground/80">"{r.text}"</p>
                <div className="mt-6 pt-6 border-t border-rose-gold/10">
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/50">{r.role} · Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="bg-blush/40 py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Follow @BLOSSOMTRENDS</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Style Diary</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[g1, g2, g3, g4, p1, p2, p3, p4].map((g, i) => (
              <a href={SHOP.instagram} target="_blank" rel="noopener noreferrer" key={i} className="group block overflow-hidden aspect-square bg-cream">
                <img src={g} alt={`gallery ${i + 1}`} loading="lazy" className="img-zoom h-full w-full object-cover" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + CONTACT STRIP */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div>
            <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Visit Us</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Step Into Our Boutique</h2>
            <p className="mt-5 text-foreground/70 leading-relaxed max-w-md">
              Experience the textures, drapes and craftsmanship in person. Walk-ins welcome — book a personal styling
              session for your next occasion.
            </p>
            <div className="mt-8 space-y-5 text-sm">
              <div className="flex gap-3"><MapPin className="text-rose-gold mt-0.5" size={18} /><p>{SHOP.address}</p></div>
              <div className="flex gap-3"><Phone className="text-rose-gold mt-0.5" size={18} /><a href={telLink}>{SHOP.phone}</a></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1ebe57] transition">
                <MessageCircle size={13} /> Chat on WhatsApp
              </a>
              <a href={SHOP.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition">
                <MapPin size={13} /> Get Directions
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-rose-gold/15 min-h-[360px] bg-blush">
            <iframe
              src={SHOP.mapsEmbed}
              title="BLOSSOMTRENDS location"
              loading="lazy"
              className="w-full h-full min-h-[360px]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
