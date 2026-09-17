import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { CATEGORIES } from "../data/content";

export const Categories = () => {
  const navigate = useNavigate();

  return (
    <section id="all-categories" className="py-20 sm:py-28" data-testid="categories-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-3">Every space, every piece</p>
            <h2 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl text-[#F5F1E8]">
              Explore all categories
            </h2>
          </div>
          <p className="text-[#F5F1E8]/50 text-sm max-w-xs">Open a category to browse every design in the line.</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 0.07} className={i % 3 === 1 ? "lg:mt-10" : ""}>
              <button
                onClick={() => navigate(`/category/${cat.id}`)}
                data-testid={`category-card-${cat.id}`}
                className="relative w-full aspect-[3/4] group overflow-hidden text-left border border-[#B4863C]/15 block"
              >
                <img src={cat.image} alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover warm-tone transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1411]/95 via-[#0F1411]/25 to-transparent" />
                <div className="absolute inset-0 border border-[#B4863C]/0 group-hover:border-[#B4863C]/50 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D3AA66]">{cat.count}</span>
                  <div className="flex items-end justify-between gap-3 mt-1">
                    <h3 className="font-display font-bold uppercase tracking-tight text-[#F5F1E8] text-xl sm:text-2xl">
                      {cat.name}
                    </h3>
                    <span className="shrink-0 w-9 h-9 border border-[#B4863C]/40 flex items-center justify-center text-[#D3AA66] group-hover:bg-[#B4863C] group-hover:text-[#0F1411] transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <p className="text-[#F5F1E8]/60 text-sm mt-2 max-w-xs">{cat.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
