"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Baby,
  Brush,
  CalendarCheck,
  ChevronDown,
  Clock,
  Droplets,
  Facebook,
  Instagram,
  MapPin,
  Navigation,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { BUSINESS, LINKS, PHOTOS } from "@/lib/business";
import { Reveal } from "./reveal";

/* ──────────────────────────────────────────────────────────── */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.02c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.31-2.83v-3.5a6.37 6.37 0 1 0 5.76 6.33V8.69a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.12z" />
    </svg>
  );
}

/** Status buka/tutup berdasarkan jam WIB. Null sampai client mount (hindari mismatch). */
function useOpenStatus() {
  const [status, setStatus] = useState<null | boolean>(null);
  useEffect(() => {
    const compute = () => {
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const [h, m] = fmt.format(new Date()).split(":").map(Number);
      const minutes = h * 60 + m;
      return minutes >= BUSINESS.openHour * 60 && minutes < BUSINESS.closeHour * 60;
    };
    const t = setInterval(() => setStatus(compute()), 60_000);
    const raf = requestAnimationFrame(() => setStatus(compute()));
    return () => {
      clearInterval(t);
      cancelAnimationFrame(raf);
    };
  }, []);
  return status;
}

/* ──────────────────────────────────────────────────────────── */

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#atas" className="flex items-center gap-2.5" aria-label={`${BUSINESS.name} — kembali ke atas`}>
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#17120d" />
        <rect x="25" y="12" width="14" height="40" rx="7" fill="#f3ead9" />
        <path d="M25 18 L39 12 L39 20 L25 26 Z" fill="#d9971e" />
        <path d="M25 34 L39 28 L39 36 L25 42 Z" fill="#d9971e" />
        <path d="M25 50 L39 44 L39 49 a7 7 0 0 1 -14 0 Z" fill="#d9971e" />
        <circle cx="32" cy="57" r="3.4" fill="#d9971e" />
        <circle cx="32" cy="7" r="3.4" fill="#d9971e" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display tracking-wider text-cream ${compact ? "text-xl" : "text-2xl"}`}>
          BARBER RETRO
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-soft">
          Pagaden · Subang
        </span>
      </span>
    </a>
  );
}

/* ──────────────────────────────────────────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cream/10 bg-night/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo compact />
        <nav className="hidden items-center gap-7 text-sm font-medium text-cream/80 md:flex" aria-label="Navigasi utama">
          <a href="#layanan" className="transition-colors hover:text-gold-soft">Layanan</a>
          <a href="#galeri" className="transition-colors hover:text-gold-soft">Galeri</a>
          <a href="#lokasi" className="transition-colors hover:text-gold-soft">Lokasi</a>
        </nav>
        <a
          href={LINKS.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-gold px-4 text-sm font-bold text-night transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20 sm:px-5"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Booking
        </a>
      </div>
    </header>
  );
}

/* ──────────────────────────────────────────────────────────── */

function Hero() {
  const isOpen = useOpenStatus();
  return (
    <section id="atas" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-night">
      {/* Foto asli interior Barber Retro Pagaden (Google Maps) */}
      <Image
        src="/photos/pagaden-storefront.jpg"
        alt="Interior Barber Retro Pagaden dengan cermin kayu dan kursi barber"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/45 to-night" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-transparent to-night/40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-36 sm:px-6 sm:pb-28">
        <div className="animate-hero max-w-2xl">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            {/* rating asli dari Google Maps */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-night/60 px-3.5 py-1.5 text-sm font-semibold text-cream backdrop-blur">
              <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
              {BUSINESS.rating} di {BUSINESS.ratingSource}
            </span>
            {/* status buka real-time (WIB) */}
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-night/60 px-3.5 py-1.5 text-sm font-medium text-cream/90 backdrop-blur">
              <span className="relative flex h-2 w-2">
                {isOpen === true && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    isOpen === null ? "bg-cream/40" : isOpen ? "bg-emerald-400" : "bg-red-400"
                  }`}
                />
              </span>
              {isOpen === null ? BUSINESS.hours : isOpen ? "Buka sekarang · sampai 21.00" : "Tutup · buka 10.00"}
            </span>
          </div>

          <h1 className="font-display text-6xl leading-[0.95] tracking-wide text-cream sm:text-7xl lg:text-8xl">
            LEBIH DARI SEKADAR
            <span className="block text-gold-soft">POTONG RAMBUT.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/85 sm:text-lg">
            Barbershop anak Pagaden buat kamu yang mau tampil rapi —
            santai, cepat, dan dijamin nyaman.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={LINKS.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-bold text-night shadow-xl shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Booking via WhatsApp
            </a>
            <a
              href="#lokasi"
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-cream/25 bg-night/40 px-8 text-base font-semibold text-cream backdrop-blur transition-all hover:border-gold/60 hover:text-gold-soft"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Lihat Lokasi
            </a>
          </div>
        </div>
      </div>

      <a
        href="#layanan"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cream/50 transition-colors hover:text-gold-soft sm:block"
        aria-label="Gulir ke bagian layanan"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function TrustStrip() {
  const items = [
    { icon: Star, title: "Rating 4,8", sub: "di Google Maps" },
    { icon: Clock, title: "10.00–21.00", sub: "buka setiap hari" },
    { icon: Scissors, title: "Kapster expert", sub: "konsultasi dulu, baru cukur" },
    { icon: CalendarCheck, title: "Tanpa antre", sub: "tinggal booking via WA" },
  ];
  return (
    <section className="border-y border-cream/10 bg-coal" aria-label="Keunggulan singkat">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <item.icon className="h-5 w-5 text-gold-soft" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg tracking-wider text-cream">{item.title}</span>
              <span className="block text-xs text-cream/60 sm:text-sm">{item.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function Services() {
  const services = [
    {
      icon: Scissors,
      name: "Potong Rambut Pria",
      desc: "Klasik, retro, modern, atau Korean style — konsult dulu biar pas.",
    },
    {
      icon: Brush,
      name: "Cukur & Rapikan Jenggot",
      desc: "Dibersihin rapi sesuai bentuk wajah kamu.",
    },
    {
      icon: Droplets,
      name: "Cuci & Styling",
      desc: "Segar lagi sebelum keluar rumah.",
    },
    {
      icon: Baby,
      name: "Anak-anak Juga Bisa",
      desc: "Sabar dan ramah, anak nyaman duduknya.",
    },
  ];

  return (
    <section id="layanan" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Layanan kami</p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-night sm:text-5xl">
            BUKAN CUMA CUKUR
          </h2>
          <p className="mt-3 text-foreground/70">
            Datang, duduk, cerita apa mau. Sisanya biar kapster kami yang urus.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold group-hover:text-night">
                  <s.icon className="h-6 w-6 text-gold transition-colors group-hover:text-night" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl tracking-wider text-night">{s.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-foreground/60">
            Mau tanya harga dulu?{" "}
            <a
              href={LINKS.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-soft"
            >
              Chat kami, bebas.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function Gallery() {
  return (
    <section id="galeri" className="bg-night py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-soft">Galeri</p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-cream sm:text-5xl">
            LIHAT TEMPATNYA DULU
          </h2>
          <p className="mt-3 text-cream/65">Semua foto asli, langsung dari Google Maps.</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {PHOTOS.map((photo, i) => {
            const isFirst = i === 0;
            const isLast = i === PHOTOS.length - 1;
            const span = isLast ? "col-span-2 lg:col-span-4" : isFirst ? "col-span-2" : "";
            return (
              <Reveal key={photo.src} delay={i * 0.07} className={span}>
                <figure className="group relative overflow-hidden rounded-2xl border border-cream/10">
                  <div className={`relative ${isLast ? "aspect-[16/9] sm:aspect-[21/9]" : isFirst ? "aspect-[2/1] sm:aspect-[16/9]" : "aspect-[4/3]"}`}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={span ? "(max-width: 1024px) 100vw, 1024px" : "(max-width: 1024px) 50vw, 320px"}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-80" />
                  </div>
                  <figcaption className="absolute bottom-0 left-0 right-0 p-3.5 text-xs font-medium text-cream/90 sm:text-sm">
                    {photo.caption}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function WhyUs() {
  const points = [
    {
      icon: Sparkles,
      title: "DIKONSULT DULU, BARU DIKERJAIN",
      desc: "Kapster kami bakal ngobrol dulu soal model yang cocok buat kamu. Nggak asal potong.",
    },
    {
      icon: Clock,
      title: "NYAMAN, BERSIH, ADEM",
      desc: "Ruangan ber-AC, kursi empuk, nuansa retro yang bikin betah. Cocok buat rebahan singkat dari rutinitas.",
    },
    {
      icon: CalendarCheck,
      title: "MALES NGANTRI? BOOKING AJA",
      desc: "Chat WhatsApp, amankan jadwal, datang langsung dilayani. Seperti kata pelanggan kami: Recommended!",
    },
  ];

  return (
    <section className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Kenapa Barber Retro</p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-night sm:text-5xl">
            SEDIKIT ALASAN
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-paper p-7">
                <p className="font-display text-5xl text-gold/30">0{i + 1}</p>
                <h3 className="mt-2 font-display text-xl tracking-wider text-night">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function Location() {
  const isOpen = useOpenStatus();
  return (
    <section id="lokasi" className="bg-night py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-soft">Jam & Lokasi</p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-cream sm:text-5xl">
            MAMPIR, GAMPANG KETEMU
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl border border-cream/10 bg-coal p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15">
                  <Clock className="h-5 w-5 text-gold-soft" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl tracking-wider text-cream">JAM BUKA</h3>
                <p className="mt-1 text-cream/75">{BUSINESS.hours}</p>
                {isOpen !== null && (
                  <p className={`mt-2 inline-flex items-center gap-2 text-sm font-semibold ${isOpen ? "text-emerald-400" : "text-red-400"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-emerald-400" : "bg-red-400"}`} />
                    {isOpen ? "Lagi buka sekarang" : "Lagi tutup — besok buka lagi jam 10.00"}
                  </p>
                )}
              </div>

              <div className="rounded-2xl border border-cream/10 bg-coal p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15">
                  <MapPin className="h-5 w-5 text-gold-soft" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl tracking-wider text-cream">ALAMAT</h3>
                <p className="mt-1 leading-relaxed text-cream/75">
                  Depan Puskesmas, Jl. Raya Kamarung,
                  <br />
                  Kamarung, Kec. Pagaden, Kab. Subang,
                  <br />
                  Jawa Barat 41252
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <a
                    href={LINKS.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-night transition-colors hover:bg-gold-soft"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Petunjuk Arah
                  </a>
                  <a
                    href={LINKS.mapsPlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-cream/20 px-5 text-sm font-semibold text-cream transition-colors hover:border-gold/60 hover:text-gold-soft"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>

              <a
                href="tel:+6281214128113"
                className="flex items-center gap-3 rounded-2xl border border-cream/10 bg-coal p-5 transition-colors hover:border-gold/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15">
                  <Phone className="h-5 w-5 text-gold-soft" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-cream/50">Telepon / WhatsApp</span>
                  <span className="font-semibold text-cream">{BUSINESS.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </Reveal>

          {/* peta */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-cream/10 lg:min-h-full">
              <iframe
                src={LINKS.mapsEmbed}
                title={`Peta lokasi ${BUSINESS.name}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full border-0 lg:min-h-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gold py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full border-[24px] border-night" />
        <div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full border-[24px] border-night" />
      </div>
      <Reveal className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-5xl leading-none tracking-wide text-night sm:text-6xl">
          SAMPAI KETEMU DI PAGADEN!
        </h2>
        <p className="mx-auto mt-4 max-w-md font-medium text-night/75">
          Datang langsung boleh, booking dulu lebih enak — langsung dilayani tanpa ngantri.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={LINKS.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-night px-8 font-bold text-cream shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Booking Sekarang
          </a>
          <a
            href="#lokasi"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border-2 border-night/30 px-8 font-semibold text-night transition-colors hover:border-night hover:bg-night/5"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Lihat Lokasi
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-night pb-28 pt-14 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Barbershop yang dikelola anak lokal Subang. Lebih dari sekadar potong rambut —
              tempat rapi-rapi sambil santai.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={BUSINESS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Barber Retro Barbershop"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <Instagram className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Barber Retro Barbershop"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Barber Retro Barbershop"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <Facebook className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
            <div>
              <h3 className="font-display text-base tracking-widest text-cream">KUNJUNGI</h3>
              <address className="mt-4 not-italic leading-relaxed text-cream/60">
                Depan Puskesmas, Jl. Raya Kamarung,
                <br />
                Kamarung, Pagaden, Subang
                <br />
                Jawa Barat 41252
              </address>
              <p className="mt-3 text-cream/60">{BUSINESS.hours}</p>
            </div>
            <div>
              <h3 className="font-display text-base tracking-widest text-cream">HUBUNGI</h3>
              <ul className="mt-4 space-y-2.5 text-cream/60">
                <li>
                  <a href="tel:+6281214128113" className="transition-colors hover:text-gold-soft">
                    {BUSINESS.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={LINKS.wa} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-soft">
                    WhatsApp Booking
                  </a>
                </li>
                <li>
                  <a href={BUSINESS.bookingForm} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-soft">
                    Form Booking Online
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Dikelola anak lokal Subang.</p>
          <p>Foto di halaman ini asli, bersumber dari Google Maps.</p>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────────────────── */

/** CTA menempel di bawah layar — hanya mobile. */
function MobileBookingBar() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-cream/10 bg-night/95 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2.5 px-4 py-3">
        <a
          href={LINKS.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold text-sm font-bold text-night"
        >
          <WhatsAppIcon className="h-4.5 w-4.5" />
          Booking via WhatsApp
        </a>
        <a
          href={LINKS.directions}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Petunjuk arah ke Barber Retro Pagaden"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/20 text-cream"
        >
          <Navigation className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */

export function Landing() {
  return (
    <div className="min-h-screen bg-night">
      <a
        href="#layanan"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:font-bold focus:text-night"
      >
        Lewati ke konten
      </a>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Gallery />
        <WhyUs />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  );
}
