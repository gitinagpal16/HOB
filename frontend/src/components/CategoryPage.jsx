import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  MessageCircle,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import {
  CATEGORIES,
  PRODUCTS_BY_CATEGORY,
  scrollToId,
  waLink,
} from "../data/content";

const ProductImage = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`w-full h-full object-contain ${className}`}
  />
);

function ProductDetail({ category, product }) {
  const images = useMemo(
    () => (product.images?.length ? product.images : [product.image]),
    [product.image, product.images]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const activeImage = images[activeIndex];

  const previous = useCallback(() => {
    setActiveIndex(
      (index) => (index - 1 + images.length) % images.length
    );
    setZoom(1);
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex(
      (index) => (index + 1) % images.length
    );
    setZoom(1);
  }, [images.length]);

  const openLightbox = () => {
    setZoom(1);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, next, previous]);

  return (
    <>
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#F5F1E8]/45 mb-8">
            <Link
              to={`/category/${category.id}`}
              className="hover:text-[#D3AA66] transition-colors"
            >
              {category.name}
            </Link>

            <span>/</span>

            <span className="text-[#D3AA66]">
              {product.name}
            </span>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] gap-8 lg:gap-14 items-start">
            <div className="grid grid-cols-[72px_minmax(0,1fr)] sm:grid-cols-[92px_minmax(0,1fr)] gap-4">
              <div className="flex flex-col gap-3">
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      setZoom(1);
                    }}
                    className={`aspect-square overflow-hidden border transition-all ${
                      activeIndex === index
                        ? "border-[#D3AA66] ring-1 ring-[#D3AA66]/40"
                        : "border-[#B4863C]/20 hover:border-[#B4863C]/60"
                    } bg-[#F7F5F0]`}
                    aria-label={`View ${product.name} image ${index + 1}`}
                    data-testid={`product-thumbnail-${index}`}
                  >
                    <ProductImage
                      src={src}
                      alt={`${product.name} view ${index + 1}`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={openLightbox}
                className="group relative aspect-[4/5] overflow-hidden bg-[#F7F5F0] border border-[#B4863C]/20 cursor-zoom-in"
                aria-label="Open product image in full screen"
                data-testid="product-main-image"
              >
                <ProductImage
                  src={activeImage}
                  alt={`${product.name} selected view`}
                  className="transition-transform duration-500 group-hover:scale-[1.015]"
                />

                <span className="absolute right-4 bottom-4 w-11 h-11 flex items-center justify-center bg-[#0F1411]/85 text-[#F5F1E8] border border-[#B4863C]/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={17} />
                </span>
              </button>
            </div>

            <div className="lg:pt-3">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D3AA66] mb-4">
                {category.name}
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] tracking-tight">
                {product.name}
              </h1>

              <div className="w-12 h-px bg-[#B4863C] my-6" />

              <p className="text-[#F5F1E8]/65 text-sm sm:text-base leading-7 max-w-xl">
                {product.description ||
                  "Add the product description here. This space is ready for the final product story, materials, comfort features and intended salon use."}
              </p>

              <div className="mt-8 border-y border-[#B4863C]/20">
                <details
                  className="group border-b border-[#B4863C]/20"
                  open
                >
                  <summary className="list-none cursor-pointer py-5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#F5F1E8]/80">
                    Description
                    <Plus
                      size={16}
                      className="group-open:rotate-45 transition-transform text-[#D3AA66]"
                    />
                  </summary>

                  <div className="pb-5 text-sm leading-7 text-[#F5F1E8]/55">
                    {product.description ||
                      `Add the detailed description for ${product.name} here.`}
                  </div>
                </details>

                <details className="group">
                  <summary className="list-none cursor-pointer py-5 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#F5F1E8]/80">
                    Details
                    <Plus
                      size={16}
                      className="group-open:rotate-45 transition-transform text-[#D3AA66]"
                    />
                  </summary>

                  <div className="pb-5 text-sm leading-7 text-[#F5F1E8]/55">
                    {product.details?.length ? (
                      <ul className="space-y-2">
                        {product.details.map((detail) => (
                          <li key={detail}>• {detail}</li>
                        ))}
                      </ul>
                    ) : (
                      "Add the product details here."
                    )}
                  </div>
                </details>
              </div>

              <a
                href={waLink(
                  `Hello Nagpal's House of Beauty, I'd like to enquire about ${product.name} in ${category.name}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 bg-[#B4863C] text-[#0F1411] font-display font-bold uppercase tracking-[0.12em] text-xs sm:text-sm px-7 py-4 hover:bg-[#D3AA66] transition-all hover:-translate-y-0.5"
                data-testid="product-whatsapp-cta"
              >
                <MessageCircle size={17} />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#080B09]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          data-testid="product-lightbox"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 z-20 w-11 h-11 flex items-center justify-center border border-[#F5F1E8]/20 text-[#F5F1E8] hover:border-[#D3AA66] hover:text-[#D3AA66] transition-colors"
            aria-label="Close image viewer"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={previous}
            className="absolute left-3 sm:left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-[#F5F1E8]/25 bg-[#0F1411]/70 text-[#F5F1E8] flex items-center justify-center hover:border-[#D3AA66] hover:text-[#D3AA66]"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 sm:right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-[#F5F1E8]/25 bg-[#0F1411]/70 text-[#F5F1E8] flex items-center justify-center hover:border-[#D3AA66] hover:text-[#D3AA66]"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="w-full max-w-6xl h-full flex flex-col items-center justify-center gap-4">
            <div className="relative max-w-[min(82vw,900px)] max-h-[78vh] overflow-hidden bg-[#F7F5F0] shadow-2xl">
              <img
                src={activeImage}
                alt={`${product.name} enlarged view ${activeIndex + 1}`}
                className="max-w-full max-h-[78vh] object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${zoom})`,
                }}
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setZoom((z) =>
                    Math.max(1, +(z - 0.25).toFixed(2))
                  )
                }
                className="w-10 h-10 border border-[#F5F1E8]/20 text-[#F5F1E8] hover:border-[#D3AA66] hover:text-[#D3AA66] flex items-center justify-center"
                aria-label="Zoom out"
              >
                <Minus size={16} />
              </button>

              <span className="min-w-16 text-center text-xs text-[#F5F1E8]/70">
                {Math.round(zoom * 100)}%
              </span>

              <button
                type="button"
                onClick={() =>
                  setZoom((z) =>
                    Math.min(2.5, +(z + 0.25).toFixed(2))
                  )
                }
                className="w-10 h-10 border border-[#F5F1E8]/20 text-[#F5F1E8] hover:border-[#D3AA66] hover:text-[#D3AA66] flex items-center justify-center"
                aria-label="Zoom in"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="flex gap-2 max-w-full overflow-x-auto pb-1">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    setZoom(1);
                  }}
                  className={`w-16 h-16 shrink-0 bg-[#F7F5F0] border ${
                    activeIndex === index
                      ? "border-[#D3AA66]"
                      : "border-[#F5F1E8]/15"
                  }`}
                >
                  <ProductImage
                    src={src}
                    alt={`${product.name} thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function CategoryPage() {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  const category = CATEGORIES.find(
    (c) => c.id === categoryId
  );

  const products = useMemo(
    () => PRODUCTS_BY_CATEGORY[categoryId] || [],
    [categoryId]
  );

  const product = useMemo(
    () =>
      products.find(
        (p) =>
          p.id === productId ||
          encodeURIComponent(p.name) === productId
      ),
    [products, productId]
  );

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, {
        immediate: true,
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [categoryId, productId]);

  const goCategories = () => {
    navigate("/");

    setTimeout(
      () => scrollToId("#all-categories"),
      500
    );
  };

  if (!category || (productId && !product)) {
    return (
      <main
        className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-6 text-center"
        data-testid="category-not-found"
      >
        <h1 className="font-display font-bold uppercase text-2xl text-[#F5F1E8]">
          {productId
            ? "Product not found"
            : "Category not found"}
        </h1>

        <Link
          to="/"
          data-testid="category-not-found-home-link"
          className="text-[#D3AA66] border-b border-[#B4863C] pb-1 text-sm"
        >
          Back to home
        </Link>
      </main>
    );
  }

  if (product) {
    return (
      <main data-testid="product-detail-page">
        <ProductDetail
          category={category}
          product={product}
        />
      </main>
    );
  }

  return (
    <main data-testid="category-page">
      <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
        <motion.img
          key={category.id}
          src={category.image}
          alt={category.name}
          initial={{
            scale: 1.12,
            opacity: 0.5,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full object-cover warm-tone"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1411] via-[#0F1411]/50 to-[#0F1411]/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pb-12 w-full">
          <button
            onClick={goCategories}
            data-testid="category-back-link"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#F5F1E8]/60 hover:text-[#D3AA66] transition-colors mb-5"
          >
            <ArrowLeft size={14} />
            All categories
          </button>

          <p className="text-[11px] uppercase tracking-[0.35em] text-[#D3AA66] font-semibold mb-2">
            {category.count}
          </p>

          <h1
            className="font-display font-extrabold uppercase tracking-tight text-[#F5F1E8] text-3xl sm:text-5xl lg:text-6xl"
            data-testid="category-title"
          >
            {category.name}
          </h1>

          <p className="text-[#F5F1E8]/60 mt-3 max-w-xl text-sm sm:text-base">
            {category.desc}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10"
            data-testid="category-products-grid"
          >
            {products.map((p, i) => (
              <Reveal
                key={p.id || p.name}
                delay={(i % 4) * 0.06}
              >
                <Link
                  to={`/category/${category.id}/product/${
                    p.id ||
                    encodeURIComponent(p.name)
                  }`}
                  data-testid={`category-product-${i}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F5F0] border border-[#B4863C]/15 group-hover:border-[#B4863C]/50 transition-colors duration-500">
                    <ProductImage
                      src={p.image}
                      alt={p.name}
                      className="transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3">
                    <h3 className="font-display font-semibold text-base sm:text-lg text-[#F5F1E8] group-hover:text-[#D3AA66] transition-colors">
                      {p.name}
                    </h3>

                    <ChevronRight
                      size={17}
                      className="shrink-0 text-[#B4863C] group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="border border-[#B4863C]/25 bg-[#1C2B22]/60 px-7 sm:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display font-bold uppercase tracking-tight text-[#F5F1E8] text-xl sm:text-3xl">
                Need {category.name.toLowerCase()} in bulk?
              </h2>

              <p className="text-[#F5F1E8]/55 text-sm mt-2 max-w-md">
                Full-salon fit-outs and made-to-order runs —
                same-day quote on WhatsApp.
              </p>
            </div>

            <a
              href={waLink(
                `Hello Nagpal's House of Beauty, I'd like to discuss a bulk order of ${category.name}.`
              )}
              target="_blank"
              rel="noreferrer"
              data-testid="category-bulk-whatsapp-cta"
              className="inline-flex items-center gap-3 bg-[#B4863C] text-[#0F1411] font-display font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-[#D3AA66] transition-all hover:-translate-y-1"
            >
              <MessageCircle size={17} />
              Get a quote
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
