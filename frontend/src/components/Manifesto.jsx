import { Award, BadgeCheck, IndianRupee, PencilRuler, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { scrollToId } from "../data/content";

const CHAPTERS = [
  {
    num: "01",
    title: "Manufactured in Sonipat",
    body: "We are manufacturers first. Our own production unit in Sonipat, Haryana is run by a team that lives and breathes salon furniture — 12 years of hands-on manufacturing experience, backed by more than 25 years of importing and selling salon furniture across India.",
  },
  {
    num: "02",
    title: "Quality Over Quantity",
    body: "We believe in quality rather than quantity. Every chair, basin and bed is built for extreme comfort and checked piece by piece before it leaves our unit — because salon furniture isn't decoration, it's equipment your clients sit in every single day.",
  },
  {
    num: "03",
    title: "Pan-India, White-Glove",
    body: "From a single styling chair to a full salon fit-out, we deliver and install across India. Custom sizes, finishes and bulk runs are our speciality — tell us the floor plan, and we'll furnish it.",
  },
];

const CREDENTIALS = [
  { icon: Award, label: "ISO 9001:2000 Certified" },
  { icon: BadgeCheck, label: "GMP Certified Company" },
  { icon: PencilRuler, label: "Customizable Designs" },
  { icon: IndianRupee, label: "Factory Pricing — Price Guarantee" },
  { icon: Sparkles, label: "Extreme Comfort" },
];

export const Manifesto = () => (
  <section id="about" className="py-20 sm:py-28 bg-[#1C2B22]/40 border-y border-[#B4863C]/15" data-testid="about-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="mb-14 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-3">About us</p>
          <h2 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl text-[#F5F1E8] max-w-xl leading-tight">
            Manufacturers first. Quality always.
          </h2>
        </div>
        <button onClick={() => scrollToId("#contact")} data-testid="about-contact-link"
          className="text-sm text-[#D3AA66] border-b border-[#B4863C] pb-1 hover:text-[#F5F1E8] transition-colors">
          Get in touch
        </button>
      </Reveal>

      <div>
        {CHAPTERS.map((ch, i) => (
          <Reveal key={ch.num} delay={i * 0.08}>
            <div className="grid md:grid-cols-[140px_1fr_1.4fr] gap-4 md:gap-10 py-10 border-t border-[#B4863C]/15 items-start"
              data-testid={`manifesto-chapter-${ch.num}`}>
              <span className="font-display font-extrabold text-4xl sm:text-5xl marquee-outline">{ch.num}</span>
              <h3 className="font-display font-bold uppercase tracking-wide text-xl sm:text-2xl text-[#D3AA66]">{ch.title}</h3>
              <p className="text-[#F5F1E8]/65 leading-relaxed text-sm sm:text-base max-w-xl">{ch.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-l border-[#B4863C]/15 mt-4"
          data-testid="credentials-grid">
          {CREDENTIALS.map((c, i) => (
            <div key={c.label} data-testid={`credential-${i}`}
              className="border-r border-b border-[#B4863C]/15 px-5 py-7 flex flex-col items-center text-center gap-3 hover:bg-[#1C2B22]/70 transition-colors duration-300">
              <c.icon size={22} className="text-[#B4863C]" strokeWidth={1.5} />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#F5F1E8]/70 leading-relaxed">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
