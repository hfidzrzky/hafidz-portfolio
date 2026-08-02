# Portfolio Documentation

Dokumentasi teknis ini memberikan gambaran komprehensif mengenai arsitektur, struktur folder, model data, aturan dependensi, serta alur pengembangan pada proyek **hafidz-portfolio**.

## Ringkasan Dokumen

Dokumentasi ini disusun secara modular untuk memisahkan tanggung jawab setiap topik:

- **[Arsitektur Sistem (`docs/architecture.md`)](file:///d:/Projects/hafidz-portfolio/docs/architecture.md)**  
  Menjelaskan arsitektur perangkat lunak yang menerapkan variasi *Feature-Sliced Design* (FSD) pada Next.js App Router, mencakup pembagian layer (`app`, `widgets`, `features`, `shared`), pola data flow unidireksional, serta strategi *Theme Management* dan *Client Interactivity*.

- **[Struktur Folder (`docs/folder-structure.md`)](file:///d:/Projects/hafidz-portfolio/docs/folder-structure.md)**  
  Menyajikan direktori proyek secara rinci dari tingkat root hingga komponen feature, beserta penjelasan mengenai tujuan dari setiap file dan folder utama.

- **[Model Data (`docs/content-model.md`)](file:///d:/Projects/hafidz-portfolio/docs/content-model.md)**  
  Mendokumentasikan seluruh skema TypeScript (interface/type) dan *mock data* aktual yang digunakan di setiap feature (Hero, About, Currently, Work, Lab, Stories, Journey, Certificates, Contact).

- **[Aturan Dependensi (`docs/dependency-rules.md`)](file:///d:/Projects/hafidz-portfolio/docs/dependency-rules.md)**  
  Menjelaskan *Architectural Boundary & Imports Standard*, hierarki impor antar layer, aturan enkapsulasi melalui *Public API* (`index.ts`), serta konsistensi *Naming Convention*.

- **[Panduan Pengembangan (`docs/development.md`)](file:///d:/Projects/hafidz-portfolio/docs/development.md)**  
  Instruksi praktis untuk menjalankan dev server, melakukan linting, membangun *production build*, variabel lingkungan (environment variables), serta panduan *troubleshooting*.

---

## Prinsip Desain & Alasan Penyusunan

1. **Modularitas & Scalability**: Dipisah per domain dokumentasi agar mudah dipelihara dan tidak terjadi *cognitive overload* saat membaca.
2. **Strict Non-Hallucination**: Seluruh dokumentasi mencerminkan 100% implementasi fakta kode aktual yang ada pada proyek tanpa merekayasa library, API endpoint, atau skema yang belum ada.