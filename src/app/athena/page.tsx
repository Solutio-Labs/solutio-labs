"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  Syringe,
  Droplets,
  Activity,
  MessageCircle,
  ShoppingBag,
  BookOpen,
  MapPin,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AthenaLandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek Loading & Deteksi Scroll Navbar
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 50);
    }, 1200); // Loading sedikit lebih lama untuk kesan elegan

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi navigasi smooth scroll tanpa mengotori URL
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-purple-600 selection:text-white relative">
      {/* LOADING OVERLAY ELEGAN */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="relative mb-8">
            {/* Pakai logo Athena di sini */}
            <img
              src="/athena-logo.png"
              alt="Athena Logo"
              className="h-20 w-auto object-contain"
            />
          </motion.div>
          <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-purple-900 to-fuchsia-600"
            />
          </div>
          <p className="mt-4 text-purple-900/60 font-medium tracking-[0.2em] text-xs uppercase">
            Secret of Goddess Beauty
          </p>
        </div>
      )}

      {/* KONTEN UTAMA */}
      {!isLoading && (
        <div
          className={`transition-all duration-1000 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* NAVBAR */}
          <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? "bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm" : "bg-transparent border-transparent py-5"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "home")}
                  className="cursor-pointer">
                  <img
                    src="/athena-logo.png"
                    alt="Klinik Athena"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600 uppercase tracking-wider">
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="hover:text-purple-700 transition-colors">
                  Tentang
                </a>
                <a
                  href="#treatments"
                  onClick={(e) => scrollToSection(e, "treatments")}
                  className="hover:text-purple-700 transition-colors">
                  Treatment
                </a>
                <a
                  href="#links"
                  onClick={(e) => scrollToSection(e, "links")}
                  className="hover:text-purple-700 transition-colors">
                  Layanan
                </a>
                <a
                  href="#links"
                  onClick={(e) => scrollToSection(e, "links")}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-700/30">
                  Konsultasi
                </a>
              </div>

              <button
                className="md:hidden text-slate-800"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
              <div className="flex flex-col items-center gap-6 font-medium text-slate-600 uppercase tracking-widest text-sm">
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="hover:text-purple-700">
                  Tentang Kami
                </a>
                <a
                  href="#treatments"
                  onClick={(e) => scrollToSection(e, "treatments")}
                  className="hover:text-purple-700">
                  Treatment Khusus
                </a>
                <a
                  href="#links"
                  onClick={(e) => scrollToSection(e, "links")}
                  className="px-8 py-3 bg-slate-900 text-white rounded-full w-4/5 text-center">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </nav>

          {/* HERO SECTION */}
          <section
            id="home"
            className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-white -z-10"></div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 font-semibold text-xs rounded-full mb-6 uppercase tracking-widest">
                  <Sparkles size={14} /> Established 2014
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                  Secret of <br />{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-fuchsia-600">
                    Goddess Beauty.
                  </span>
                </h1>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg">
                  Klinik kecantikan modern dan tepercaya oleh{" "}
                  <strong>dr. Richard Lee</strong>. Kami menghadirkan standar
                  estetika tertinggi untuk pancaran kecantikan sejati Anda.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#links"
                    onClick={(e) => scrollToSection(e, "links")}
                    className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-purple-700 transition-all shadow-xl shadow-slate-900/20">
                    Konsultasi Online
                  </a>
                  <a
                    href="#treatments"
                    onClick={(e) => scrollToSection(e, "treatments")}
                    className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-semibold rounded-full hover:border-purple-600 hover:text-purple-700 transition-all">
                    Lihat Treatment
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative">
                <div className="relative h-[500px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                    alt="Athena Beauty Clinic"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute bottom-10 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">
                      Sertifikasi
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      BPOM, Halal & MUI
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ABOUT / FOUNDER SECTION */}
          <section id="about" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <h2 className="text-sm font-bold text-purple-600 tracking-widest uppercase mb-3">
                  Tentang Athena
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                  Expert in Aesthetic & Beauty
                </h3>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16">
                  Dipimpin langsung oleh <strong>@dr.richard_lee</strong>,
                  Klinik Kecantikan Athena Official telah menjadi pionir sejak
                  2014. Kami menjamin keamanan setiap produk dan layanan dengan
                  sertifikat resmi dari BPOM dan jaminan Halal MUI.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "2014", label: "Tahun Berdiri" },
                  { value: "BPOM", label: "Sertifikasi Resmi" },
                  { value: "MUI", label: "Halal Terjamin" },
                  { value: "100%", label: "Skincare Aman" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 border border-slate-100 rounded-3xl bg-slate-50">
                    <h4 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-fuchsia-600 mb-2">
                      {stat.value}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* TREATMENTS SECTION */}
          <section
            id="treatments"
            className="py-24 bg-slate-900 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/30 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-900/20 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-sm font-bold text-fuchsia-400 tracking-widest uppercase mb-3">
                    Spesialisasi Kami
                  </h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-white">
                    Advanced Treatments
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Syringe size={32} />,
                    title: "Filler & Botox",
                    desc: "Perawatan anti-aging profesional untuk mengembalikan volume dan menghilangkan kerutan wajah secara presisi.",
                    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
                  },
                  {
                    icon: <Activity size={32} />,
                    title: "Laser Specialist",
                    desc: "Teknologi laser medis terkini untuk mengatasi flek, bekas jerawat, dan meremajakan tekstur kulit secara mendalam.",
                    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
                  },
                  {
                    icon: <Droplets size={32} />,
                    title: "Skincare & Lifting",
                    desc: "Rangkaian perawatan lifting wajah tanpa operasi dan produk skincare eksklusif racikan dokter tersertifikasi.",
                    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
                  },
                ].map((treatment, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="group rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden hover:border-fuchsia-500/50 transition-colors">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={treatment.img}
                        alt={treatment.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors"></div>
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                        {treatment.icon}
                      </div>
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-white mb-3">
                        {treatment.title}
                      </h4>
                      <p className="text-slate-400 leading-relaxed">
                        {treatment.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* INTEGRASI LINKTREE (QUICK LINKS) */}
          <section id="links" className="py-24 bg-purple-50 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <img
                  src="/athena-logo.png"
                  alt="Athena Logo"
                  className="h-16 mx-auto mb-6 object-contain"
                />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Pusat Layanan Digital Athena
                </h3>
                <p className="text-slate-500">
                  Pilih layanan yang Anda butuhkan di bawah ini.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <BookOpen />,
                    title: "Athena Menu Book Digital",
                    link: "#",
                  },
                  {
                    icon: <MessageCircle />,
                    title: "Order by WhatsApp Official Athena",
                    link: "#",
                  },
                  {
                    icon: <Activity />,
                    title: "Konsultasi Online Bersama Dokter",
                    link: "#",
                  },
                  {
                    icon: <ShoppingBag />,
                    title: "Athena Official E-Commerce",
                    link: "#",
                  },
                  {
                    icon: <Droplets />,
                    title: "Our Products & Skincare",
                    link: "#",
                  },
                  { icon: <MapPin />, title: "Lokasi Our Clinics", link: "#" },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
                    <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mr-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="flex-1 font-bold text-slate-700 group-hover:text-purple-900">
                      {item.title}
                    </span>
                    <span className="text-slate-300 group-hover:text-purple-600">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-white py-12 border-t border-slate-200 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="/athena-logo.png"
                  alt="Logo"
                  className="h-8 grayscale opacity-50"
                />
                <p className="text-sm text-slate-400 font-medium tracking-wider">
                  EST. 2014
                </p>
              </div>
              <p className="text-sm text-slate-500 text-center">
                © {new Date().getFullYear()} Klinik Kecantikan Athena Official.
                All rights reserved. <br className="md:hidden" />
                <span className="hidden md:inline"> | </span>
                Powered by{" "}
                <Link href="/" className="text-purple-600 hover:underline">
                  Solutio Labs
                </Link>
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
