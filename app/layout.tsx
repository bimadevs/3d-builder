import type React from "react"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "3D Model Generator - Buat Model 3D dari Gambar Online",
    template: "%s | 3D Model Generator"
  },
  description: "Buat model 3D profesional dari gambar 2D dengan teknologi AI. Upload foto dan dapatkan model 3D berkualitas tinggi secara gratis. Cocok untuk desain produk, prototipe, dan proyek 3D.",
  keywords: [
    "3D model generator",
    "buat model 3D",
    "gambar ke 3D",
    "AI 3D modeling",
    "3D dari gambar",
    "online 3D generator",
    "convert image to 3D",
    "3D printing model",
    "3D design tool",
    "visualisasi 3D"
  ],
  authors: [{ name: "3D Model Generator" }],
  creator: "3D Model Generator",
  publisher: "3D Model Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataVision: {
    title: "3D Model Generator",
    description: "Platform terdepan untuk membuat model 3D dari gambar menggunakan teknologi AI terdepan",
    url: "/",
    siteName: "3D Model Generator",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "3D Model Generator - Buat Model 3D dari Gambar"
      }
    ],
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Model Generator - Buat Model 3D dari Gambar Online",
    description: "Buat model 3D profesional dari gambar 2D dengan teknologi AI. Upload foto dan dapatkan model 3D berkualitas tinggi secara gratis.",
    creator: "@3dgenerator",
    images: ["/placeholder-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  category: "technology",
  classification: "AI, 3D Modeling, Image Processing, Web Application",
  referrer: "origin-when-cross-origin",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "3D Model Generator",
    "application-name": "3D Model Generator",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "3D Model Generator",
    "description": "Platform AI untuk membuat model 3D dari gambar 2D",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IDR"
    },
    "creator": {
      "@type": "Organization",
      "name": "3D Model Generator"
    },
    "featureList": [
      "Upload gambar 2D",
      "Generate model 3D otomatis",
      "Download model 3D",
      "Preview 3D interaktif",
      "Berbagai format output"
    ],
    "screenshot": "/placeholder-logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  }

  return (
    <html lang="id" className={geist.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
