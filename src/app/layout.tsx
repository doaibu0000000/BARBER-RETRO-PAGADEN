import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "Barber Retro Pagaden";
const SITE_TAGLINE = "Barbershop di Pagaden, Subang — buka setiap hari 10.00–21.00";
const SITE_DESC =
  "Barbershop di Pagaden, Kab. Subang. Rating 4,8 di Google Maps. Potong rambut pria, cukur jenggot, cuci & styling. Males ngantri? Booking dulu lewat WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://barber-retro-pagaden.vercel.app"),
  title: {
    default: `${SITE_NAME} — Barbershop Subang | Buka Setiap Hari`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  keywords: [
    "barbershop pagaden",
    "barbershop subang",
    "barber retro pagaden",
    "potong rambut pria subang",
    "barbershop dekat puskesmas pagaden",
    "cukur rambut pagaden",
    "barbershop 24 jam subang",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  category: "Barbershop",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    title: `${SITE_NAME} — Lebih dari sekadar potong rambut`,
    description: SITE_TAGLINE + ". " + SITE_DESC,
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/photos/pagaden-storefront.jpg",
        width: 1600,
        height: 899,
        alt: "Interior Barber Retro Pagaden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Barbershop Subang`,
    description: SITE_TAGLINE,
    images: ["/photos/pagaden-storefront.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#17120d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  name: SITE_NAME,
  description: SITE_DESC,
  image: "/photos/pagaden-storefront.jpg",
  telephone: "+6281214128113",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Depan Puskesmas, Jl. Raya Kamarung, Kamarung",
    addressLocality: "Kec. Pagaden",
    addressRegion: "Jawa Barat",
    postalCode: "41252",
    addressCountry: "ID",
  },
  geo: { "@type": "GeoCoordinates", latitude: -6.4607597, longitude: 107.8106673 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://instagram.com/barber.retro.barbershop",
    "https://www.tiktok.com/@barber.retro.barbershop",
    "https://www.facebook.com/Barberretrobarbershop",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bebas.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
