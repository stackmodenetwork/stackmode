import { useEffect, useRef, useState } from 'react';

const DigitalCardPurchase = () => {
  const buyBtnRef = useRef<HTMLDivElement>(null);
  const [buyBtnLoaded, setBuyBtnLoaded] = useState(false);

  useEffect(() => {
    if (buyBtnLoaded || !buyBtnRef.current) return;

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const initShopify = () => {
      const client = (window as any).ShopifyBuy.buildClient({
        domain: 'qg5zmc-rx.myshopify.com',
        storefrontAccessToken: '8485ea7ca81bb3c6f160c39df0f8aba8',
      });
      (window as any).ShopifyBuy.UI.onReady(client).then((ui: any) => {
        ui.createComponent('product', {
          id: '9294223048962',
          node: buyBtnRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0", "margin-bottom": "0" } },
                title: { "font-family": "PT Sans, sans-serif", color: "#ffffff" },
                button: {
                  "font-family": "PT Sans, sans-serif", "font-weight": "bold", "font-size": "18px",
                  "padding-top": "17px", "padding-bottom": "17px", color: "#f4f4f4",
                  ":hover": { color: "#f4f4f4", "background-color": "#2cd449" },
                  "background-color": "#31ec51", ":focus": { "background-color": "#2cd449" },
                  "border-radius": "40px", "padding-left": "100px", "padding-right": "100px",
                },
                quantityInput: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px" },
                price: { "font-family": "PT Sans, sans-serif", "font-weight": "bold", color: "#fffafa" },
                compareAt: { "font-family": "PT Sans, sans-serif", "font-weight": "bold", color: "#fffafa" },
                unitPrice: { "font-family": "PT Sans, sans-serif", "font-weight": "bold", color: "#fffafa" },
              },
              buttonDestination: "checkout",
              contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
              width: "580px",
              text: { button: "Buy now" },
              googleFonts: ["PT Sans"],
            },
            modalProduct: {
              contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
              styles: {
                product: { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0", "margin-bottom": "0" } },
                button: {
                  "font-family": "PT Sans, sans-serif", "font-weight": "bold", "font-size": "18px",
                  "padding-top": "17px", "padding-bottom": "17px", color: "#f4f4f4",
                  ":hover": { color: "#f4f4f4", "background-color": "#2cd449" },
                  "background-color": "#31ec51", ":focus": { "background-color": "#2cd449" },
                  "border-radius": "40px", "padding-left": "100px", "padding-right": "100px",
                },
                title: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "bold", "font-size": "26px", color: "#4c4c4c" },
                price: { "font-family": "Helvetica Neue, sans-serif", color: "#4c4c4c" },
              },
              googleFonts: ["PT Sans"],
              text: { button: "Add to cart" },
            },
            option: {
              styles: {
                label: { "font-family": "PT Sans, sans-serif", "font-weight": "bold", color: "#ffffff" },
                select: { "font-family": "PT Sans, sans-serif", "font-weight": "bold" },
              },
              googleFonts: ["PT Sans"],
            },
            cart: {
              styles: {
                button: {
                  "font-family": "PT Sans, sans-serif", "font-weight": "bold", "font-size": "18px",
                  "padding-top": "17px", "padding-bottom": "17px", color: "#f4f4f4",
                  ":hover": { color: "#f4f4f4", "background-color": "#2cd449" },
                  "background-color": "#31ec51", ":focus": { "background-color": "#2cd449" },
                  "border-radius": "40px",
                },
                title: { color: "#000" }, header: { color: "#000" }, lineItems: { color: "#000" },
                subtotalText: { color: "#000" }, subtotal: { color: "#000" }, notice: { color: "#000" },
                currency: { color: "#000" }, close: { color: "#000", ":hover": { color: "#000" } },
                empty: { color: "#000" }, discountText: { color: "#000" }, discountAmount: { color: "#000" },
              },
              text: { total: "Subtotal", button: "Checkout" },
              googleFonts: ["PT Sans"],
            },
            toggle: {
              styles: {
                toggle: { "font-family": "PT Sans, sans-serif", "font-weight": "bold", "background-color": "#31ec51", ":hover": { "background-color": "#2cd449" }, ":focus": { "background-color": "#2cd449" } },
                count: { "font-size": "18px", color: "#f4f4f4", ":hover": { color: "#f4f4f4" } },
                iconPath: { fill: "#f4f4f4" },
              },
              googleFonts: ["PT Sans"],
            },
            lineItem: {
              styles: {
                variantTitle: { color: "#000" }, title: { color: "#000" }, price: { color: "#000" },
                fullPrice: { color: "#000" }, discount: { color: "#000" }, quantity: { color: "#000" },
                quantityIncrement: { color: "#000", "border-color": "#000" },
                quantityDecrement: { color: "#000", "border-color": "#000" },
                quantityInput: { color: "#000", "border-color": "#000" },
              },
            },
          },
        });
      });
      setBuyBtnLoaded(true);
    };

    if ((window as any).ShopifyBuy?.UI) {
      initShopify();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.onload = initShopify;
      document.head.appendChild(script);
    }
  }, [buyBtnLoaded]);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 overflow-hidden" style={{ background: '#04040a' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(0,207,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.15) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Section label */}
        <p className="text-[10px] tracking-[0.4em] text-white/20 mb-6 uppercase" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          // CEO TURBO — NFC DIGITAL BUSINESS CARDS
        </p>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-3"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#00cfff', letterSpacing: '0.05em' }}
        >
          GET YOUR DIGITAL CARD
        </h2>
        <p className="text-white/40 text-sm sm:text-base text-center max-w-lg mb-10" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
          Premium NFC digital business card — tap to share your brand instantly. No paper. No limits. Always updated.
        </p>

        {/* 3D Auto-Spinning Card */}
        <div className="mb-12" style={{ perspective: '1200px' }}>
          <div
            className="relative w-[320px] h-[200px] sm:w-[400px] sm:h-[240px]"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'cardSpin 6s ease-in-out infinite',
            }}
          >
            {/* Front — matches physical card design */}
            <div
              className="absolute inset-0 rounded-2xl flex flex-col justify-end"
              style={{
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(160deg, #1a1a1f 0%, #0e0e12 35%, #0a0a0e 70%, #111115 100%)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* NFC tap icon — top right */}
              <div className="absolute top-5 right-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" fill="none"/>
                  <path d="M8.5 12a3.5 3.5 0 0 1 3.5-3.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeLinecap="round" fill="none"/>
                  <path d="M7 12a5 5 0 0 1 5-5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" fill="none"/>
                  <path d="M5.5 12a6.5 6.5 0 0 1 6.5-6.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" fill="none"/>
                  <circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.2)"/>
                </svg>
              </div>

              {/* Card text — bottom left */}
              <div className="p-7 sm:p-8">
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                  fontSize: 'clamp(22px, 4vw, 32px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(180deg, rgba(200,200,205,0.9) 0%, rgba(140,140,148,0.7) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  margin: 0,
                }}>
                  DIGITAL<br />BUSINESS<br /><span style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(180,180,185,0.75) 0%, rgba(110,110,118,0.55) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}>CARD</span>
                </h3>
              </div>

              {/* Subtle edge highlight */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.01) 100%)',
              }} />
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-4"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(160deg, #1a1a1f 0%, #0e0e12 35%, #0a0a0e 70%, #111115 100%)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* QR grid */}
              <div className="w-24 h-24 rounded-lg border grid grid-cols-5 grid-rows-5 gap-[2px] p-2" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                {Array(25).fill(null).map((_, i) => (
                  <div key={i} className="rounded-sm" style={{ background: [0,1,2,5,6,10,12,14,18,19,20,23,24].includes(i) ? 'rgba(255,255,255,0.55)' : 'transparent' }} />
                ))}
              </div>
              <div className="text-[10px] text-white/60 tracking-[0.2em]" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                TAP OR SCAN TO CONNECT
              </div>
            </div>
          </div>
        </div>

        {/* Shopify Buy Button */}
        <div ref={buyBtnRef} className="w-full max-w-[580px] mx-auto" />
      </div>

      {/* Card spin keyframes */}
      <style>{`
        @keyframes cardSpin {
          0% { transform: rotateY(0deg) rotateX(2deg); }
          25% { transform: rotateY(180deg) rotateX(-2deg); }
          50% { transform: rotateY(180deg) rotateX(2deg); }
          75% { transform: rotateY(360deg) rotateX(-2deg); }
          100% { transform: rotateY(360deg) rotateX(2deg); }
        }
      `}</style>
    </section>
  );
};

export default DigitalCardPurchase;
