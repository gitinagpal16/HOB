import { Reveal } from "./Reveal";
import { PARTNERS } from "../data/content";

export const Partners = () => (
  <section className="py-20 sm:py-24" data-testid="partners-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="flex items-end justify-between gap-6 flex-wrap mb-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-3">Powerful partners</p>
          <h2 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl text-[#F5F1E8]">
            Trusted by India's finest salons
          </h2>
        </div>
        <p className="text-[#F5F1E8]/50 text-sm max-w-xs">Salon chains and studios across the country furnish their floors with Nagpal's.</p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#B4863C]/15">
        {PARTNERS.map((name, i) => (
          <Reveal key={name} delay={i * 0.05}>
            <div data-testid={`partner-badge-${i}`}
              className="border-r border-b border-[#B4863C]/15 h-28 sm:h-32 flex items-center justify-center px-4 group hover:bg-[#1C2B22]/60 transition-colors duration-300">
              <span className="font-display font-semibold uppercase tracking-[0.18em] text-[#F5F1E8]/45 group-hover:text-[#D3AA66] transition-colors duration-300 text-center text-sm sm:text-base">
                {name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
