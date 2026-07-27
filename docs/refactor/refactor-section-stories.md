# 📋 Ringkasan Refactoring Section Stories (`06`)

Ringkasan lengkap arsitektur, skema data, styling, sistem indikator seksi, animasi, serta penanganan mode terang/gelap (*Light & Dark Mode*) untuk **Section Stories (`#stories`, Indicator `06`)**. Gunakan dokumen ini sebagai acuan standar konsistensi untuk pengerjaan seksi selanjutnya.

---

## 📂 1. Arsitektur FSD (`src/features/stories/` & `src/widgets/home/`)

### A. Feature Layer (`src/features/stories/`)
- **Types Layer** (`src/features/stories/types/index.ts`):
  - Interface TypeScript murni: `StoryCategory`, `StoryIconType`, `StoryMeta`, `StoryItem`, `YearArchiveGroup`, `StoriesHeaderData`, dan `StoriesData`.
- **Single Source of Truth (SSoT)** (`src/features/stories/data/stories-mock.ts`):
  - 100% data teks mentah terpusat (header intro & list archive per tahun `2026`). Menambah cerita baru cukup menambah objek di mock file tanpa mengubah komponen UI.
- **Custom Hook** (`src/features/stories/hooks/use-stories.ts`):
  - Hook penyedia data `useStories()`.
- **Dumb & Molecular UI Components** (`src/features/stories/components/`):
  - `StoriesHeader`: Hero intro seksi (`Badge`, `TapeText`, deskripsi, scroll indicator `ArrowDown`, & metrics `02+` / `26`). Clean & minimalis tanpa background glow/watermark text.
  - `YearDivider`: Static year divider anchor (`2026`) + gradient line + badge `LATEST ARCHIVES`.
  - `StoryImage`: Frame gambar rasio 16/10, filter *grayscale-to-color* saat hover, watermark `/ 01`, dan *corner border accents* dinamis (tanpa hover shadow gradient).
  - `StoryContent`: Card surface berisi tag kategori, judul `h3` (array string dirender per baris dengan `<br />`), line divider, deskripsi, dan meta footer (location/role + date dengan ikon Lucide `MapPin`, `Terminal`, `Calendar`).
  - `ConnectingThread`: Garis penghubung vertikal tipis antar-cerita di layar desktop.
  - `StoryCard`: Orchestrator grid 12-kolom responsif yang mengatur susunan *order* ganjil/genap (`isEven`) dan animasi `FadeIn` (staggered delay).
  - `StoriesList`: Iterasi grup `archives` per tahun.
  - `StoriesContent`: Orchestrator layout (`w-full pl-0 md:pl-16`).
- **Public API Gateway** (`src/features/stories/index.ts`):
  - Mengekspor `StoriesContent`, `useStories`, dan types.

### B. Widget Layer (`src/widgets/home/`)
- **StoriesSection Widget** (`src/widgets/home/StoriesSection.tsx`):
  - Widget pembungkus seksi yang mengintegrasikan `SectionContainer` (`id="stories"`), `SectionIndicator` (`number="06"`), dan `StoriesContent`.

---

## 🔄 2. Automated Alternating Layout Logic (Zig-Zag Pattern)

Pola tata letak berganti-ganti dihitung secara otomatis berdasarkan indeks array (`index % 2 === 0`):

| Index / Story | Layout Gambar | Layout Card Text | Position Watermark | Corner Accent |
| :--- | :--- | :--- | :--- | :--- |
| **0 / Story 01 (Even)** | Kiri (`lg:col-span-7 order-1`) | Kanan (`lg:col-span-5 order-2 lg:-ml-12`) | Kiri Atas (`/ 01`) | Kiri Atas & Kanan Bawah |
| **1 / Story 02 (Odd)** | Kanan (`lg:col-span-7 order-1 lg:order-2`) | Kiri (`lg:col-span-5 order-2 lg:order-1 lg:-mr-12`) | Kanan Atas (`/ 02`) | Kanan Atas & Kiri Bawah |

---

## 🎨 3. Standar Styling, Theme Adaptation, & Konfigurasi

- **Theme Adaptation (Light & Dark Mode)**:
  - Container Card: `bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-xl dark:shadow-2xl`
  - Text Headings: `text-slate-900 dark:text-white`
  - Text Paragraphs: `text-slate-600 dark:text-slate-400`
  - Accent Color: `text-accent` (#4F7CFF) / `bg-accent`
- **Standard Left Padding**:
  - Device Mobile (`< 768px`): `pl-0`
  - Device Desktop (`md+`): `md:pl-16` (ruang 64px presisi untuk `SectionIndicator`).
- **Icons**:
  - 100% menggunakan `lucide-react` (`MapPin`, `Calendar`, `Terminal`, `ArrowDown`).
- **Next.js Config (`next.config.ts`)**:
  - Konfigurasi `images.remotePatterns` diaktifkan untuk domain `images.unsplash.com`.
- **React 19 Compatibility (`src/app/providers.tsx`)**:
  - Menangani error false-positive script tag dari `next-themes` di dev environment.

---

## 📏 4. Urutan Seksi & Section Indicator

```tsx
// 1. HeroSection.tsx (#hero)
<SectionIndicator number="01" showTopLine={true} bottomLineFull={true} />

// 2. AboutSection.tsx (#about)
<SectionIndicator number="02" showTopLine={true} bottomLineFull={true} />

// 3. CurrentlySection.tsx (#currently)
<SectionIndicator number="03" showTopLine={true} bottomLineFull={true} />

// 4. WorkSection.tsx (#work)
<SectionIndicator number="04" showTopLine={true} bottomLineFull={true} />

// 5. LabSection.tsx (#lab)
<SectionIndicator number="05" showTopLine={true} bottomLineFull={true} />

// 6. StoriesSection.tsx (#stories -> Indicator "06")
<SectionIndicator number="06" showTopLine={true} bottomLineFull={true} />

// 7. NEXT TARGET: (Indicator "07")
Garis vertikal di sebelah kiri (left-0 md:left-[12px]) menyambung 100% kontinu dari seksi 01 → 02 → 03 → 04 → 05 → 06 → ...
```

## 🧪 5. Verification Status
TypeScript Compiler: npx tsc --noEmit ➔ 0 Error (Clean).
Production Build: npm run build ➔ Compiled & Built Successfully (Next.js Turbopack).