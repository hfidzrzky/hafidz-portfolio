# 📄 AI System Prompt & PRD: HTML to Next.js Refactor (FSD Architecture)

## 🎯 1. Objective
Melakukan *refactor* komponen statis (HTML/CSS) menjadi ekosistem komponen Next.js (React) yang modular, *scalable*, dan *maintainable*. Proses ini harus mematuhi arsitektur **Feature-Sliced Design (FSD)** dan menggunakan standar **Tailwind CSS v4**. Dilarang keras melakukan *over-engineering* (menambah abstraksi yang tidak perlu).

## 🧭 2. Core Principles
AI agent harus mematuhi prinsip *software engineering* berikut dalam setiap pembuatan kode:
- **Single Responsibility Principle (SRP):** Setiap *file* hanya memiliki satu tugas. Komponen murni untuk *rendering* UI (*Dumb Component*), *hooks* untuk logika (*Smart Component*).
- **Separation of Concerns (SoC):** Pisahkan antara struktur (*Component*), gaya (*Tailwind utility*), logika (*Hooks*), dan definisi tipe (*TypeScript Interfaces*).
- **Single Source of Truth (SSoT):** Seluruh teks, konten, dan *link* tidak boleh di-*hardcode* di dalam komponen UI. Semuanya harus diekstrak ke dalam *file* `data/[feature]-mock.ts`.

## 📂 3. Target Directory Structure (FSD)
Setiap fitur (misal: `hero`, `about`, `projects`) wajib diisolasi di dalam `src/features/[nama_fitur]/` dengan struktur baku berikut:

```text
src/features/[nama_fitur]/
├── components/          # Dumb components (Pure UI, Menerima props)
│   ├── ComponentA.tsx
│   └── ComponentB.tsx
├── data/                # SSoT untuk konten statis
│   └── mock.ts
├── hooks/               # Custom hooks jika ada logika kompleks/state
│   └── use-[fitur].ts
├── types/               # TypeScript interfaces/types
│   └── index.ts
└── index.ts             # Public API Gateway (Barrel export)
```

## 🛠️ 4. Technical Specifications & Rules

### A. Component Strategy
Dumb Components (components/):
- Wajib bersifat fungsional murni.
- Semua data disuplai melalui Props.
- Tidak boleh melakukan fetching data atau menyimpan global state.

Smart Components / Entry Point:
- ertindak sebagai pengatur (orchestrator).
- Mengambil data dari data/mock.ts dan menyalurkannya ke Dumb Components.

### B. Styling Strategy (Tailwind CSS v4)
- Tidak ada tailwind.config.ts. Proyek berjalan di Tailwind v4 dengan arsitektur CSS-first.
- Design Tokens: Jika ada warna/animasi baru dari desain HTML yang bersifat global, delegasikan ke developer untuk ditambahkan ke @theme di src/app/globals.css. Jangan membuat abstraksi CSS inline yang rumit.
- Gunakan kelas utilitas bawaan Tailwind secara langsung di className.

### C. Import & Export Rules
- Barrel Pattern: Wajib menggunakan index.ts di root feature untuk mengekspor komponen utama.
- Strict Routing: Komponen di luar feature (misal: app/page.tsx) hanya boleh mengimpor dari API Gateway (import { Component } from '@/features/[nama_fitur]'), dilarang melakukan deep import ke dalam components/ atau data/.

## 🤖 5. Execution Steps (For AI Agent)
Ketika diberikan kode HTML mentah (contoh: hero.html), jalankan langkah-langkah berikut secara berurutan:
- Analyze & Extract Types: Analisis konten HTML, buat antarmuka TypeScript (types/index.ts) untuk mendefinisikan struktur data.
- Create SSoT Data: Pindahkan semua teks (judul, deskripsi, teks tombol) dari HTML ke dalam file data/mock.ts berdasarkan interface yang telah dibuat.
- Breakdown UI (SRP): Pecah HTML besar menjadi potongan-potongan kecil komponen React di folder components/. Ganti sintaks class="..." menjadi className="..." dan tutup semua self-closing tags (misal: <img />, <br />).
- Assemble Feature: Buat komponen utama (misal: HeroSection.tsx) yang mengimpor mock data dan mendistribusikannya ke sub-komponen.
- Gateway Setup: Ekspor komponen utama melalui index.ts agar siap dikonsumsi oleh page.tsx atau widget lainnya.