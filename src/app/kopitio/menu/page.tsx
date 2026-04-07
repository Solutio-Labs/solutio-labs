"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Gunakan Link dari Next.js

export default function MenuCatalog() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 50);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const waNumber = "6281234567890";
  const getWaLink = (itemName: string) => {
    const msg = `Halo Kopitio, saya mau pesan ${itemName} dong!`;
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  };

  // DAFTAR MENU UTUH (Sudah dikembalikan)
  const menuCategories = [
    {
      title: "Espresso Based",
      items: [
        {
          name: "Kopitio Espresso",
          desc: "Ekstraksi house blend rahasia kami.",
          price: "25.000",
          img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Caramel Macchiato",
          desc: "Espresso, susu steam, saus karamel.",
          price: "35.000",
          img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Cafe Latte",
          desc: "Kopi susu klasik yang lembut.",
          price: "30.000",
          img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Americano",
          desc: "Espresso dengan tambahan air panas/dingin.",
          price: "22.000",
          img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80",
        },
      ],
    },
    {
      title: "Manual Brew",
      items: [
        {
          name: "V60 Filter",
          desc: "Single origin pilihan seduh manual.",
          price: "30.000",
          img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Japanese Iced Coffee",
          desc: "Seduh manual dingin yang menyegarkan.",
          price: "32.000",
          img: "https://images.unsplash.com/photo-1499961024600-ad094db305cc?auto=format&fit=crop&w=600&q=80",
        },
      ],
    },
    {
      title: "Non-Coffee & Refreshment",
      items: [
        {
          name: "Matcha Latte",
          desc: "Uji matcha premium dengan susu segar.",
          price: "33.000",
          img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Artisan Chocolate",
          desc: "Cokelat pekat khas Kopitio.",
          price: "30.000",
          img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Lychee Yakult",
          desc: "Segarnya leci berpadu dengan yakult.",
          price: "28.000",
          img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        },
      ],
    },
    {
      title: "Pastry & Snacks",
      items: [
        {
          name: "Butter Croissant",
          desc: "Croissant renyah dan gurih.",
          price: "25.000",
          img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Kopitio Platter",
          desc: "Sosis, kentang, dan nugget.",
          price: "35.000",
          img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-[#C88A1A] selection:text-white relative">
      {isLoading && (
        <div className="fixed inset-0 z-100 bg-[#FDFBF7] flex flex-col items-center justify-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 border-4 border-[#C88A1A]/20 border-t-[#C88A1A] rounded-full animate-spin"></div>
            <img
              src="/kopitio.jpeg"
              alt="Loading"
              className="absolute inset-0 m-auto h-12 w-12 object-contain rounded-full animate-pulse"
            />
          </div>
          <p className="text-[#C88A1A] font-bold tracking-widest text-sm animate-pulse">
            MEMUAT MENU...
          </p>
        </div>
      )}

      {!isLoading && (
        <>
          <nav className="sticky top-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200">
            <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
              {/* FIXED: Menggunakan Link yang mengarah bersih ke /kopitio */}
              <Link
                href="/kopitio"
                className="flex items-center gap-2 text-stone-600 hover:text-[#C88A1A] font-semibold transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Kembali
              </Link>
              <img
                src="/kopitio.jpeg"
                alt="Logo Kopitio"
                className="h-10 w-auto object-contain mix-blend-multiply"
              />
            </div>
          </nav>

          <header
            className={`py-16 text-center px-6 transition-all duration-1000 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Katalog Menu
            </h1>
            <p className="text-stone-500 max-w-lg mx-auto">
              Klik tombol "+" untuk langsung memesan via WhatsApp.
            </p>
          </header>

          <main className="max-w-4xl mx-auto px-6 pb-24">
            {menuCategories.map((category, idx) => (
              <div
                key={idx}
                className={`mb-16 transition-all duration-1000 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <h2 className="text-2xl font-bold text-stone-900 mb-6 pb-2 border-b-2 border-[#C88A1A] inline-block">
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#C88A1A]/10 border border-stone-100 hover:border-[#C88A1A]/30 transition-all duration-300"
                    >
                      <div className="w-1/3 min-w-30 relative overflow-hidden bg-stone-100">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="w-2/3 p-4 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-stone-900 mb-1">
                            {item.name}
                          </h4>
                          <p className="text-xs text-stone-500 leading-relaxed mb-3 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                        <div className="flex justify-between items-end">
                          <span className="font-bold text-[#C88A1A]">
                            Rp {item.price}
                          </span>
                          <a
                            href={getWaLink(item.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-[#FDFBF7] text-stone-600 flex items-center justify-center group-hover:bg-[#C88A1A] group-hover:text-white border border-stone-200"
                          >
                            +
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </main>
        </>
      )}
    </div>
  );
}
