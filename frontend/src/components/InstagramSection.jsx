import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, INSTAGRAM_REELS } from "../data/content";

export const InstagramSection = () => (
  <section className="py-20 sm:py-28 bg-[#141B16] border-y border-[#B4863C]/15" data-testid="instagram-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#B4863C] font-semibold mb-4">On the floor, every week</p>
        <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" data-testid="instagram-handle-link"
          className="font-display font-extrabold uppercase tracking-tight text-[#F5F1E8] hover:text-[#D3AA66] transition-colors whitespace-nowrap"
          style={{ fontSize: "clamp(1.05rem, 3.4vw, 3.25rem)" }}>
          {CONTACT.instagram}
        </a>
        <p className="text-[#F5F1E8]/50 text-sm mt-4 max-w-md mx-auto">
          Real installs, salon floor setups and new arrivals — follow along.
        </p>
        <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" data-testid="instagram-follow-button"
          className="mt-8 inline-flex items-center gap-2.5 bg-[#B4863C] text-[#0F1411] font-display font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-[#D3AA66] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(180,134,60,0.35)]">
          <Instagram size={17} /> Follow on Instagram
        </a>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {INSTAGRAM_REELS.map((id, i) => (
          <Reveal key={id} delay={(i % 3) * 0.07}>
            <div data-testid={`instagram-reel-${i}`}
              className="relative border border-[#B4863C]/20 bg-[#0F1411] overflow-hidden aspect-[5/6]">
              <div className="absolute inset-x-0 top-0 h-[5px] bg-[#0F1411] z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-[9px] bg-[#0F1411] z-10 pointer-events-none" />
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed`}
                title={`Instagram reel ${i + 1} — Nagpal's House of Beauty`}
                className="absolute left-0 w-full block"
                style={{ height: "205%", top: "-56px" }}
                frameBorder="0"
                scrolling="no"
                loading="lazy"
                allowFullScreen
                allow="encrypted-media; clipboard-write"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
