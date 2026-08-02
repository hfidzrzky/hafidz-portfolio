# Dependency Rules Documentation

Dokumen ini menjelaskan aturan batasan dependensi (*Architectural Boundaries*) antar layer dan standar konvensi pengkodean yang diterapkan pada proyek **hafidz-portfolio**.

---

## 1. Matrix Rule Import Antar Layer

Untuk menjaga keterikatan (*coupling*) tetap rendah dan modularitas tetap tinggi, impor kode mengikuti skema hierarki 1 arah (*Top-Down*):

```
+---------------------------------------------------+
| App Layer (src/app)                               |
+---------------------------------------------------+
       |                 |                 |
       v                 v                 v
+--------------+  +--------------+  +---------------+
| Widget Layer |  | Feature Layer|  | Shared Layer  |
+--------------+  +--------------+  +---------------+
       |                 |
       v                 v
+--------------+  +---------------+
| Feature Layer|  | Shared Layer  |
+--------------+  +---------------+
       |
       v
+---------------+
| Shared Layer  |
+---------------+
```

### Tabel Aturan Izin Import:

| Layer Pemanggil | Boleh Meng-import Dari Layer | Dilarang Meng-import Dari Layer |
| :--- | :--- | :--- |
| **`app`** | `widgets`, `features`, `shared` | *(None)* |
| **`widgets`** | `features`, `shared` | `app` |
| **`features`** | `shared`, *Feature lain (via Public API)* | `app`, `widgets` |
| **`shared`** | `shared` (internal) | `app`, `widgets`, `features` |

---

## 2. Public API Pattern (Barrel Exports)

Setiap modul di dalam `src/features/{feature_name}/` **wajib** menyediakan file entrypoint [`index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/about/index.ts) yang meng-export atribut publik (Komponen, Hooks, Types, Data).

### Aturan Strict:
- Layer luar (`app`, `widgets`, atau `features` lain) **hanya boleh** meng-import elemen modul melalui barrel file `index.ts`.
- **Dilarang** melakukan import langsung ke dalam internal subfolder modul, misalnya:  
  ❌ *Salah*: `import { AboutContent } from '@/features/about/components/AboutContent'`  
  ✅ *Benar*: `import { AboutContent } from '@/features/about'` atau `import { AboutContent } from '@/features/about/index'`

---

## 3. Path Alias Standard

Proyek menggunakan alias path TypeScript yang dikonfigurasi pada [`tsconfig.json`](file:///d:/Projects/hafidz-portfolio/tsconfig.json):

```json
"paths": {
  "@/*": ["./src/*"]
}
```

- `@/app/*` -> Mengakses App Layer
- `@/widgets/*` -> Mengakses Widget Layer
- `@/features/*` -> Mengakses Feature Layer
- `@/shared/*` -> Mengakses Shared Layer

---

## 4. Naming Convention Standard

Mengacu pada aturan resmi di [`docs/rules/project-brief.md`](file:///d:/Projects/hafidz-portfolio/docs/rules/project-brief.md):

1. **Folder**: `kebab-case` (Contoh: `src/features/theme-toggle/`)
2. **File Komponen React**: `PascalCase` (Contoh: `CertificateLightbox.tsx`)
3. **File Non-Komponen/Utils/Hooks**: `kebab-case` (Contoh: `use-about.ts`, `utils.ts`)
4. **Variabel & Fungsi**: `camelCase` (Contoh: `activeCategory`, `formatDate()`)
5. **Konstanta Global**: `SCREAMING_SNAKE_CASE` (Contoh: `NAV_ITEMS`)
6. **Types / Interfaces**: `PascalCase` (Contoh: `WorkProjectItem`)
