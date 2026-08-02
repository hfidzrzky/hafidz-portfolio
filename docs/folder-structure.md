# Folder Structure Documentation

Dokumen ini menjelaskan struktur direktori proyek **hafidz-portfolio** secara terperinci beserta fungsi dari masing-masing folder dan file pendukung.

---

## 1. Root Directory Layout

```
hafidz-portfolio/
├── .git/                  # Repository version control Git
├── .gitignore             # Daftar file/folder yang diabaikan oleh Git
├── .next/                 # Output build Next.js (dihasilkan otomatis)
├── .vscode/               # Konfigurasi workspace editor VS Code
├── docs/                  # Dokumentasi proyek & panduan refactoring
├── public/                # Aset statis publik (gambar, ikon, logo)
├── src/                   # Source code utama aplikasi
├── eslint.config.mjs      # Konfigurasi ESLint v9 (Flat Config)
├── next.config.ts         # Konfigurasi Next.js 16
├── next-env.d.ts          # Declarations type bawaan Next.js
├── package.json           # Manifest dependensi & npm scripts
├── package-lock.json      # Dependency lockfile npm
├── postcss.config.mjs     # Konfigurasi PostCSS (Tailwind v4)
├── README.md              # Documentation portal entry
└── tsconfig.json          # Konfigurasi kompilator TypeScript
```

---

## 2. Source Code Architecture (`src/`)

Direktori `src/` dibagi menjadi 4 layer utama sesuai prinsip Feature-Sliced Design:

```
src/
├── app/                   # App Layer (Next.js App Router)
├── features/              # Feature Layer (Modular Domain Features)
├── shared/                # Shared Layer (Reusable Primitives & Utils)
└── widgets/               # Widget Layer (Composite Page Layouts)
```

---

## 3. Detail Layer & Directory Contents

### A. App Layer (`src/app/`)
Mengelola route entry point, styling global, dan wrapper provider.

- [`src/app/favicon.ico`](file:///d:/Projects/hafidz-portfolio/src/app/favicon.ico) - Icon tab browser.
- [`src/app/globals.css`](file:///d:/Projects/hafidz-portfolio/src/app/globals.css) - Styling CSS global, variabel warna Tailwind, dan CSS reset.
- [`src/app/layout.tsx`](file:///d:/Projects/hafidz-portfolio/src/app/layout.tsx) - Root layout utama aplikasi, mengonfigurasi font Google, SEO metadata, Navbar, Footer, dan Analytics.
- [`src/app/page.tsx`](file:///d:/Projects/hafidz-portfolio/src/app/page.tsx) - Entry point Halaman Utama (Home Page), merender section widgets secara berurutan.
- [`src/app/providers.tsx`](file:///d:/Projects/hafidz-portfolio/src/app/providers.tsx) - Provider wrapper global (seperti `ThemeProvider` dari `next-themes`).

### B. Widget Layer (`src/widgets/`)
Blok tampilan tingkat tinggi yang menggabungkan fitur-fitur domain.

- [`src/widgets/navbar/`](file:///d:/Projects/hafidz-portfolio/src/widgets/navbar) - Komponen bilah navigasi utama aplikasi (`Navbar.tsx`).
- [`src/widgets/footer/`](file:///d:/Projects/hafidz-portfolio/src/widgets/footer) - Komponen kaki halaman aplikasi (`Footer.tsx`).
- [`src/widgets/home/`](file:///d:/Projects/hafidz-portfolio/src/widgets/home) - Wrapper section yang dirender di halaman utama:
  - `HeroSection.tsx`
  - `AboutSection.tsx`
  - `CurrentlySection.tsx`
  - `WorkSection.tsx`
  - `LabSection.tsx`
  - `StoriesSection.tsx`
  - `JourneySection.tsx`
  - `CertificatesSection.tsx`
  - `ContactSection.tsx`

### C. Feature Layer (`src/features/`)
Setiap fitur domain dibungkus secara mandiri dengan struktur standar:
`features/{domain}/components/`, `data/`, `hooks/`, `types/`, dan `index.ts`.

1. **`about/`** - Domain tentang profil, prinsip rekayasa, dan tahapan belajar.
2. **`certificates/`** - Domain lisensi, sertifikasi teknis, dan pencapaian.
3. **`contact/`** - Domain formulir kontak, informasi sosial media, dan penanganan pesan.
4. **`currently/`** - Domain status aktif, fokus teknologi, dan terminal system query.
5. **`hero/`** - Domain pengenalan awal, headline, lokasi, dan kartu ringkasan.
6. **`journey/`** - Domain rekam jejak pengalaman, sejarah karir, dan milestone.
7. **`lab/`** - Domain eksperimen teknis, arsitektur stack, dan alur kerja AI.
8. **`stories/`** - Domain artikel, publikasi, pemikiran teknis, dan arsip tahunan.
9. **`theme-toggle/`** - Fitur pengalih mode tampilan dark/light mode (`ThemeToggle.tsx`).
10. **`work/`** - Domain showcase proyek utama, filter kategori, dan kartu portofolio.

### D. Shared Layer (`src/shared/`)
Komponen dasar generik dan utility helper yang tidak terikat pada bisnis domain spesifik.

- **`src/shared/constants/`** - File konstanta global (misal: [`navigation.ts`](file:///d:/Projects/hafidz-portfolio/src/shared/constants/navigation.ts)).
- **`src/shared/lib/`** - Helper fungsi generik (misal: [`utils.ts`](file:///d:/Projects/hafidz-portfolio/src/shared/lib/utils.ts) berisi fungsi `cn`).
- **`src/shared/ui/`** - Komponen UI atomik:
  - `Badge.tsx` - Element tag/badge visual.
  - `Container.tsx` - Wrapper pembatas lebar responsif.
  - `Modal.tsx` - Komponen dialog overlay modal generik.
  - `SectionHeader.tsx` - Header standar untuk setiap section halaman.
