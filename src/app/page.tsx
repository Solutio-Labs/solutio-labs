"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Rocket,
  ChevronRight,
  Menu,
  X,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SolutioLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // FIXED: Fungsi pencegah hash di URL untuk Solutio
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-4" : "bg-transparent border-transparent py-6"}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div
            className="text-2xl font-bold tracking-tighter bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Solutio.
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            {/* FIXED: Menggunakan onClick pengganti href */}
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="cursor-pointer hover:text-white transition-colors">
              Layanan
            </a>
            <a
              href="#portfolio"
              onClick={(e) => scrollToSection(e, "portfolio")}
              className="cursor-pointer hover:text-white transition-colors">
              Portofolio
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="cursor-pointer hover:text-white transition-colors">
              Kontak
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="cursor-pointer px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all hover:scale-105 inline-block">
              Mulai Diskusi
            </a>
          </div>

          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="text-slate-300 hover:text-white">
              Layanan
            </a>
            <a
              href="#portfolio"
              onClick={(e) => scrollToSection(e, "portfolio")}
              className="text-slate-300 hover:text-white">
              Portofolio
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-slate-300 hover:text-white">
              Kontak
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="px-5 py-3 text-center w-full bg-blue-600 text-white rounded-lg font-medium">
              Mulai Diskusi
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Digitalisasi Modern <br className="hidden md:block" /> untuk Bisnis
            Anda.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Kami membantu UMKM dan perusahaan bertransformasi ke era digital
            melalui pembuatan sistem, landing page, dan aplikasi bertenaga
            teknologi terkini.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* FIXED: Mencegah URL berubah menjadi /#portfolio */}
            <a
              href="#portfolio"
              onClick={(e) => scrollToSection(e, "portfolio")}
              className="cursor-pointer px-8 py-4 w-full sm:w-auto bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-all flex items-center justify-center group">
              Lihat Karya Kami
              <ChevronRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gambar Ilustrasi Hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-32">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-video max-w-5xl mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
            alt="Tim Solutio sedang coding"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent"></div>
        </div>
      </motion.div>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-slate-900 border-y border-slate-800 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Layanan Kami
            </h2>
            <p className="text-slate-400">
              Solusi teknologi end-to-end yang disesuaikan dengan kebutuhan
              Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 size={32} className="text-blue-400" />,
                title: "Web Development",
                desc: "Pembuatan website company profile, landing page, hingga sistem web kompleks yang responsif.",
              },
              {
                icon: <Smartphone size={32} className="text-emerald-400" />,
                title: "App Development",
                desc: "Pengembangan aplikasi modern yang cepat, aman, dan mudah digunakan oleh pelanggan Anda.",
              },
              {
                icon: <Rocket size={32} className="text-purple-400" />,
                title: "Sistem Integrasi",
                desc: "Integrasi backend, database, dan API untuk mengotomatisasi alur kerja bisnis harian.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 scroll-mt-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Portofolio Klien
              </h2>
              <p className="text-slate-400">
                Beberapa bisnis dan gerakan yang telah bertransformasi bersama
                kami.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Card Portofolio Kopitio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}>
              <Link
                href="/kopitio"
                className="group block w-full h-full cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                    alt="Kopitio Landing Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  Kopitio
                </h3>
                <p className="text-slate-400 mb-4">
                  Digitalisasi katalog menu dan landing page interaktif untuk
                  coffee shop modern.
                </p>
                <span className="inline-flex items-center text-blue-400 font-medium transition-colors">
                  Kunjungi Website{" "}
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </motion.div>

            {/* 2. Card Portofolio Athena */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <Link
                href="/athena"
                className="group block w-full h-full cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                    alt="Athena Landing Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  Klinik Athena Official
                </h3>
                <p className="text-slate-400 mb-4">
                  Landing page premium dan elegan dengan integrasi layanan
                  digital untuk klinik kecantikan modern.
                </p>
                <span className="inline-flex items-center text-purple-400 font-medium transition-colors">
                  Kunjungi Website{" "}
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </motion.div>

            {/* 3. Card Portofolio Malaka Project (Baru) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              <Link
                href="/malaka"
                className="group block w-full h-full cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-[#0F0F0F] border border-zinc-800 shadow-2xl">
                  {/* Gambar untuk Malaka Project menggunakan nuansa monokrom/intelektual */}
                  <Image
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070"
                    alt="Malaka Project Landing Page"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay Logo Malaka di Tengah Gambar saat Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                    <img
                      src="/malaka-logo.png"
                      alt="Malaka"
                      className="h-16 w-auto invert"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-zinc-100 transition-colors">
                  Malaka Project
                </h3>
                <p className="text-slate-400 mb-4 font-serif italic">
                  Portal gerakan edukasi digital dan media literasi menuju
                  pembentukan Masyarakat Baru.
                </p>
                <span className="inline-flex items-center text-white font-medium transition-colors underline decoration-zinc-700 underline-offset-4 group-hover:decoration-white">
                  Buka Portal Edukasi{" "}
                  <ChevronRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-slate-900 border-t border-slate-800 px-6 scroll-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mari Bangun Sesuatu yang Hebat Bersama.
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Apakah Anda memiliki ide proyek atau butuh solusi digitalisasi
                untuk UMKM Anda? Tim kami siap mendengarkan dan memberikan
                solusi terbaik.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <Mail className="mr-4 text-blue-400" size={20} />
                  <span>development@solutio.my.id</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="mr-4 text-emerald-400" size={20} />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl">
              <form className="flex flex-col space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Pesan atau Ide Proyek
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ceritakan sedikit tentang kebutuhan Anda..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                </div>
                <button
                  type="button"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mt-2">
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Solutio. Hak Cipta Dilindungi.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
