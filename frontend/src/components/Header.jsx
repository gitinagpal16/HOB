import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { CATEGORIES, CONTACT, scrollToId, waLink } from "../data/content";

const NAV = [
  { label: "Home", target: "#home" },
  { label: "Categories", target: "#all-categories", dropdown: true },
  { label: "About", target: "#about" },
  { label: "Contact", target: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(target), 500);
    } else {
      scrollToId(target);
    }
  };

  return (
    <>
      <div className="bg-[#0F1411] border-b border-[#B4863C]/15 text-[11px] tracking-[0.2em] uppercase">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between gap-4">
          <span className="text-[#F5F1E8]/50">Pan-India delivery · Bulk orders welcome</span>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} data-testid="utility-phone-link"
            className="flex items-center gap-2 text-[#D3AA66] hover:text-[#F5F1E8] transition-colors">
            <Phone size={12} /> {CONTACT.phone}
          </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-[#0F1411]/85 backdrop-blur-xl border-transparent py-3" : "bg-transparent border-transparent py-5"
      }`}>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center">
          <button onClick={() => go("#home")} data-testid="nav-brand-logo" className="text-center group">
            <span className={`font-display font-extrabold uppercase tracking-[0.08em] sm:tracking-[0.1em] text-[#F5F1E8] leading-tight whitespace-normal sm:whitespace-nowrap group-hover:text-[#D3AA66] transition-all duration-500 ${scrolled ? "text-base sm:text-2xl" : "text-xl sm:text-4xl"}`}>
              Nagpal's House of Beauty
            </span>
            <span className="block text-[9px] sm:text-[11px] tracking-[0.5em] uppercase text-[#B4863C] mt-2">
              Salon Furniture
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-sm mt-4" data-testid="desktop-nav">
            {NAV.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button onClick={() => go(item.target)} data-testid="nav-products-dropdown-trigger"
                    className="flex items-center gap-1 text-[#F5F1E8]/80 hover:text-[#D3AA66] transition-colors py-2">
                    {item.label} <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-[#141B16] border border-[#B4863C]/25 min-w-[220px] py-2 shadow-2xl shadow-black/50">
                      {CATEGORIES.map((c) => (
                        <button key={c.id} onClick={() => navigate(`/category/${c.id}`)} data-testid={`nav-dropdown-${c.id}`}
                          className="block w-full text-left px-5 py-2.5 text-[13px] text-[#F5F1E8]/70 hover:text-[#D3AA66] hover:bg-[#1C2B22] transition-colors">
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button key={item.label} onClick={() => go(item.target)} data-testid={`nav-link-${item.label.toLowerCase()}`}
                  className="text-[#F5F1E8]/80 hover:text-[#D3AA66] transition-colors">
                  {item.label}
                </button>
              )
            )}
            <a href={waLink("Hello Nagpal's House of Beauty, I'd like to enquire about salon furniture.")}
              target="_blank" rel="noreferrer" data-testid="nav-enquire-cta"
              className="bg-[#B4863C] text-[#0F1411] font-semibold px-5 py-2.5 text-sm hover:bg-[#D3AA66] transition-all hover:-translate-y-0.5">
              Enquire Now
            </a>
          </nav>

          <button className="lg:hidden absolute right-5 top-5 text-[#F5F1E8]" onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle" aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-[#0F1411]/95 backdrop-blur-xl border-t border-[#B4863C]/20"
              data-testid="mobile-menu">
              <div className="px-6 py-6 flex flex-col gap-5">
                {NAV.map((item) => (
                  <button key={item.label} onClick={() => go(item.target)} data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    className="text-left font-display uppercase tracking-widest text-[#F5F1E8]/85 text-lg">
                    {item.label}
                  </button>
                ))}
                <a href={waLink("Hello Nagpal's House of Beauty, I'd like to enquire about salon furniture.")}
                  target="_blank" rel="noreferrer" data-testid="mobile-enquire-cta"
                  className="bg-[#B4863C] text-[#0F1411] font-semibold px-5 py-3 text-center">
                  Enquire Now
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
