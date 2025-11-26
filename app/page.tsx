import Rodin from "@/components/rodin"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Buat Model 3D dari Gambar - Gratis Online",
  description: "Upload gambar dan dapatkan model 3D profesional secara otomatis. Teknologi AI terdepan untuk konversi 2D ke 3D. Mudah, cepat, dan gratis.",
  keywords: [
    "buat model 3D dari gambar",
    "konversi 2D ke 3D online",
    "AI 3D modeling gratis",
    "upload gambar jadi 3D",
    "generate model 3D otomatis",
    "3D modeling online gratis",
    "image to 3D converter",
    "AI 3D generator",
    "3D printing model maker",
    "professional 3D models"
  ],
  openGraph: {
    title: "3D Model Generator - Buat Model 3D dari Gambar",
    description: "Platform AI terdepan untuk membuat model 3D profesional dari gambar 2D. Upload foto dan dapatkan model 3D berkualitas tinggi secara gratis.",
    url: "/",
    siteName: "3D Model Generator",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "3D Model Generator - Interface pengguna untuk membuat model 3D"
      }
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Model Generator - Buat Model 3D dari Gambar",
    description: "Upload gambar dan dapatkan model 3D profesional secara otomatis dengan teknologi AI. Gratis dan mudah digunakan.",
    images: ["/placeholder-logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "og:locale:alternate": "en_US",
  },
}

export default function Home() {
  return (
    <main className="h-[100dvh] w-screen overflow-hidden bg-black bg-radial-gradient">
      <Rodin />
    </main>
  )
}
