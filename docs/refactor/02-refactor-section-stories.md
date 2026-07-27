# 📋 PRD Refactoring Section Stories (`#stories`, Indicator `06`)

Dokumen spesifikasi arsitektur, skema data, pemisahan komponen atomik, logik pola berulang (*alternating layout*), adaptasi tema, dan indikator seksi untuk **Section Stories (`src/features/stories/`)**.

---

## 🎯 1. Tujuan Refactoring

1. **FSD Architecture**: Mentransformasi file monolithic `stories.html` menjadi modul terstruktur di bawah `src/features/stories/` dan `src/widgets/home/`.
2. **Automated Alternating Layout**: Mengotomatisasi tata letak berganti-ganti (*zig-zag rhythm*):
   - **Index Genap / Story Ganjil (01, 03, ...)**: Gambar Kiri | Card Teks Kanan.
   - **Index Ganjil / Story Genap (02, 04, ...)**: Card Teks Kiri | Gambar Kanan.
3. **SSoT (Single Source of Truth)**: Seluruh data cerita (judul, kategori, deskripsi, gambar, lokasi, tanggal, tahun) dikelola terpusat di `stories-mock.ts`. Menambah cerita baru cukup dengan menambahkan objek data di mock file tanpa mengubah komponen UI.
4. **SRP (Single Responsibility Principle)**: Memecah UI menjadi komponen-komponen atomik kecil yang reusable, maintainable, dan memiliki satu tanggung jawab spesifik.
5. **Theme Adaptation & Section Indicator Continuity**: Mengadopsi Light/Dark mode penuh serta menyambungkan garis indikator nomor `06` secara kontinu dari seksi `05` (Lab).

---

## 📂 2. Arsitektur FSD (`src/features/stories/` & `src/widgets/home/`)

```text
src/
├── features/
│   └── stories/
│       ├── types/
│       │   └── index.ts               # Interface & Type definitions
│       ├── data/
│       │   └── stories-mock.ts        # SSoT Mock Data (Stories, Header, Archives)
│       ├── hooks/
│       │   └── use-stories.ts         # Custom Hook penyedia data & helper
│       ├── components/
│       │   ├── StoriesHeader.tsx      # Header Intro (#stories, Badge, TapeText, Stats)
│       │   ├── YearDivider.tsx        # Static Year Divider (2026, Badge "LATEST ARCHIVES")
│       │   ├── StoryImage.tsx         # Atom: Kontainer gambar, Watermark index, Corner accents
│       │   ├── StoryContent.tsx       # Atom: Card Teks (Kategori, Judul, Deskripsi, Meta Footer)
│       │   ├── ConnectingThread.tsx   # Atom: Garis vertikal tipis penghubung antar-cerita
│       │   ├── StoryCard.tsx          # Molekul: Orchestrator layout zig-zag (Odd/Even)
│       │   ├── StoriesList.tsx        # Organisme: Iterasi cerita per tahun dengan auto-alternating logic
│       │   └── StoriesContent.tsx     # Layout Orchestrator (Standard padding md:pl-16)
│       └── index.ts                   # Public API Gateway
└── widgets/
    └── home/
        └── StoriesSection.tsx         # Widget Pembungkus Seksi (#stories, Indicator "06")
```

## 📐 3. Skema Data & Types Layer (src/features/stories/types/index.ts)

```TypeScript
export type StoryCategory = 
  | 'EVENT & LEARNING' 
  | 'PROJECT & ARCHITECTURE' 
  | 'COMMUNITY & TALK' 
  | 'MILESTONE';

export interface StoryMeta {
  locationOrRole: string; // Misal: "Bandung, ID" atau "Tech Lead Role"
  date: string;           // Misal: "APR 2026"
  iconType: 'location' | 'terminal' | 'calendar';
}

export interface StoryItem {
  id: string;
  category: StoryCategory;
  title: string[];        // Array string untuk mendukung break line (e.g. ["Dicoding", "Developer", "Conference"])
  description: string;
  imageUrl: string;
  imageAlt: string;
  meta: StoryMeta;
}

export interface YearArchiveGroup {
  year: number;
  badgeText: string;      // Misal: "LATEST ARCHIVES"
  stories: StoryItem[];
}

export interface StoriesHeaderData {
  sectionTag: string;
  badgeText: string;
  titlePart1: string;     // "Moments That"
  titlePart2: string;     // "Shaped"
  tapeText: string;       // "The Journey."
  description: string;
  recordedEventsCount: string; // "02+"
  currentYear: string;         // "26"
}

export interface StoriesData {
  header: StoriesHeaderData;
  archives: YearArchiveGroup[];
}
```

