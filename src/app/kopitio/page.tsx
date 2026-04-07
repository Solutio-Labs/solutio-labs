"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 50);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // FIXED: Fungsi agar URL tidak kotor dengan hash (#) yang merusak Back Button
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault(); // Cegah hash masuk ke URL
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Tutup menu HP otomatis
  };

  const waNumber = "6281234567890";
  const waMessage = "Halo Kopitio, saya mau pesan kopi dong!";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  const igLink = "https://instagram.com/kopitio";

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
            MEMUAT KOPITIO...
          </p>
        </div>
      )}

      {!isLoading && (
        <div
          className={`transition-all duration-1000 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* NAVBAR */}
          <nav className="fixed w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "home")}
                className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src="/kopitio.jpeg"
                  alt="Logo Kopitio"
                  className="h-14 w-auto object-contain mix-blend-multiply"
                />
              </a>

              <div className="hidden md:flex gap-8 font-medium text-sm text-stone-600 items-center">
                {/* FIXED: Menggunakan onClick pengganti href */}
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "home")}
                  className="cursor-pointer hover:text-[#C88A1A] transition-colors duration-300"
                >
                  Beranda
                </a>
                <a
                  href="#menu"
                  onClick={(e) => scrollToSection(e, "menu")}
                  className="cursor-pointer hover:text-[#C88A1A] transition-colors duration-300"
                >
                  Menu Signature
                </a>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="cursor-pointer hover:text-[#C88A1A] transition-colors duration-300"
                >
                  Tentang Kami
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#C88A1A] text-white text-sm font-semibold rounded-full hover:bg-stone-900 hover:scale-105 transition-all"
                >
                  Pesan Sekarang
                </a>
              </div>

              <button
                className="md:hidden p-2 text-stone-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Dropdown */}
            <div
              className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 transition-all duration-300 shadow-xl ${isMobileMenuOpen ? "opacity-100 max-h-64 py-4" : "opacity-0 max-h-0 overflow-hidden py-0"}`}
            >
              <div className="flex flex-col items-center gap-4 font-medium text-stone-600">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "home")}
                  className="hover:text-[#C88A1A] py-2"
                >
                  Beranda
                </a>
                <a
                  href="#menu"
                  onClick={(e) => scrollToSection(e, "menu")}
                  className="hover:text-[#C88A1A] py-2"
                >
                  Menu Signature
                </a>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="hover:text-[#C88A1A] py-2"
                >
                  Tentang Kami
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-8 py-3 bg-[#C88A1A] text-white font-semibold rounded-full"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </nav>

          {/* HERO SECTION */}
          <section
            id="home"
            className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
              <div className="z-10 flex flex-col items-start">
                <div className="inline-block px-4 py-1.5 bg-[#C88A1A]/10 text-[#C88A1A] font-semibold text-xs rounded-full mb-6 animate-pulse">
                  ✨ Buka Setiap Hari 07.00 - 22.00
                </div>
                <h2 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-tight mb-6">
                  Awali Harimu <br /> dengan{" "}
                  <span className="text-[#C88A1A]">Kopitio.</span>
                </h2>
                <p className="text-stone-500 text-lg mb-8 max-w-md leading-relaxed">
                  Menyajikan kopi kualitas terbaik sejak 2018. Tempat yang tepat
                  untuk bersantai, bekerja, atau sekadar menikmati waktu luang.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#menu"
                    onClick={(e) => scrollToSection(e, "menu")}
                    className="px-8 py-4 bg-stone-900 text-white font-semibold rounded-full hover:bg-[#C88A1A] transition-all cursor-pointer"
                  >
                    Lihat Menu
                  </a>
                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="px-8 py-4 bg-white text-stone-900 border border-stone-200 font-semibold rounded-full hover:border-[#C88A1A] hover:text-[#C88A1A] transition-all cursor-pointer"
                  >
                    Cerita Kami
                  </a>
                </div>
              </div>
              <div className="relative z-10 group mt-8 lg:mt-0">
                <div className="relative h-100 lg:h-125 w-full rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                    alt="Suasana Kopitio"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </section>

          {/* SIGNATURE MENU SECTION */}
          <section id="menu" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-stone-900 mb-4">
                  Signature Kopitio
                </h3>
                <p className="text-stone-500 max-w-xl mx-auto">
                  Diracik oleh barista berpengalaman menggunakan biji kopi
                  pilihan nusantara.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group rounded-2xl bg-[#FDFBF7] p-4 hover:shadow-2xl hover:shadow-[#C88A1A]/10 transition-all duration-300 border border-transparent hover:border-[#C88A1A]/20">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
                      alt="Espresso"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">
                    Kopitio Espresso
                  </h4>
                  <p className="text-stone-500 text-sm mb-4">
                    Ekstraksi sempurna dari house blend rahasia kami sejak 2018.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#C88A1A] text-lg">
                      Rp 25.000
                    </span>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#C88A1A] group-hover:text-white transition-colors duration-300"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="group rounded-2xl bg-[#FDFBF7] p-4 hover:shadow-2xl hover:shadow-[#C88A1A]/10 transition-all duration-300 border border-transparent hover:border-[#C88A1A]/20">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=600&q=80"
                      alt="Latte Art"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">
                    Caramel Macchiato
                  </h4>
                  <p className="text-stone-500 text-sm mb-4">
                    Perpaduan espresso, susu steam lembut, dan saus karamel
                    premium.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#C88A1A] text-lg">
                      Rp 35.000
                    </span>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#C88A1A] group-hover:text-white transition-colors duration-300"
                    >
                      +
                    </a>
                  </div>
                </div>
                <div className="group rounded-2xl bg-[#FDFBF7] p-4 hover:shadow-2xl hover:shadow-[#C88A1A]/10 transition-all duration-300 border border-transparent hover:border-[#C88A1A]/20">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80"
                      alt="Manual Brew V60"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">
                    V60 Manual Brew
                  </h4>
                  <p className="text-stone-500 text-sm mb-4">
                    Single origin pilihan yang diseduh manual untuk rasa yang
                    clean.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#C88A1A] text-lg">
                      Rp 30.000
                    </span>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-[#C88A1A] group-hover:text-white transition-colors duration-300"
                    >
                      +
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Link
                  href="/kopitio/menu"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-stone-900 text-stone-900 font-bold rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300"
                >
                  Lihat Menu Lengkap
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* ABOUT US SECTION */}
          <section
            id="about"
            className="py-24 bg-[#FDFBF7] relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative group mt-8 md:mt-0">
                <div className="absolute inset-0 bg-[#C88A1A] rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
                  alt="Barista Kopitio"
                  className="relative z-10 rounded-3xl w-full h-125 object-cover border-4 border-[#FDFBF7] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-4xl font-bold text-stone-900 mb-6">
                  Lebih dari sekadar <br />
                  <span className="text-[#C88A1A]">Secangkir Kopi.</span>
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Didirikan pada tahun 2018, <strong>Kopitio</strong> bermula
                  dari sebuah kecintaan mendalam terhadap biji kopi lokal
                  nusantara. Kami percaya bahwa setiap cangkir memiliki
                  ceritanya sendiri.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-[#C88A1A] pl-4">
                    <h5 className="text-2xl font-bold text-stone-900">100%</h5>
                    <p className="text-sm text-stone-500">Biji Kopi Lokal</p>
                  </div>
                  <div className="border-l-4 border-[#C88A1A] pl-4">
                    <h5 className="text-2xl font-bold text-stone-900">5+</h5>
                    <p className="text-sm text-stone-500">Tahun Pengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-stone-950 text-stone-400 py-12 border-t-4 border-[#C88A1A]">
            <div className="max-w-7xl mx-auto px-6 text-center text-xs">
              <p>
                © {new Date().getFullYear()} Kopitio Coffee Shop. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
