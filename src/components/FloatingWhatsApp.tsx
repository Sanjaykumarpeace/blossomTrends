import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-2 py-2 text-white shadow-2xl ring-1 ring-black/5 hover:scale-[1.03] active:scale-95 transition-transform float-y"
      >
        <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-[0.18em]">
          Chat with stylist
        </span>
        <span className="grid size-11 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
          <MessageCircle size={20} />
        </span>
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 left-6 z-[60] grid size-11 place-items-center rounded-full bg-ink text-cream shadow-luxe transition-all ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
