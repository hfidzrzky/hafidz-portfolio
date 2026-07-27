# 📋 Ringkasan Refactoring Section Journey (`07`)

Ringkasan lengkap arsitektur, skema data, styling, sistem indikator seksi, animasi, serta penanganan mode terang/gelap (*Light & Dark Mode*) untuk **Section Journey (`#journey`, Indicator `07`)**. Gunakan dokumen ini sebagai acuan standar konsistensi untuk pengerjaan seksi selanjutnya.

---

## 📂 1. Arsitektur FSD (`src/features/journey/` & `src/widgets/home/`)

### A. Feature Layer (`src/features/journey/`)
- **Types Layer** (`src/features/journey/types/index.ts`):
  - Interface TypeScript murni: `DualMatrixCard`, `DualMatrixData`, `JourneyTag`, `JourneyItem`, `JourneyHeaderData`, dan `JourneyData`.
- **Single Source of Truth (SSoT)** (`src/features/journey/data/journey-mock.ts`):
  - 100% data teks mentah terpusat (header intro, 5 fase perjalanan dari 2025 s.d. 2027+, *dual-matrix*, *evolution pipeline*, dan status *ending node*).
- **Custom Hook** (`src/features/journey/hooks/use-journey.ts`):
  - Hook penyedia data `useJourney()`.
- **Dumb & Molecular UI Components** (`src/features/journey/components/`):
  - `JourneyHeader`: Header intro seksi menggunakan `Badge`, `TapeText`, dan prompt quote `>`.
  - `TimelineNode`: Sumbu titik garis waktu interaktif dengan efek hover scale & transition glow (`group-hover:scale-150`).
  - `JourneyDualMatrix`: Sub-kartu matriks ganda 2-kolom (*Academic Foundation* vs *Practical Exploration*) dengan binder visual `+`.
  - `JourneyEvolutionPipeline`: Visualisasi alur perkembangan (`EXPLORE > BUILD > UNDERSTAND > FOCUS > GO DEEPER`).
  - `JourneyItemCard`: Renderer per entri garis waktu yang merender rentang tahun, node, category badge, judul, quote lines, deskripsi/matriks, tag badges, dan pipeline.
  - `JourneyEndNode`: Penanda akhir timeline dengan fading line dan pulsing ping animation `→ STILL IN PROGRESS_`.
  - `JourneyTimeline`: Container sumbu vertikal utama (`left-[15px] md:left-[160px]`) dan iterasi `JourneyItemCard` + `JourneyEndNode`.
  - `JourneyContent`: Orchestrator layout (`w-full pl-0 md:pl-16`).
- **Public API Gateway** (`src/features/journey/index.ts`):
  - Mengekspor `JourneyContent`, `useJourney`, dan types.

### B. Widget Layer (`src/widgets/home/`)
- **JourneySection Widget** (`src/widgets/home/JourneySection.tsx`):
  - Widget pembungkus seksi yang mengintegrasikan `SectionContainer` (`id="journey"`), `SectionIndicator` (`number="07"`), dan `JourneyContent`.

---

## 🎨 2. Standar Styling, Theme Adaptation, & Sistem Animasi

- **Theme Adaptation (Light & Dark Mode)**:
  - Container Matrix Card: `bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-slate-100 dark:hover:bg-[#151A26]`
  - Text Headings: `text-slate-900 dark:text-white`
  - Text Paragraphs: `text-slate-600 dark:text-slate-400`
  - Timeline Axis Line: `bg-light-border dark:bg-dark-border`
- **Standard Left Padding**:
  - Device Mobile (`< 768px`): `pl-0` (menggunakan 100% lebar layar).
  - Device Desktop (`md+`): `md:pl-16` (ruang 64px presisi untuk `SectionIndicator`).
- **Animations (`FadeIn` & Micro-interactions)**:
  - `JourneyHeader`: `FadeIn delay={0.1} direction="up"`
  - `JourneyItemCard`: Staggered `delay={index * 0.12} direction="up"`
  - `JourneyEndNode`: `FadeIn delay={0.3} direction="up"` dengan animasi *pulsing ping*.
  - Micro-interactions: Judul bergeser halus saat hover (`group-hover:translate-x-1`), warna tahun menjadi accent (`group-hover:text-accent`), dan dot node membesar (`group-hover:scale-150`).

---

## 📏 3. Urutan Seksi & Section Indicator

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

// 6. StoriesSection.tsx (#stories)
<SectionIndicator number="06" showTopLine={true} bottomLineFull={true} />

// 7. JourneySection.tsx (#journey -> Indicator "07")
<SectionIndicator number="07" showTopLine={true} bottomLineFull={true} />

// 8. NEXT TARGET: (Indicator "08")
Garis vertikal di sebelah kiri (left-0 md:left-[12px]) menyambung 100% kontinu dari seksi 01 → 02 → 03 → 04 → 05 → 06 → 07 → ...
```

---

## 🧪 4. Verification Status
- **TypeScript Compiler**: `npx tsc --noEmit` ➔ **0 Error (Clean)**.
- **ESLint Linting**: `npm run lint` ➔ **0 Error, 0 Warning (Passed)**.
- **Production Build**: `npm run build` ➔ **Compiled & Prerendered Successfully (Next.js Turbopack)**.
