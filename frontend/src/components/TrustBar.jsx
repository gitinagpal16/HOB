import { Armchair, Ruler, Truck } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { icon: Armchair, value: "1000+", label: "Salons furnished" },
  { icon: Truck, value: "Pan-India", label: "Delivery & installation" },
  { icon: Ruler, value: "Custom", label: "Bulk & made-to-order" },
];

export const TrustBar = () => (
  <section className="border-b border-[#B4863C]/20 bg-[#1C2B22]/50" data-testid="trust-bar">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#B4863C]/15">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="flex items-center justify-center gap-4 py-8 sm:py-10 px-4" data-testid={`trust-item-${i}`}>
              <s.icon size={26} className="text-[#B4863C] shrink-0" strokeWidth={1.5} />
              <div>
                <div className="font-display font-extrabold uppercase tracking-wide text-[#F5F1E8] text-xl sm:text-2xl leading-none">
                  {s.value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-[#F5F1E8]/45 mt-1.5">{s.label}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
