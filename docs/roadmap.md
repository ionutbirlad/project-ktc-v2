# KTC v2 – Roadmap (Fase 1)

## 🧠 Filosofia

- milestone piccole e chiare
- task atomici
- niente over-engineering
- sviluppo incrementale
- allineamento al backlog

---

## 🟩 MILESTONE 1 — Setup progetto

### Obiettivo

Repository pronta + ambiente stabile

### Task

1. creare repository GitHub
2. inizializzare progetto Next.js (App Router + TypeScript)
3. configurare alias @/\*
4. configurare struttura src/
5. installare dipendenze base:
   - sass
   - framer-motion
   - storybook
6. configurare SCSS globale (index.scss)
7. setup CSS variables base (:root)
8. configurare ESLint + Prettier
9. configurare script:
   - lint
   - typecheck
   - build
10. setup CI (GitHub Actions):
    - npm ci
    - lint
    - typecheck
    - build
11. primo commit pulito + push

---

## 🟦 MILESTONE 2 — Design System (tokens)

### Obiettivo

Base visiva globale

### Task

1. creare struttura styles/
   - tokens/
   - foundations/
2. definire CSS variables:
   - colori
   - spacing
   - radius
   - typography base
3. import globale in index.scss
4. setup reset/base styles
5. verificare accesso globale ai token

---

## 🟨 MILESTONE 3 — Componenti UI base

### Obiettivo

Mini design system

### Task

1. setup Storybook
2. creare Button
3. creare Typography (heading, paragraph, label)
4. creare Container / Section
5. creare Card base
6. creare Badge (opzionale)
7. aggiungere SCSS Modules per ogni componente
8. creare stories Storybook per ogni componente
9. test visivo componenti

---

## 🟧 MILESTONE 4 — Domain + dati mock

### Obiettivo

Simulare contenuto reale

### Task

1. definire types di dominio:
   - Project
2. creare file mock data (es: projects.ts)
3. definire struttura dati coerente
4. test utilizzo dati nei componenti

---

## 🟥 MILESTONE 5 — Sections & Homepage

### Obiettivo

Prima pagina reale

### Task

1. creare HeroSection
2. creare ProjectsPreviewSection
3. creare AboutPreviewSection (opzionale)
4. creare layout homepage
5. comporre homepage usando sections
6. collegare dati mock
7. sistemare spacing e layout

---

## 🟪 MILESTONE 6 — Pagine secondarie

### Obiettivo

Navigazione base

### Task

1. creare pagina Projects
2. creare layout lista progetti
3. creare pagina About
4. collegare routing Next
5. test navigazione

---

## 🟫 MILESTONE 7 — Motion system

### Obiettivo

Effetto wow

### Task

1. creare MotionReveal
2. creare StaggerContainer
3. applicare animazioni alle sections
4. animazioni ingresso pagina
5. test fluidità
6. rifinire timing e easing

---

## ⚫ MILESTONE 8 — Polish finale

### Obiettivo

Rifinitura finale

### Task

1. sistemare spacing globali
2. uniformare typography
3. fix piccoli bug UI
4. pulizia codice
5. verificare build

---

## 🤖 Uso con Codex

Per ogni task:

"Implementa milestone X task Y rispettando il backlog KTC v2"

Workflow:
task → Codex → review → commit

---

## 🎯 Obiettivo fase 1

- homepage forte
- UI coerente
- mini design system completo
- base frontend solida
