# Ai Builder

Sebuah aplikasi web modern yang dibangun menggunakan Next.js 15 dengan fokus pada UI/UX yang menarik dan performa tinggi.

## 🚀 Teknologi Utama

- **Next.js 15.2.4** - Framework React untuk production
- **React 19** - Library JavaScript untuk membangun antarmuka pengguna
- **TypeScript** - Superset JavaScript dengan penambahan tipe data
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Komponen UI yang dapat diakses dan dapat disesuaikan
- **Three.js** - Library 3D graphics
- **React Three Fiber** - React renderer untuk Three.js
- **Expo** - Platform untuk membuat aplikasi React Native universal

## ✨ Fitur

- 🎨 UI Modern dan Responsif
- 🌓 Mode Gelap/Terang
- 🎭 Komponen UI yang Dapat Diakses
- 📱 Mendukung Mobile-First Design
- 🎮 Integrasi 3D Graphics
- 🔒 Form Handling dengan React Hook Form & Zod
- 🎯 Komponen yang Dapat Digunakan Kembali

## 🛠️ Instalasi

1. Clone repository ini
```bash
git clone https://github.com/bimadevs/3d-builder
```

2. Install dependencies
```bash
pnpm install
```

3. Jalankan development server
```bash
pnpm dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda

## 📦 Scripts

- `pnpm dev` - Menjalankan development server
- `pnpm build` - Membuat versi production
- `pnpm start` - Menjalankan versi production
- `pnpm lint` - Menjalankan linter

## 🧩 Struktur Project

```
rodin-api-ui/
├── app/                # Next.js app directory
│   ├── api/           # API routes
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # Reusable components
├── hooks/            # Custom React hooks
├── lib/             # Utility functions
├── public/          # Static assets
└── styles/          # Global styles
```

## 🔧 Konfigurasi

Project ini menggunakan beberapa konfigurasi penting:

- `next.config.mjs` - Konfigurasi Next.js
- `tailwind.config.ts` - Konfigurasi Tailwind CSS
- `tsconfig.json` - Konfigurasi TypeScript
- `components.json` - Konfigurasi komponen

## 📝 Dependencies Utama

- `@radix-ui/*` - Komponen UI primitif
- `@react-three/fiber` & `@react-three/drei` - React renderer untuk Three.js
- `tailwind-merge` & `tailwindcss-animate` - Utilitas Tailwind
- `react-hook-form` & `zod` - Form handling dan validasi
- `next-themes` - Manajemen tema gelap/terang

## 🤝 Kontribusi

Kontribusi selalu diterima dengan baik! Silakan buat Pull Request atau buka Issue untuk saran dan perbaikan.

## 📄 Lisensi

Project ini dilisensikan di bawah [MIT License](LICENSE). 