## 🧩 4. Pemisahan Komponen UI Atomik (SRP)

| Nama Komponen | Tanggung Jawab Utama (SRP) |
| :--- | :--- |
| `StoriesHeader` | Memproses & menampilkan hero intro seksi *stories* (Badge, `TapeText`, deskripsi, & statistik cerita). |
| `YearDivider` | Menampilkan pembatas tahun statis (*static year anchor*) beserta garis gradien & *badge archive*. |
| `StoryImage` | Menampilkan gambar dengan rasio 16/10, filter *grayscale-to-color* saat *hover*, watermark `/ 01`, dan *corner border accent*. |
| `StoryContent` | Menampilkan *card surface* berisi tag kategori, judul `h3`, pemisah garis, deskripsi, dan *editorial meta footer*. |
| `ConnectingThread` | Menampilkan garis penghubung vertikal tipis di antara dua cerita secara visual. |
| `StoryCard` | Menerima data `story` dan prop `index`/`isReversed`. Mengatur susunan grid 12-kolom dan order responsif. |
| `StoriesList` | Melakukan *mapping* data `archives`, menghitung indeks ganjil/genap, dan menyalurkannya ke `StoryCard`. |
| `StoriesContent` | Membungkus seluruh elemen dengan padding standar `pl-0 md:pl-16` agar sebaris dengan `SectionIndicator`. |

## 🔄 5. Otomatisasi Alternating Layout Logic (Zig-Zag Pattern)
Logika tata letak berganti-ganti dihitung secara otomatis di dalam StoriesList dan StoryCard berdasarkan indeks array (index):

```TypeScript
// Di dalam StoryCard.tsx
const isEven = index % 2 === 0; 

// Formatter Indeks Watermark (e.g., 0 -> "/ 01", 1 -> "/ 02")
const formattedIndex = `/ ${String(index + 1).padStart(2, '0')}`;
```

### Konfigurasi Class Tailwind untuk Alternating Grid:
1. Story 01, 03, ... (isEven === true):
- StoryImage Container: lg:col-span-7 order-1
- StoryContent Card: lg:col-span-5 order-2 lg:-ml-12 (Overlap ke arah kiri gambar)
- Watermark & Corner Accent: Berada di Sudut Kiri Atas & Kanan Bawah.

2. Story 02, 04, ... (isEven === false):
- StoryContent Card: lg:col-span-5 order-2 lg:order-1 lg:-mr-12 (Overlap ke arah kanan gambar)
- StoryImage Container: lg:col-span-7 order-1 lg:order-2
- Watermark & Corner Accent: Berada di Sudut Kanan Atas & Kiri Bawah.

## 🎨 6. Standar Styling & Adaptasi Tema (Light & Dark Mode)
Sesuai dengan standar refactoring pada Section Lab (05):

1. Background & Card Surface:
- Main Background: bg-light-bg dark:bg-dark-bg (#080B12)
- Card Surface: bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border

2. Typography:
- Headings/Title: text-slate-900 dark:text-white
- Paragraph/Meta: text-slate-600 dark:text-slate-400
- Accent Color: text-accent (#4F7CFF) / bg-accent

3. Left Padding Standard:
- Mobile (< 768px): pl-0
- Desktop (md+): md:pl-16 (Memberikan ruang 64px untuk SectionIndicator).

4. Animations (motion/react):
- Membungkus StoryCard dengan FadeIn staggered animation (delay={index * 0.15}).

## 🔗 7. Widget Integration (src/widgets/home/StoriesSection.tsx)

```TypeScript
import { SectionContainer } from '@/shared/components/layout/SectionContainer';
import { SectionIndicator } from '@/shared/components/layout/SectionIndicator';
import { StoriesContent } from '@/features/stories';

export function StoriesSection() {
  return (
    <SectionContainer id="stories">
      {/* Indicator 06 Kontinu dari Lab (05) */}
      <SectionIndicator bottomLineFull="{true}" number="06" showTopLine="{true}"/>
      <StoriesContent/>
    </SectionContainer>
  );
}
```

## ✅ 8. Verifikasi Status & Kriteria Selesai (Definition of Done)
1. Auto-Alternating Verification: Saat objek baru ditambahkan ke stories-mock.ts, layout secara otomatis membentuk pola zig-zag tanpa perlu mengubah kode komponen.
2. TypeScript Compilation: Menjalankan npx tsc --noEmit tanpa error type.
3. Build Check: Executing npm run build berhasil terkompilasi bersih (Next.js Turbopack).
4. Theme Consistency: Komponen tampil konsisten baik dalam Light Mode maupun Dark Mode.