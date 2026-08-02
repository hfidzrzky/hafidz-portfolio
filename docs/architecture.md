# Architecture Documentation

Dokumen ini menjelaskan arsitektur perangkat lunak yang diterapkan pada aplikasi web portfolio ini. Aplikasi dibangun menggunakan **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4** dengan menerapkan adaptasi arsitektur bertingkat berbasis **Feature-Sliced Design (FSD)**.

---

## 1. High-Level Architecture Overview

Sistem menggunakan pola *Unidirectional Data Flow* dan pemisahan tanggung jawab (*Separation of Concerns*) yang ketat. Kode dibagi menjadi 4 layer utama:

```
+-------------------------------------------------------+
| App Layer (src/app)                                  |
| Router setup, global layout, metadata & providers     |
+-------------------------------------------------------+
                           |
                           v
+-------------------------------------------------------+
| Widget Layer (src/widgets)                           |
| Composite UI (Navbar, Footer, Home Section Wrappers)  |
+-------------------------------------------------------+
                           |
                           v
+-------------------------------------------------------+
| Feature Layer (src/features/*)                        |
| Self-contained domain modules (UI, Hooks, Types, Data)|
+-------------------------------------------------------+
                           |
                           v
+-------------------------------------------------------+
| Shared Layer (src/shared)                             |
| Reusable UI primitives, utilities, & global constants |
+-------------------------------------------------------+
```

### Penjelasan Per Layer

1. **App Layer (`src/app/`)**  
   - Lokasi: [`src/app/layout.tsx`](file:///d:/Projects/hafidz-portfolio/src/app/layout.tsx), [`src/app/page.tsx`](file:///d:/Projects/hafidz-portfolio/src/app/page.tsx), [`src/app/providers.tsx`](file:///d:/Projects/hafidz-portfolio/src/app/providers.tsx), [`src/app/globals.css`](file:///d:/Projects/hafidz-portfolio/src/app/globals.css).  
   - Mengelola konfigurasi root Next.js, metadata SEO/OpenGraph, penataan provider global (`ThemeProvider`), pemuatan font Google (`Space_Grotesk` & `JetBrains_Mono`), dan integrasi `@vercel/analytics`.

2. **Widget Layer (`src/widgets/`)**  
   - Lokasi: [`src/widgets/navbar/`](file:///d:/Projects/hafidz-portfolio/src/widgets/navbar), [`src/widgets/footer/`](file:///d:/Projects/hafidz-portfolio/src/widgets/footer), [`src/widgets/home/`](file:///d:/Projects/hafidz-portfolio/src/widgets/home).  
   - Berfungsi menyusun fitur-fitur independen menjadi satu blok UI yangutuh. Contohnya [`src/widgets/home/HeroSection.tsx`](file:///d:/Projects/hafidz-portfolio/src/widgets/home/HeroSection.tsx) mengimpor `HeroContent` dari layer feature dan meletakkannya di dalam kontainer layout halaman utama.

3. **Feature Layer (`src/features/`)**  
   - Lokasi: `src/features/{about, certificates, contact, currently, hero, journey, lab, stories, theme-toggle, work}/`.  
   - Merupakan inti dari logika bisnis dan presentasi UI per domain. Setiap modul domain bersifat *self-contained* dan mengodekan komponen (`components/`), data statis (`data/`), kustom hook (`hooks/`), tipe TypeScript (`types/`), dan diekspos melalui barrel file (`index.ts`).

4. **Shared Layer (`src/shared/`)**  
   - Lokasi: [`src/shared/ui/`](file:///d:/Projects/hafidz-portfolio/src/shared/ui), [`src/shared/lib/`](file:///d:/Projects/hafidz-portfolio/src/shared/lib), [`src/shared/constants/`](file:///d:/Projects/hafidz-portfolio/src/shared/constants).  
   - Menyediakan komponen UI atomik generik (seperti `Container`, `SectionHeader`, `Badge`, `Modal`), utility helper (`cn` gabungan `clsx` & `tailwind-merge`), dan konstanta aplikasi global.

---

## 2. Rendering & Data Flow Strategy

- **Static Mock Data & Client Hooks**:  
  Saat ini seluruh data konten di-render secara lokal dari file data statis (misal: [`src/features/work/data/work-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/work/data/work-mock.ts)).  
  Kustom hook pada layer feature (misal: [`src/features/work/hooks/use-work.ts`](file:///d:/Projects/hafidz-portfolio/src/features/work/hooks/use-work.ts)) bertindak sebagai *data provider abstraction*. Logika manajemen state lokal seperti filter kategori (`activeCategory`), pencarian (`searchQuery`), atau pembagian halaman (`pagination`) dikelola oleh React State di dalam hook tersebut.

- **Backend API Integration**:  
  *Belum diimplementasikan*. Saat ini aplikasi tidak memiliki integrasi REST API backend, GraphQL, maupun database.

---

## 3. State Management & Theme Handling

- **Theme Management**:  
  Dimanajeri oleh library `next-themes` melalui provider custom [`src/app/providers.tsx`](file:///d:/Projects/hafidz-portfolio/src/app/providers.tsx). Komponen [`src/features/theme-toggle/components/ThemeToggle.tsx`](file:///d:/Projects/hafidz-portfolio/src/features/theme-toggle/components/ThemeToggle.tsx) menggunakan `useTheme()` untuk mengganti mode Antarmuka antara Light Mode dan Dark Mode dengan atribut `class` pada elemen HTML root.

- **Animation & Motion**:  
  Ditenagai oleh `motion` (`framer-motion` v12 API) untuk transisi UI yang halus, *entrance animations*, dan efek lightbox pada visual aset.

---

## 4. Analytics & Deployment Architecture

- **Analytics**: Integrasi `@vercel/analytics/react` di tingkat Root Layout ([`src/app/layout.tsx`](file:///d:/Projects/hafidz-portfolio/src/app/layout.tsx)) untuk pemantauan lalu lintas pengunjung secara real-time.
- **Deployment Platform**: Dioptimalkan untuk dijalankan pada Vercel Serverless/Edge Infrastructure.
