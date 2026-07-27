# 📋 Ringkasan Refactoring Section Lab (`05`)

Ringkasan lengkap arsitektur, styling, sistem indikator seksi, animasi, serta penanganan mode terang/gelap (*Light & Dark Mode*) untuk menjaga konsistensi pengerjaan pada **Section Stories (`#stories`, Indicator `06`)**.

---

## 📂 1. Arsitektur FSD (`src/features/lab/` & `src/widgets/home/`)

### A. Feature Lab (`src/features/lab/`)
- **Types Layer** (`src/features/lab/types/index.ts`):
  - Interface TypeScript murni: `TechStatus` ('used' | 'learning' | 'exploring'), `TechItem`, `StackLayerItem`, `AdvancedTopic`, `WorkflowStep`, `LabLegendItem`, `LabHeaderData`, `NextLayerData`, `AiWorkflowData`, `ClosingData`, dan `LabData`.
- **Single Source of Truth (SSoT)** (`src/features/lab/data/lab-mock.ts`):
  - 100% data teks mentah dari `lab.html` (header, 6 stack layers, 4 topik lanjutan `system_monitor.exe`, AI workflow pipeline 5 tahap, dan statement penutup).
- **Custom Hook** (`src/features/lab/hooks/use-lab.ts`):
  - Hook penyedia data `useLab` dan fungsi helper scroll `scrollToSection(id: string)`.
- **Dumb UI Components** (`src/features/lab/components/`):
  - `TechBadge`: Komponen badge status teknologi (`used`, `learning`, `exploring`).
  - `LabHeader`: Header seksi dengan `Badge`, `TapeText`, manifesto blockquote, dan *Technology Status Legend Card*.
  - `StackCard` & `PhilosophyCard`: Kartu layer stack matrix (01-05) & kartu filosofi (06: "The Stack is a Moving Landscape") dengan ikon Lucide `Layers` dan scanline overlay.
  - `StackGrid`: Orchestrator grid responsif 3-kolom (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20`).
  - `TerminalSystemMonitor`: Window terminal `system_monitor.exe` dengan animasi pulse kursor `_`, scanline, dan grid 4 advanced topics.
  - `AiWorkflowCard`: Kartu AI-assisted development & visual workflow pipeline.
  - `LabFooter`: Statement penutup & tombol CTA `View My Journey` dengan ikon `ArrowRight`.
  - `LabContent`: Orchestrator layout (`w-full pl-0 md:pl-16`).
- **Public API Gateway** (`src/features/lab/index.ts`):
  - Mengekspor `LabContent`, `useLab`, dan tipe data.

### B. Widget Layer (`src/widgets/home/`)
- **LabSection Widget** (`src/widgets/home/LabSection.tsx`):
  - Widget pembungkus seksi yang mengintegrasikan `SectionContainer` (`id="lab"`), `SectionIndicator` (`number="05"`), dan `LabContent`.

---

## 🎨 2. Standar Styling, Theme Adaptation, & Sistem Animasi

- **Theme Adaptation (Light & Dark Mode)**:
  - Menggunakan varian Tailwind dinamis agar 100% adaptif saat toggle tema:
    - Container Kartu: `bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm`
    - Judul/Headline: `text-slate-900 dark:text-white`
    - Teks Deskripsi/Sub: `text-slate-600 dark:text-slate-400`
    - Divisider/Borders: `border-light-border dark:border-dark-border`
- **Indicator Status Box (Technology Status)**:
  - Presisi `w-2.5 h-2.5 flex-shrink-0` sejajar tinggi teks font-mono:
    - `used`: `bg-accent border border-accent`
    - `learning`: `bg-accent/20 border border-accent/60`
    - `exploring`: `bg-transparent border border-dashed border-slate-400 dark:border-slate-500`
- **Standard Left Padding**:
  - Device Mobile (`< 768px`): `pl-0` (menggunakan 100% lebar layar).
  - Device Desktop (`md+`): `md:pl-16` (memberi ruang 64px presisi untuk `SectionIndicator`).
- **Animations (`FadeIn`)**:
  - Seluruh komponen UI dibungkus `FadeIn` (`motion/react`):
    - `LabHeader` & `LabFooter`: `FadeIn delay={0.1} direction="up"`
    - `StackGrid` (Cards): Staggered `delay={index * 0.1} direction="up"`
    - `TerminalSystemMonitor` & `AiWorkflowCard`: `FadeIn delay={0.2} direction="up"`

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

// 5. LabSection.tsx (#lab - Ada di Navbar)
<SectionIndicator number="05" showTopLine={true} bottomLineFull={true} />

// 6. NEXT TARGET: StoriesSection.tsx (#stories - Ada di Navbar -> Indicator Number "06")
Garis vertikal di sebelah kiri (left-0 md:left-[12px]) menyambung secara 100% kontinu dari seksi 01 → 02 → 03 → 04 → 05 → 06.
```

---

## 🧪 4. Verification Status
- **TypeScript Compiler**: `npx tsc --noEmit` ➔ **0 Error (Clean)**.
- **Production Build**: `npm run build` ➔ **Compiled Successfully (Next.js Turbopack)**.
