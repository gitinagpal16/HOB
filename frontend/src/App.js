import { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";
import "@/App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Partners } from "./components/Partners";
import { Categories } from "./components/Categories";
import { TrustBar } from "./components/TrustBar";
import { Testimonials } from "./components/Testimonials";
import { Manifesto } from "./components/Manifesto";
import { InstagramSection } from "./components/InstagramSection";
import { Contact } from "./components/Contact";
import CategoryPage from "./components/CategoryPage";
import { CONTACT, waLink } from "./data/content";

const Home = () => (
  <main>
    <Hero />
    <Marquee />
    <TrustBar />
    <Partners />
    <Testimonials />
    <Categories />
    <Manifesto />
    <InstagramSection />
    <Contact />
  </main>
);

function App() {
  useEffect(() => {
    document.title = "NAGPAL'S HOUSE OF BEAUTY — Salon Furniture, Delhi";
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain bg-[#0F1411] min-h-screen" data-testid="app-root">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/category/:categoryId/product/:productId" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[80] flex flex-col items-center gap-3">
        <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          data-testid="floating-call-button" aria-label="Call Nagpal's House of Beauty"
          className="sm:hidden w-12 h-12 rounded-full bg-[#0F1411]/90 backdrop-blur border border-[#B4863C]/60 text-[#D3AA66] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.5)] active:scale-95 transition-all">
          <Phone size={20} />
        </a>
        <a href={waLink("Hello Nagpal's House of Beauty, I have a question about salon furniture.")}
          target="_blank" rel="noreferrer" data-testid="floating-whatsapp-button"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#B4863C] text-[#0F1411] flex items-center justify-center shadow-[0_8px_30px_rgba(180,134,60,0.45)] hover:bg-[#D3AA66] hover:-translate-y-1 transition-all">
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}

export default App;
