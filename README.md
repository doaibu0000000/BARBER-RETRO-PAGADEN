# Barber Retro Pagaden — Landing Page

Landing page resmi untuk **Barber Retro Pagaden**, barbershop di Pagaden, Kabupaten Subang, Jawa Barat. Dibuat dengan pendekatan **mobile-first**, ringan, dan berorientasi konversi (booking via WhatsApp).

> Semua foto di halaman ini adalah **foto asli dari Google Maps** — bukan gambar hasil AI.

## ✨ Fitur

- Mobile-first & responsif (kecil → desktop besar), tanpa horizontal scroll
- CTA WhatsApp menempel di bawah layar pada perangkat mobile
- Status **buka/tutup real-time** otomatis sesuai jam WIB (10.00–21.00)
- Peta Google Maps tertanam + tombol petunjuk arah
- SEO lengkap: metadata, Open Graph, Twitter Card, dan **JSON-LD schema Barbershop**
- Animasi halus & hormat pada `prefers-reduced-motion`
- Foto terkompresi (sharp) — total < 400 KB
- Indikator development Next.js dinonaktifkan (`devIndicators: false`)

## 🧰 Teknologi

| Bagian | Teknologi |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) + TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Komponen | shadcn/ui (New York), Lucide Icons |
| Animasi | Framer Motion |
| Font | Bebas Neue (display) + Inter (body) via `next/font` |

## 🚀 Cara Install

```bash
# clone repo
git clone https://github.com/USERNAME/barber-retro-pagaden.git
cd barber-retro-pagaden

# install dependency (pakai bun, npm, atau pnpm)
bun install
# atau: npm install
```

## 💻 Menjalankan Development

```bash
bun run dev
# atau: npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 📦 Build

```bash
# Build production standard (untuk Vercel / self-host)
bun run build

# Build static export (untuk GitHub Pages)
bun run build:static
# hasil ada di folder ./out
```

Menjalankan hasil build:

```bash
bun run start   # npm run start
```

## ☁️ Deployment

### Vercel (disarankan)

1. Push repository ini ke GitHub.
2. Impor project di [vercel.com/new](https://vercel.com/new).
3. Klik **Deploy** — tanpa konfigurasi tambahan. Selesai.

Tidak ada environment variable yang wajib diisi. Build menggunakan `next build` standar.

### GitHub Pages (untuk preview)

Repository ini sudah termasuk workflow GitHub Actions (`.github/workflows/pages.yml`) yang akan otomatis build static export dan deploy ke GitHub Pages setiap ada push ke `main`.

Cara aktifkan:

1. Buka **Settings → Pages** di repository GitHub.
2. Pada *Build and deployment*, pilih Source: **GitHub Actions**.
3. Push ke `main` (atau jalankan workflow manual via *Run workflow*).

BasePath untuk GitHub Pages (`https://user.github.io/nama-repo/`) diisi otomatis oleh workflow, jadi asset tidak akan rusak. Deployment Vercel **tidak terpengaruh** karena mode static hanya aktif saat `BUILD_TARGET=static`.

## 🔧 Environment Variable

Tidak ada environment variable yang dibutuhkan untuk menjalankan project.

| Variabel | Kapan dipakai | Default |
| --- | --- | --- |
| `BUILD_TARGET` | Hanya saat build static (`bun run build:static`) | — |
| `NEXT_PUBLIC_BASE_PATH` | Hanya untuk GitHub Pages | — |

## 📁 Struktur Project

```
src/
├── app/
│   ├── layout.tsx          # Font, metadata SEO, JSON-LD
│   ├── page.tsx            # Entry — merender landing page
│   └── globals.css         # Tema warna & style dasar
├── components/landing/
│   ├── landing.tsx         # Semua section (hero, layanan, galeri, lokasi, ...)
│   └── reveal.tsx          # Wrapper animasi scroll-reveal
└── lib/
    └── business.ts         # Data bisnis (kontak, jam, link, foto)
public/photos/              # Foto asli dari Google Maps
```

## ✏️ Mengubah Konten

Semua data bisnis (nomor WhatsApp, alamat, jam buka, link sosmed) ada di **satu file**:
`src/lib/business.ts`. Ubah di sana, seluruh halaman ikut berubah.

## 📄 Info Bisnis

- **Barber Retro Pagaden** — Depan Puskesmas, Jl. Raya Kamarung, Kamarung, Kec. Pagaden, Kab. Subang, Jawa Barat 41252
- Buka setiap hari 10.00–21.00 WIB
- WhatsApp: 0812-1412-8113
- Instagram / TikTok: [@barber.retro.barbershop](https://instagram.com/barber.retro.barbershop)
