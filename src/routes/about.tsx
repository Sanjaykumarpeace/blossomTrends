import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Heart, Award, Users } from "lucide-react";
import boutique from "@/assets/boutique.jpg";
import g1 from "@/assets/g1.jpg";
import g4 from "@/assets/g4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BLOSSOMTRENDS — Premium Boutique in Yelahanka" },
      { name: "description", content: "The BLOSSOMTRENDS story — a premium fashion boutique in Kattigenahalli, Yelahanka, Bengaluru, curating sarees, ethnic wear and modern silhouettes." },
      { property: "og:image", content: boutique },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 md:px-10 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="text-rose-gold text-[10px] font-bold uppercase tracking-[0.3em]">Our Story</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[1.05] text-balance">
            A boutique born from a love for <span className="italic">beautiful clothing</span>.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 text-pretty">
            BLOSSOMTRENDS began as a small studio in Yelahanka with a single mission: bring premium-feeling
            fashion within reach of every woman in Bengaluru.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4 md:gap-6">
          <img src={boutique} alt="Boutique interior" loading="lazy" className="col-span-12 md:col-span-8 aspect-[16/10] w-full object-cover" />
          <img src={g1} alt="Saree wall" loading="lazy" className="col-span-6 md:col-span-4 aspect-[4/5] w-full object-cover" />
          <img src={g4} alt="Silk drapes" loading="lazy" className="col-span-6 md:col-span-4 aspect-[4/5] w-full object-cover" />
        </div>
      </section>

      <section className="bg-blush/40 py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-5xl space-y-10 text-foreground/75 leading-relaxed">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">From a single rack to Bengaluru's go-to boutique.</h2>
          <p>
            What started as a passion project quickly became a destination — women travelling across North Bengaluru
            for our handpicked sarees, contemporary kurtis and festive lehengas. Today, BLOSSOMTRENDS is known for
            personal styling, accessible luxury, and an eye for what's truly trending.
          </p>
          <p>
            Every piece on our racks is selected with intention — quality of fabric, craftsmanship of the embroidery,
            and the way it makes you feel when you put it on. From college students stepping into their style to
            family shoppers prepping for the next big celebration, our boutique meets you where you are.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Sparkles, title: "Curated Edits", text: "Refreshed every week with new arrivals." },
            { icon: Heart,    title: "Made for You", text: "Personalized styling for every body and budget." },
            { icon: Award,    title: "Premium Feel", text: "Quality of fabric and finish, always." },
            { icon: Users,    title: "Loved Locally", text: "Bengaluru's favourite boutique in Yelahanka." },
          ].map((v) => (
            <div key={v.title} className="hover-lift border border-rose-gold/15 p-8 bg-white">
              <div className="grid place-items-center size-12 rounded-full bg-blush text-rose-gold mb-5"><v.icon size={20} /></div>
              <h4 className="font-display text-xl mb-2">{v.title}</h4>
              <p className="text-sm text-foreground/65">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream py-20 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl italic">Come say hello.</h2>
          <p className="mt-4 text-cream/70">Walk into our Yelahanka studio for a personal styling session.</p>
          <Link to="/contact" className="inline-flex mt-8 items-center gap-2 bg-rose-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-rose-gold-soft transition">
            Visit the Boutique
          </Link>
        </div>
      </section>
    </>
  );
}
