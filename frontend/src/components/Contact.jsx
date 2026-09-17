import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, scrollToId, waLink } from "../data/content";

const ROWS = [
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp, href: waLink("Hello Nagpal's House of Beauty!") },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Instagram, label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramUrl },
  { icon: MapPin, label: "Showroom", value: CONTACT.address },
];

export const Contact = () => (
  <>
    <section id="contact" className="py-20 sm:py-28 bg-[#1C2B22]" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#D3AA66] font-semibold mb-4">Contact us</p>
          <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-[#F5F1E8] leading-[1.05]">
            Furnishing a salon?<br />Let's talk.
          </h2>
          <p className="mt-6 text-[#F5F1E8]/65 max-w-md leading-relaxed">
            Pricing, stock checks, bulk orders or a full fit-out — message us and we'll come back with a quote the same day.
          </p>
          <a href={waLink("Hello Nagpal's House of Beauty, I'm furnishing a salon and would like to discuss furniture.")}
            target="_blank" rel="noreferrer" data-testid="contact-whatsapp-cta"
            className="mt-9 inline-flex items-center gap-3 bg-[#B4863C] text-[#0F1411] font-display font-bold uppercase tracking-[0.15em] text-sm px-9 py-4 hover:bg-[#D3AA66] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(180,134,60,0.4)]">
            <MessageCircle size={18} /> Send an enquiry
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="divide-y divide-[#F5F1E8]/12 border-t border-b border-[#F5F1E8]/12" data-testid="contact-list">
            {ROWS.map((row) => (
              <li key={row.label}>
                {row.href ? (
                  <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    data-testid={`contact-${row.label.toLowerCase()}`}
                    className="flex items-center justify-between gap-4 py-5 group">
                    <span className="flex items-center gap-3 text-sm text-[#F5F1E8]/50">
                      <row.icon size={16} className="text-[#B4863C]" /> {row.label}
                    </span>
                    <span className="font-display text-[#F5F1E8] group-hover:text-[#D3AA66] transition-colors text-sm sm:text-base text-right">
                      {row.value}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-4 py-5" data-testid={`contact-${row.label.toLowerCase()}`}>
                    <span className="flex items-center gap-3 text-sm text-[#F5F1E8]/50">
                      <row.icon size={16} className="text-[#B4863C]" /> {row.label}
                    </span>
                    <span className="font-display text-[#F5F1E8] text-sm sm:text-base text-right">{row.value}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <div className="border border-[#B4863C]/25 overflow-hidden" data-testid="map-embed">
            <iframe
              title="Nagpal's House of Beauty — showroom map"
              src="https://www.google.com/maps?q=251%20Pocket%20H-17%20near%20Rohini%20West%20Metro%20Station%20Sector%207%20Rohini%20Delhi%20110085&output=embed"
              className="w-full h-[320px] sm:h-[420px] map-tone block"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center justify-between gap-4 px-5 py-4 bg-[#0F1411] border-t border-[#B4863C]/25">
              <span className="text-xs text-[#F5F1E8]/50 leading-relaxed">{CONTACT.address}</span>
              <a href="https://www.google.com/maps/search/?api=1&query=251+Pocket+H-17+near+Rohini+West+Metro+Station+Sector+7+Rohini+Delhi+110085"
                target="_blank" rel="noreferrer" data-testid="map-directions-link"
                className="shrink-0 text-xs uppercase tracking-[0.2em] text-[#D3AA66] border-b border-[#B4863C]/50 pb-0.5 hover:text-[#F5F1E8] transition-colors">
                Get directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <footer className="bg-[#0F1411] border-t border-[#B4863C]/15 py-10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <button onClick={() => scrollToId("#home")} data-testid="footer-brand" className="text-center sm:text-left">
          <span className="font-display font-extrabold uppercase tracking-[0.14em] text-[#F5F1E8] text-lg">Nagpal's</span>
          <span className="block text-[9px] tracking-[0.42em] uppercase text-[#B4863C] mt-1">House of Beauty</span>
        </button>
        <p className="text-[#F5F1E8]/35 text-xs tracking-wide">© 2026 Nagpal's House of Beauty · Salon & spa furniture · New Delhi</p>
      </div>
    </footer>
  </>
);
