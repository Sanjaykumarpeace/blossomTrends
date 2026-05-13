import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import { SHOP, waLink } from "@/lib/contact";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all ${
        scrolled
          ? "glass-nav border-rose-gold/15 shadow-soft"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-rose-gold">
            BLOSSOMTRENDS
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase opacity-60">
            {SHOP.nameKn}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.2em]">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative text-foreground/80 hover:text-rose-gold transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-rose-gold after:transition-all hover:after:w-full"
              activeProps={{ className: "text-rose-gold after:w-full" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 hover:bg-blush hover:text-rose-gold transition-colors"
          >
            <Search size={16} />
          </button>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose-gold px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-luxe hover:bg-ink transition-colors"
          >
            <MessageCircle size={13} /> WhatsApp
          </a>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-blush text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-rose-gold/10 bg-cream">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-widest text-foreground hover:bg-blush hover:text-rose-gold"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-rose-gold px-5 py-3 text-xs font-bold uppercase tracking-widest text-white"
            >
              <MessageCircle size={14} /> Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
