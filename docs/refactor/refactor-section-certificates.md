# 📋 Ringkasan Refactoring Section Certificates (`08`)

Ringkasan lengkap arsitektur, skema data, styling, sistem indikator seksi, animasi, navigasi, serta penanganan mode terang/gelap (*Light & Dark Mode*) untuk **Section Certificates (`#certificates`, Indicator `08`)**. Gunakan dokumen ini sebagai acuan standar konsistensi untuk pengerjaan seksi selanjutnya.

---

## 📂 1. Arsitektur FSD (`src/features/certificates/` & `src/widgets/home/`)

### A. Feature Layer (`src/features/certificates/`)
- **Types Layer** (`src/features/certificates/types/index.ts`):
  - Interface TypeScript murni: `CertificateItem`, `CertificatesHeaderData`, dan `CertificatesData`.
- **Single Source of Truth (SSoT)** (`src/features/certificates/data/certificates-mock.ts`):
  - 100% data teks mentah terpusat (header intro, quotes filosofi, *featured credential*, serta *learning milestone cards*).
- **Custom Hook** (`src/features/certificates/hooks/use-certificates.ts`):
  - Hook penyedia data `useCertificates()`.
- **Dumb & Molecular UI Components** (`src/features/certificates/components/`):
  - `CertificatesHeader`: Sticky intro column dengan badge tag `CERTIFICATES`, judul menggunakan `TapeText`, blockquote quote lines dengan left border `border-accent/50`, dan kalimat pendukung filosofi.
  - `FeaturedCertificateCard`: Kartu sertifikat utama berukuran besar dengan penanda pulsing `Verified Marker`, thumbnail aspect ratio `aspect-[16/10] sm:aspect-[16/9] lg:max-h-[360px]` dengan hover transition grayscale-to-color + hover scale `group-hover:scale-[1.02]`, metadata provider/tahun, tags skill, serta tombol `VIEW CREDENTIAL`.
  - `CertificateMilestoneCard`: Kartu grid milestone (`02`, `03`, `04`) dengan badge nomor urut, thumbnail hover transition grayscale-to-color `group-hover:scale-105 origin-bottom`, line-clamp title, metadata points, dan link credential.
  - `CertificatesGrid`: Container grid 3-kolom (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) dengan divider header `08 Learning Milestones`.
  - `CertificatesContent`: Orchestrator layout (`w-full pl-0 md:pl-16`).
- **Public API Gateway** (`src/features/certificates/index.ts`):
  - Mengekspor `CertificatesContent`, `useCertificates`, dan types.

### B. Widget Layer (`src/widgets/home/`)
- **CertificatesSection Widget** (`src/widgets/home/CertificatesSection.tsx`):
  - Widget pembungkus seksi yang mengintegrasikan `SectionContainer` (`id="certificates"`, `className="pt-16 sm:pt-24 lg:pt-32"` untuk pemisah jarak yang lega dari seksi 07), `SectionIndicator` (`number="08"`), dan `CertificatesContent`.

### C. Navigation Integration (`src/shared/constants/navigation.ts`)
- Menambahkan menu `{ label: 'Certificates', path: '#certificates' }` langsung setelah `Stories` pada `MAIN_NAVIGATION`.

---

## 🎨 2. Standar Styling, Theme Adaptation, & Sistem Animasi

- **Theme Adaptation (Light & Dark Mode)**:
  - Surface Containers: `bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border`
  - Text Headings: `text-slate-900 dark:text-white`
  - Text Paragraphs: `text-slate-600 dark:text-slate-400` / `text-slate-500`
  - Accent Highlight: `bg-accent text-white`
- **Standard Left Padding**:
  - Device Mobile (`< 768px`): `pl-0` (menggunakan 100% lebar layar).
  - Device Desktop (`md+`): `md:pl-16` (ruang 64px presisi untuk `SectionIndicator`).
- **Animations (`FadeIn` & Micro-interactions)**:
  - `CertificatesHeader`: `FadeIn delay={0.1} direction="up"`
  - `FeaturedCertificateCard`: `FadeIn delay={0.2} direction="up"` dengan animasi pulsing ping pada verified marker.
  - `CertificateMilestoneCard`: Staggered `FadeIn delay={0.15 * index} direction="up"`.
  - Micro-interactions: Hover zoom & grayscale-to-color pada gambar (`duration-700`), hover border accent (`group-hover:border-accent/50`), serta icon arrow translate `group-hover:-translate-y-0.5 group-hover:translate-x-0.5`.

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

// 7. JourneySection.tsx (#journey)
<SectionIndicator number="07" showTopLine={true} bottomLineFull={true} />

// 8. CertificatesSection.tsx (#certificates -> Indicator "08")
<SectionIndicator number="08" showTopLine={true} bottomLineFull={true} />

// 9. NEXT TARGET: (Indicator "09")
Garis vertikal di sebelah kiri (left-0 md:left-[12px]) menyambung 100% kontinu dari seksi 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → ...
```

---

## 🧪 4. Verification Status
- **TypeScript Compiler**: `npx tsc --noEmit` ➔ **0 Error (Clean)**.
- **ESLint Linting**: `npm run lint` ➔ **0 Error, 0 Warning (Passed)**.
- **Production Build**: `npm run build` ➔ **Compiled & Prerendered Successfully (Next.js Turbopack)**.
