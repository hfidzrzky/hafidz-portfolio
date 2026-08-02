# Development Guide

Dokumen ini berisi panduan teknis bagi pengembang untuk menjalankan, membangun, dan menguji proyek **hafidz-portfolio**.

---

## 1. Prasyarat Sistem

Sebelum menjalankan proyek, pastikan lingkungan pengembang telah memenuhi prasyarat berikut:
- **Node.js**: v18.x / v20.x atau versi terbaru yang didukung oleh Next.js 16.
- **npm**: Package manager bawaan Node.js.

---

## 2. Environment Variables

Saat ini proyek tidak memerlukan variabel lingkungan khusus (file `.env` atau `.env.example` *belum diimplementasikan*). Seluruh konfirmasi meta data SEO default dan aset statis dimuat langsung via kode.

---

## 3. NPM Scripts

Perintah-perintah berikut terdefinisi pada file [`package.json`](file:///d:/Projects/hafidz-portfolio/package.json):

### A. Menjalankan Development Server
Menjalankan dev server Next.js secara lokal dengan fitur Hot-Reloading:
```bash
npm run dev
```
Akses aplikasi di browser pada alamat: `http://localhost:3000`.

### B. Membangun Production Build
Melakukan kompilasi dan optimasi bundle untuk produksi:
```bash
npm run build
```

### C. Menjalankan Production Server
Menjalankan server produksi dari hasil kompilasi `npm run build`:
```bash
npm start
```

### D. Menjalankan Linter Kode
Melakukan verifikasi dan static code analysis menggunakan ESLint v9:
```bash
npm run lint
```

---

## 4. Environment Testing & Verification

- **Unit / Integration / E2E Testing**:  
  *Belum diimplementasikan*. Saat ini proyek belum mengonfigurasi framework pengujian otomatis seperti Jest, Vitest, Cypress, atau Playwright.

---

## 5. Troubleshooting & Masalah Umum

1. **Error Module Not Found pada Path Alias (`@/`)**:
   - Pastikan IDE membaca konfigurasi [`tsconfig.json`](file:///d:/Projects/hafidz-portfolio/tsconfig.json) dengan benar.
   - Bersihkan cache Next.js dengan menghapus folder `.next/` dan jalankan ulang `npm run dev`.

2. **Gagal Kompilasi Tailwind CSS v4**:
   - Proyek menggunakan `@tailwindcss/postcss` versi 4. Pastikan file [`postcss.config.mjs`](file:///d:/Projects/hafidz-portfolio/postcss.config.mjs) mengimpor `@tailwindcss/postcss`.
