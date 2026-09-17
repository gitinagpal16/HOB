const ITEMS = [
  "Salon Chairs", "Shampoo Stations", "LED Workstations",
  "Mani-Pedi Stations", "Spa Furniture", "Mirrors & Vanity", "Pan-India Delivery", "Bulk & Made-to-Order",
];

export const Marquee = () => (
  <div className="border-y border-[#B4863C]/20 py-6 overflow-hidden bg-[#0F1411]" data-testid="editorial-marquee">
    <div className="marquee-track">
      {[0, 1].map((half) => (
        <div key={half} className="flex items-center shrink-0" aria-hidden={half === 1}>
          {ITEMS.map((item) => (
            <span key={`${half}-${item}`} className="flex items-center shrink-0">
              <span className="font-display font-bold uppercase tracking-[0.2em] text-3xl sm:text-5xl marquee-outline px-6 whitespace-nowrap">
                {item}
              </span>
              <span className="text-[#B4863C] text-xl">◆</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
