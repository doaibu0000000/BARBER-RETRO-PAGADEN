/**
 * Satu sumber kebenaran untuk semua info bisnis.
 * Data diverifikasi dari Google Maps (Jan 2026) & kanal resmi brand.
 */
export const BUSINESS = {
  name: "Barber Retro Pagaden",
  shortName: "Barber Retro",
  area: "Pagaden, Subang",
  rating: "4,8",
  ratingSource: "Google Maps",
  phoneDisplay: "0812-1412-8113",
  phoneIntl: "+62 812-1412-8113",
  waNumber: "6281214128113",
  waText:
    "Halo Barber Retro Pagaden! Mau booking potong rambut, hari ini masih bisa jam berapa ya?",
  hours: "Setiap hari, 10.00–21.00",
  openHour: 10,
  closeHour: 21,
  address:
    "Depan Puskesmas, Jl. Raya Kamarung, Kamarung, Kec. Pagaden, Kabupaten Subang, Jawa Barat 41252",
  addressShort: "Depan Puskesmas Pagaden",
  lat: -6.4607597,
  lng: 107.8106673,
  socials: {
    instagram: "https://instagram.com/barber.retro.barbershop",
    tiktok: "https://www.tiktok.com/@barber.retro.barbershop",
    facebook: "https://www.facebook.com/Barberretrobarbershop",
  },
  bookingForm: "https://whatsform.com/k4ymue",
} as const;

export const LINKS = {
  wa: `https://wa.me/${BUSINESS.waNumber}?text=${encodeURIComponent(BUSINESS.waText)}`,
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=-6.4607597,107.8106673",
  mapsPlace:
    "https://www.google.com/maps/search/?api=1&query=-6.4607597%2C107.8106673",
  mapsEmbed:
    "https://www.google.com/maps?q=-6.4607597,107.8106673&hl=id&z=17&output=embed",
} as const;

/** Foto asli milik listing Google Maps Barber Retro (bukan AI). */
export const PHOTOS = [
  {
    src: "/photos/pagaden-storefront.jpg",
    alt: "Interior Barber Retro Pagaden — cermin kayu dan kursi barber",
    caption: "Ruangan kami di Pagaden",
  },
  {
    src: "/photos/gm-1.jpg",
    alt: "Kapster Barber Retro sedang melayani pelanggan",
    caption: "Kapster kami siap melayani",
  },
  {
    src: "/photos/gm-2.jpg",
    alt: "Suasana sibuk Barber Retro saat melayani pelanggan",
    caption: "Ramai tapi tetap rapi",
  },
  {
    src: "/photos/gm-4.jpg",
    alt: "Interior Barber Retro yang modern dan terang",
    caption: "Tempatnya nyaman",
  },
] as const;
