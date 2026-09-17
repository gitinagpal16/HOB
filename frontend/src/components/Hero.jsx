import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HERO_IMAGE, scrollToId } from "../data/content";

const LINES = ["Furniture that", "shapes a salon's", "first impression."];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[92vh] flex items-end overflow-hidden" data-testid="hero-section">
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img src={HERO_IMAGE} alt="Luxury salon furniture" className="w-full h-full object-cover warm-tone" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1411] via-[#0F1411]/55 to-[#0F1411]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1411]/70 via-transparent to-transparent" />

      <motion.div style={{ opacity: fade }} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pb-20 pt-40 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D3AA66] font-semibold mb-6"
          data-testid="hero-eyebrow">
          Salon furniture manufacturers · Pan-India
        </motion.p>

        <h1 className="font-display font-extrabold uppercase leading-[1.02] tracking-tight text-[#F5F1E8] max-w-5xl" style={{ fontSize: "clamp(1.7rem, 7vw, 4.5rem)" }} data-testid="hero-headline">
          {LINES.map((line, i) => (
            <span key={line} className="mask-line">
              <motion.span
                className={`block ${i === 2 ? "text-[#B4863C]" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-6 max-w-xl text-[#F5F1E8]/70 text-base sm:text-lg leading-relaxed">
          Styling chairs, shampoo units, workstations, pedicure spas and mirrors —
          built for twelve-hour working days, delivered and installed across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-10 flex flex-wrap items-center gap-6">
          <button onClick={() => scrollToId("#all-categories")} data-testid="hero-explore-now-button"
            className="group bg-[#B4863C] text-[#0F1411] font-display font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 flex items-center gap-3 hover:bg-[#D3AA66] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(180,134,60,0.35)]">
            Explore Now
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 right-6 sm:right-10 z-10 hidden md:flex flex-col items-center gap-2 text-[#F5F1E8]/40">
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="w-px h-10 bg-[#B4863C]/50" />
      </motion.div>
    </section>
  );
};
