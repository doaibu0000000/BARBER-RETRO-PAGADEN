import type { NextConfig } from "next";

/**
 * BUILD_TARGET=static  → static export (untuk GitHub Pages)
 * default              → standard Next.js (untuk Vercel)
 */
const isStaticExport = process.env.BUILD_TARGET === "static";

const nextConfig: NextConfig = {
  // Sembunyikan indikator development (logo "N" di pojok kiri bawah)
  devIndicators: false,

  // Izinkan aset dev (/_next/*) dimuat dari domain preview sandbox,
  // supaya chunk JS/HMR tidak gagal saat dibuka lewat panel preview.
  allowedDevOrigins: ["*.space-z.ai", "*.elb.amazonaws.com"],

  // Static export hanya dipakai saat build untuk GitHub Pages.
  // Vercel tetap memakai mode standard agar optimasi bawaan Next.js jalan.
  ...(isStaticExport ? { output: "export" as const, trailingSlash: true } : {}),

  // BasePath untuk GitHub Pages (https://user.github.io/repo/)
  // Di Vercel biarkan kosong.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,

  // Foto sudah dioptimasi manual (sharp) sehingga tetap cepat
  // tanpa image optimization server → kompatibel static export.
  images: { unoptimized: true },
};

export default nextConfig;
