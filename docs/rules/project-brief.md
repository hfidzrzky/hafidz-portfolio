# Naming Convention

Aturan penamaan agar project konsisten dan mudah dibaca.

---

## 1. Folder
- Gunakan **kebab-case**.
- Contoh: `features/`, `widgets/`, `folder-structure/`
- Hindari: `Features/`, `projectData/`

---

## 2. File
- **Component React**: `PascalCase`
  - Contoh: `ProjectCard.tsx`, `HomePage.tsx`
- **File biasa / data / utils**: `kebab-case`
  - Contoh: `projects.ts`, `format-date.ts`

---

## 3. React Components
- Gunakan **PascalCase**
- Contoh: `ProjectCard`, `StoryList`, `HomePage`

---

## 4. Variables & Functions
- Gunakan **camelCase**
- Contoh:
  - `featuredProjects`
  - `storyCount`
  - `formatDate()`

---

## 5. Constants
- Gunakan **SCREAMING_SNAKE_CASE**
- Contoh: `PROJECT_CATEGORIES`

---

## 6. Types / Interfaces
- Gunakan **PascalCase**
- Contoh: `Project`, `Story`, `Certificate`

---

## 7. Mock Data
- Gunakan **camelCase**
- Contoh: `projects`, `stories`, `certificates`

---

## 8. Object Fields
- Gunakan **camelCase**
- Contoh: `createdAt`, `coverImage`, `isFeatured`

---

## 9. Hooks
- Awali dengan `use`
- Contoh: `useProjects()`, `useScrollSpy()`

---

## 10. Routes / Slug
- Gunakan **kebab-case**
- Contoh: `/work/sinemus`, `/stories/my-story`

---

## 11. CSS Class
- Gunakan **kebab-case** jika manual
- Contoh: `project-card`

---

## 12. Feature Folder
- Gunakan nama domain yang singkat
- Contoh: `work/`, `stories/`, `lab/`, `journey/`

---

## Summary
- Folder → `kebab-case`
- File component → `PascalCase`
- File non-component → `kebab-case`
- Component → `PascalCase`
- Variable / function → `camelCase`
- Constant → `SCREAMING_SNAKE_CASE`
- Type / interface → `PascalCase`
- Mock data → `camelCase`
- Object fields → `camelCase`
- Route / slug → `kebab-case`

---

## Golden Rule
Pakai nama yang paling jelas, paling sederhana, dan paling mudah ditebak.