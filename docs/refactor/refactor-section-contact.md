# 📋 Ringkasan Refactoring Section Contact (`09`)

Ringkasan lengkap arsitektur, skema data, styling, sistem indikator seksi, animasi, penanganan form interaktif, serta adaptasi *Light & Dark Mode* untuk **Section Contact (`#contact`, Indicator `09`)**. Gunakan dokumen ini sebagai acuan standar konsistensi untuk proyek.

---

## 📂 1. Arsitektur FSD (`src/features/contact/` & `src/widgets/home/`)

### A. Feature Layer (`src/features/contact/`)
- **Types Layer** (`src/features/contact/types/index.ts`):
  - Interface TypeScript murni: `ContactHeaderData`, `ContactInfoData`, `SocialLink`, `SubjectOption`, `ContactFormData`, `FormStatus`, dan `ContactData`.
- **Single Source of Truth (SSoT)** (`src/features/contact/data/contact-mock.ts`):
  - Data teks mentah terpusat (header intro, primary headline, quote, email direct, social links, availability status, serta opsi subject dropdown).
- **Custom Hook** (`src/features/contact/hooks/use-contact-form.ts`):
  - Hook pengelola state form `useContactForm()` yang menangani state input, validasi format email (`emailError`), simulasi request async submission, serta transisi state UI (`idle`, `submitting`, `success`, `error`).
- **Dumb & Molecular UI Components** (`src/features/contact/components/`):
  - `ContactHero`: Component intro headline dengan badge tag `CONTACT`, judul utama dengan aksen highlight line, quote/supporting copy, dan tombol CTA smooth scroll.
  - `ContactInfo`: Component kolom kiri yang menampilkan info email langsung, daftar media sosial (GitHub, LinkedIn, Instagram) dengan animasi hover SVG + arrow, serta penanda ketersediaan (*availability status*).
  - `ContactForm`: Form interaktif dengan field *Name*, *Email* (dengan error message jika invalid), *Subject* select dropdown, *Message* textarea, serta submit button yang dinamis saat loading (`Sending...` + spinner).
  - `ContactSuccessState`: Component tampilan state `STATUS: 200` saat pesan berhasil dikirim beserta tombol `Send Another Message`.
  - `ContactErrorState`: Component tampilan state `STATUS: 500` saat terjadi error submission beserta tombol mailto & reset retry.
  - `ContactContent`: Orchestrator layout (`w-full pl-0 md:pl-16`) yang menggabungkan `ContactHero`, `ContactInfo`, serta `ContactForm` / success / error states.
- **Public API Gateway** (`src/features/contact/index.ts`):
  - Mengekspor `ContactContent`, `useContactForm`, dan types.

### B. Widget Layer (`src/widgets/home/`)
- **ContactSection Widget** (`src/widgets/home/ContactSection.tsx`):
  - Widget pembungkus seksi yang mengintegrasikan `SectionContainer` (`id="contact"`, `className="pt-16 sm:pt-24 lg:pt-32"`), `SectionIndicator` (`number="09"`), dan `ContactContent`.

### C. Navigation Integration (`src/shared/constants/navigation.ts`)
- `CONTACT_LINK` terhubung dengan ID seksi `#contact`.

---

## 🎨 2. Standar Styling, Theme Adaptation, & Sistem Animasi

- **Theme Adaptation (Light & Dark Mode)**:
  - Surface Containers: `bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border`
  - Text Headings: `text-slate-900 dark:text-white`
  - Text Paragraphs / Labels: `text-slate-600 dark:text-slate-400` / `text-slate-500`
  - Accent Highlight: `text-accent`, `bg-accent`
  - Form Focus Effect: Transition border accent dan underline bottom line `group-focus-within:w-full`.
- **Standard Left Padding**:
  - Device Mobile (`< 768px`): `pl-0` (menggunakan 100% lebar layar).
  - Device Desktop (`md+`): `md:pl-16` (ruang 64px presisi untuk `SectionIndicator`).
- **Animations (`FadeIn` & Micro-interactions)**:
  - `ContactHero`: `FadeIn delay={0.1} direction="up"`
  - `ContactInfo`: `FadeIn delay={0.2} direction="up"`
  - `ContactForm`: `FadeIn delay={0.3} direction="up"`
  - Micro-interactions: Hover translate pada icon arrow (`group-hover:translate-x-1`), rotate animation pada tombol refresh, serta pulsing dot indicator pada availability badge.

---

## 📏 3. Urutan Seksi & Section Indicator

```tsx
// 1. HeroSection.tsx (#hero) -> Indicator "01"
// 2. AboutSection.tsx (#about) -> Indicator "02"
// 3. CurrentlySection.tsx (#currently) -> Indicator "03"
// 4. WorkSection.tsx (#work) -> Indicator "04"
// 5. LabSection.tsx (#lab) -> Indicator "05"
// 6. StoriesSection.tsx (#stories) -> Indicator "06"
// 7. JourneySection.tsx (#journey) -> Indicator "07"
// 8. CertificatesSection.tsx (#certificates) -> Indicator "08"
// 9. ContactSection.tsx (#contact -> Indicator "09")
<SectionIndicator number="09" showTopLine={true} bottomLineFull={true} />
```

---

## 🧪 4. Verification Status
- **TypeScript Compiler**: `npx tsc --noEmit` ➔ **0 Error (Clean)**.
- **ESLint Linting**: `npm run lint` ➔ **0 Error, 0 Warning (Passed)**.
- **Production Build**: `npm run build` ➔ **Compiled & Prerendered Successfully (Next.js Turbopack)**.
