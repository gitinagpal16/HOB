import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote: "The most amazing experience with Nagpal's House of Beauty.",
    name: "Siya Pant",
    role: "Salon Owner",
  },
  {
    quote: "The salon furniture is made with premium quality materials and has a modern design.",
    name: "Ashish Yadav",
    role: "Salon Owner",
  },
  {
    quote: "The prices are genuine and much better compared to other suppliers.",
    name: "Soniya Gupta",
    role: "Salon Owner",
  },
];

export const Testimonials = () => (
  <section id="clients" className="py-20 sm:py-28" data-testid="testimonials-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="mb-12">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-3">Our clients</p>
        <h2 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl text-[#F5F1E8]">
          Word from the salon floor
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure data-testid={`testimonial-card-${i}`}
              className="h-full border border-[#B4863C]/15 bg-[#141B16] p-8 flex flex-col hover:border-[#B4863C]/45 transition-colors duration-500">
              <Quote size={26} className="text-[#B4863C] mb-6" strokeWidth={1.5} fill="currentColor" />
              <blockquote className="text-[#F5F1E8]/80 leading-relaxed text-base sm:text-lg italic flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-5 border-t border-[#B4863C]/15">
                <span className="font-display font-bold uppercase tracking-wide text-[#D3AA66] text-sm block">
                  {t.name}
                </span>
                <span className="text-[#F5F1E8]/40 text-xs tracking-[0.2em] uppercase mt-1 block">{t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
