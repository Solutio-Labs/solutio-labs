"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Users,
  GraduationCap,
  Mail,
  ChevronRight,
  Menu,
  X,
  Globe,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MalakaProject() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 50);
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-white selection:text-black">
      {/* LOADING SCREEN */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8">
            <img
              src="/malaka-logo.png"
              alt="Malaka Logo"
              className="h-24 w-auto invert brightness-200"
            />
          </motion.div>
          <motion.h2
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-xs tracking-[0.5em] uppercase text-zinc-500 font-sans">
            Membangun Masyarakat Baru
          </motion.h2>
        </div>
      )}

      {!isLoading && (
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          {/* NAVBAR - FIXED: Button Back Dihilangkan */}
          <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-black/95 backdrop-blur-md py-4 border-b border-zinc-800" : "bg-transparent py-8"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-sans">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "home")}
                className="cursor-pointer z-10">
                <img
                  src="/malaka-logo.png"
                  alt="Malaka"
                  className="h-8 w-auto invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-12 text-[11px] tracking-[0.3em] uppercase font-medium">
                <a
                  href="#vision"
                  onClick={(e) => scrollToSection(e, "vision")}
                  className="hover:text-zinc-400 transition-colors">
                  Visi
                </a>
                <a
                  href="#movement"
                  onClick={(e) => scrollToSection(e, "movement")}
                  className="hover:text-zinc-400 transition-colors">
                  Gerakan
                </a>
                <a
                  href="#campus"
                  onClick={(e) => scrollToSection(e, "campus")}
                  className="hover:text-zinc-400 transition-colors underline decoration-zinc-700 underline-offset-8">
                  Kampus Malaka
                </a>
              </div>

              {/* Mobile Toggle Button */}
              <button
                className="md:hidden text-white p-2 z-10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* FIXED: Mobile Dropdown Menu yang benar-benar muncul saat di-klik */}
            <div
              className={`md:hidden absolute top-0 left-0 w-full bg-black border-b border-zinc-800 transition-all duration-500 ease-in-out z-[90] ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100 py-24"
                  : "-translate-y-full opacity-0"
              }`}>
              <div className="flex flex-col items-center gap-8 font-sans uppercase tracking-[0.4em] text-[10px] font-bold">
                <a
                  href="#vision"
                  onClick={(e) => scrollToSection(e, "vision")}
                  className="text-zinc-400 hover:text-white">
                  Visi
                </a>
                <a
                  href="#movement"
                  onClick={(e) => scrollToSection(e, "movement")}
                  className="text-zinc-400 hover:text-white">
                  Gerakan
                </a>
                <a
                  href="#campus"
                  onClick={(e) => scrollToSection(e, "campus")}
                  className="text-white underline decoration-zinc-700 underline-offset-8">
                  Kampus Malaka
                </a>
              </div>
            </div>
          </nav>

          {/* HERO SECTION */}
          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24 pb-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black -z-10"></div>

            <div className="text-center max-w-5xl relative z-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none px-2">
                  Masyarakat <br />{" "}
                  <span className="italic text-zinc-500 tracking-normal font-light">
                    Baru.
                  </span>
                </h1>
                <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-sans leading-relaxed mb-12 px-4">
                  Sebuah kolektif edukasi digital dan literasi media yang
                  berupaya meruntuhkan tembok ketidaktahuan. Kami sedang
                  membangun fondasi bagi masa depan intelektual bangsa.
                </p>

                {/* FIXED: Tambah mb-12 agar tidak menempel ke section bawah di mobile */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 font-sans tracking-widest text-[10px] uppercase font-bold mb-12">
                  <a
                    href="#campus"
                    onClick={(e) => scrollToSection(e, "campus")}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                    Menuju Kampus Malaka <Zap size={14} />
                  </a>
                  <a
                    href="#vision"
                    onClick={(e) => scrollToSection(e, "vision")}
                    className="w-full sm:w-auto px-10 py-5 border border-zinc-700 hover:border-white transition-all text-center">
                    Pelajari Visi
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="absolute -bottom-10 left-0 w-full opacity-[0.03] select-none pointer-events-none whitespace-nowrap text-[15vh] md:text-[20vh] font-bold uppercase tracking-tighter">
              Edukasi Literasi Logika Dialektika
            </div>
          </section>

          {/* VISION SECTION */}
          <section
            id="vision"
            className="py-32 bg-[#0F0F0F] px-6 border-y border-zinc-900">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}>
                <h2 className="text-xs tracking-[0.4em] text-zinc-500 uppercase mb-6 font-sans">
                  01. Latar Belakang
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Melawan Arus <br /> Misinformasi Digital.
                </h3>
                <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                  Di era di mana informasi bergerak lebih cepat dari logika,
                  Malaka Project hadir sebagai filter. Kami bukan sekadar media,
                  kami adalah gerakan literasi.
                </p>
              </motion.div>
              <div className="relative aspect-video rounded-lg overflow-hidden grayscale contrast-125">
                <Image
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070"
                  alt="Literasi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60"
                />
              </div>
            </div>
          </section>

          {/* KAMPUS MALAKA SECTION */}
          <section id="campus" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="bg-zinc-900/30 border border-zinc-800 p-8 md:p-20 rounded-3xl relative overflow-hidden text-center md:text-left">
                {/* FIXED: Logo muncul di mobile dengan ukuran lebih kecil */}
                <div className="absolute -top-10 -right-10 p-10 opacity-5 md:opacity-10 block">
                  <GraduationCap className="w-40 h-40 md:w-64 md:h-64" />
                </div>

                <div className="relative z-10 max-w-3xl">
                  <h2 className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase mb-4 md:mb-6 font-sans font-bold">
                    Sedang Berlangsung
                  </h2>

                  {/* FIXED: Ukuran teks adaptif (kecil di HP, besar di Desktop) */}
                  <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 md:mb-8 italic break-words leading-tight">
                    @menujukampusmalaka
                  </h3>

                  <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-sans font-light">
                    Kami tidak hanya bicara. Kami membangun institusi. Kampus
                    Malaka adalah ikhtiar nyata untuk menciptakan ruang belajar
                    yang inklusif, kritis, dan berdaya.
                  </p>

                  <button className="inline-flex items-center gap-4 text-white hover:gap-6 transition-all font-sans tracking-widest text-[10px] uppercase font-bold border-b border-white pb-2 mx-auto md:mx-0">
                    Pantau Progres Pembangunan <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* MOVEMENT / CONTACT SECTION - FIXED: Diperbaiki agar tidak kosong */}
          <section
            id="movement"
            className="py-32 px-6 bg-black border-t border-zinc-900">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Users className="mx-auto mb-6 text-zinc-700" size={40} />
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
                  Bergabung dalam Kolektif.
                </h2>
                <p className="text-zinc-500 font-sans tracking-wide">
                  Jalin kolaborasi intelektual untuk Masyarakat Baru.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans uppercase">
                {/* Email Box */}
                <a
                  href="mailto:collabwithmalaka@gmail.com"
                  className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-white transition-all duration-500 flex flex-col justify-between h-64">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <Mail size={20} />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-zinc-700 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] mb-2 text-zinc-500">
                      Business & Collaboration
                    </p>
                    <p className="text-lg font-bold tracking-tighter lowercase">
                      collabwithmalaka@gmail.com
                    </p>
                  </div>
                </a>

                {/* Instagram Box */}
                {/* Instagram Box */}
                <a
                  href="https://instagram.com/malakaproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-white transition-all duration-500 flex flex-col justify-between h-64">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      {/* SVG INSTAGRAM MURNI - ANTI ERROR */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-zinc-700 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] mb-2 text-zinc-500">
                      Instagram Community
                    </p>
                    <p className="text-xl font-bold tracking-tighter italic">
                      @malakaproject
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-20 border-t border-zinc-900 px-6 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <img
                src="/malaka-logo.png"
                alt="Malaka"
                className="h-8 invert opacity-50"
              />
              <p className="text-zinc-600 text-[10px] tracking-[0.2em] uppercase">
                Masyarakat Baru — {new Date().getFullYear()} — Built by Solutio
                Labs
              </p>
              <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-zinc-500">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <Link
                  href="/kopitio"
                  className="hover:text-white transition-colors">
                  Kopitio
                </Link>
                <Link
                  href="/athena"
                  className="hover:text-white transition-colors">
                  Athena
                </Link>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
