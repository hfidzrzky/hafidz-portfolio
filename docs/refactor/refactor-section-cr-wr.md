# 📋 Ringkasan Refactoring Section Currently (`03`) & Selected Work (`04`)

Ringkasan lengkap arsitektur, styling, sistem indikator seksi, dan penanganan modal untuk menjaga konsistensi pengerjaan pada **Section Lab (`#lab`, Indicator `05`)**.

---

## 📂 1. Arsitektur FSD (`src/features/`)

### A. Feature Currently (`src/features/currently/`)
- **Types Layer** (`src/features/currently/types/index.ts`):
  - Interface TypeScript murni: `CurrentlyHeaderData`, `TerminalQuestion`, `FocusCardItem`, `CurrentlyData`, dan `FocusStatusType` ('in-progress' | 'exploring' | 'learning').
- **Single Source of Truth (SSoT)** (`src/features/currently/data/currently-mock.ts`):
  - 100% data teks (badge `CURRENTLY`, headline, tape `Behind the Interface.`, deskripsi, 4 pertanyaan terminal `system_query.sh`, serta 3 modul fokus: *SINEMUS SCREEN*, *BACKEND ENGINEERING*, dan *SYSTEMS & INFRASTRUCTURE*).
- **Custom Hook** (`src/features/currently/hooks/use-currently.ts`):
  - Hook penyedia data fitur Currently.
- **Dumb UI Components** (`src/features/currently/components/`):
  - `TerminalSystemQuery`: Menangani window terminal `system_query.sh` dengan indikator kursor `_` berkedip (`animate-pulse`).
  - `CurrentlyCoreIdentity`: Menangani kolom kiri (`w-full pl-0 md:pl-16`), badge, headline tape, deskripsi, dan `DotPattern` (2x3).
  - `CurrentlyFocusCard` & `CurrentlyFocusList`: Menangani kartu modul fokus dengan `hover-glow`, ikon Lucide (`DraftingCompass`, `Workflow`, `Server`), dan status dot berkedip.
  - `CurrentlyContent`: Orchestrator layout grid 12 kolom responsif.
- **Public API Gateway** (`src/features/currently/index.ts`):
  - Mengekspor `CurrentlyContent` dan hook `useCurrently`.

---

### B. Feature Selected Work (`src/features/work/`)
- **Types Layer** (`src/features/work/types/index.ts`):
  - Interface TypeScript murni: `WorkHeaderData`, `ProjectItem`, `ProjectModalData`, `ArchitectureViewItem`, dan `ProjectScopeGroup`.
- **Single Source of Truth (SSoT)** (`src/features/work/data/work-mock.ts`):
  - 100% data teks (badge `SELECTED WORK`, headline tape `I've Built.`, deskripsi, data project Sinemus Screen, browser preview URL `https://screen.sinemus.id/`, metadata status `BUILDING`, architecture views, dan 3 scope groups: *01 Product*, *02 Engineering*, *03 Systems*).
- **Custom Hook** (`src/features/work/hooks/use-work.ts`):
  - Pengelola data work dan state modal dialog (`activeModalId`, `openModal`, `closeModal`), listener tombol `ESC`, serta penguncian scroll `document.body.style.overflow` + penambahan kelas `body.modal-open`.
- **Dumb UI Components** (`src/features/work/components/`):
  - `WorkHeader`: Header seksi dengan `Badge`, `TapeText`, dan deskripsi (`w-full max-w-3xl`).
  - `ProjectCard`: Kartu project dengan `Next.js Image`, status badge, deskripsi `line-clamp-3`, dan tombol `Explore Case Study`.
  - `ProjectGrid`: Pembungkus grid responsif 3-kolom (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) dan `DotPattern`.
  - `ProjectModal`: Case study modal dialog dengan backdrop blur, browser mockup preview, metadata status `BUILDING` (`animate-ping` dot), architecture views, scope matrix 3 bidang, dan lock icon repository CTA.
  - `WorkContent`: Orchestrator layout (`w-full pl-0 md:pl-16`).
- **Public API Gateway** (`src/features/work/index.ts`):
  - Mengekspor `WorkContent` dan hook `useWork`.

---

## 🎨 2. Standar Styling & Sistem Animasi

- **Global Section Container (`src/shared/ui/SectionContainer.tsx`)**:
  - `baseStyles = "max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative scroll-mt-5 overflow-x-clip"`
  - Varian default padding vertikal: `pt-6 pb-16 lg:pt-8 lg:pb-20 flex items-start` (menghapus `min-h-screen` agar tinggi seksi fleksibel dan kerapatan gap antar seksi konsisten).
- **Standard Left Padding**:
  - Device Mobile (`< 768px`): `pl-0` (menggunakan 100% lebar layar tanpa terpotong).
  - Device Desktop (`md+`): `md:pl-16` (memberi ruang 64px presisi untuk `SectionIndicator`).
- **Headline Font Scaling Responsif**:
  - Skala bertahap di seluruh seksi: `text-[30px] sm:text-[42px] md:text-[56px] lg:text-[64px]` agar tidak ada teks overflow pada device mobile kecil (314px - 360px).
- **Pita Aksen (`TapeText.tsx`)**:
  - Menggunakan `max-w-full inline-block bg-accent text-white tape-effect`.

---

## 📏 3. Konfigurasi Line & Section Indicator (Urutan Seksi)

```tsx
// 1. HeroSection.tsx
<SectionIndicator number="01" showTopLine={true} bottomLineFull={true} />

// 2. AboutSection.tsx (#about - Ada di Navbar)
<SectionIndicator number="02" showTopLine={true} bottomLineFull={true} />

// 3. CurrentlySection.tsx (#currently - Natural Scroll)
<SectionIndicator number="03" showTopLine={true} bottomLineFull={true} />

// 4. WorkSection.tsx (#work - Ada di Navbar)
<SectionIndicator number="04" showTopLine={true} bottomLineFull={true} />

// 5. NEXT TARGET: LabSection.tsx (#lab - Ada di Navbar -> Indicator Number "05")
Garis vertikal di sebelah kiri (left-0 md:left-[12px]) menyambung secara 100% kontinu dari seksi 01 → 02 → 03 → 04 → 05.
```

## 🌐 4. Penanganan Modal Dialog & Floating Navbar
- Navbar Smooth Hide (src/app/globals.css):

```css
body.modal-open header {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
```

- Saat modal dialog dibuka, document.body mendapat kelas modal-open, sehingga fixed Navbar meluncur ke atas dan menghilang dengan halus. Saat modal ditutup (X, ESC, atau klik backdrop), Navbar kembali secara mulus.

## 🧪 5. Verification Status
TypeScript Compiler: npx tsc --noEmit ➔ 0 Error (Clean).
Production Build: npm run build ➔ Compiled Successfully (Next.js Turbopack).