# KTC v2 – Backlog iniziale

## 🧠 Visione generale

- Rebuild del progetto KTC con approccio **design-first**
- Obiettivo: passare da progetto tecnico (v1) a **prodotto coerente e curato (v2)**
- Focus su qualità percepita, UX e coerenza visiva
- Data inizio progetto: 4 maggio 2026
- Il progetto deve avere un forte effetto wow

---

## ⚙️ Stack tecnico

- Next.js (App Router)
- React
- TypeScript
- SCSS Modules
- Framer Motion
- Storybook

### Filosofia

- Poche librerie
- Solo se necessarie
- Component library custom
- Approccio pulito e controllato

---

## 🎨 Design System

### Token & styling

- CSS variables globali
- SCSS Modules locali

#### Convenzioni styling

- BEM
- Mobile-first
- Breakpoints:
  - 640px
  - 768px
  - 1024px
  - 1280px
- Media queries nello stesso file
- Nesting solo semantico

### Struttura componenti

- components/ui → base
- components → dominio

Regole:

- composizione, non duplicazione
- layout libero

---

## 🧩 Component Philosophy

- ui → generici
- sections → sezioni pagina
- motion → animazioni

Principi:

- no business logic nei componenti UI
- composizione
- semplicità

---

## 🧱 Approccio

- frontend-first
- niente:
  - auth
  - API
  - backend
- costruire:
  - UI
  - DS
  - pagine statiche

---

## 🖥️ Scope fase 1

- Homepage semplice
- Sezioni curate
- Pagine:
  - Projects
  - About (opzionale)

---

## ✨ Motion

- fade-in
- slide-up
- scale leggero
- stagger
- possibile glass effect

Regole:

- non animare tutto
- creare pattern riutilizzabili

---

## 📚 Storybook

Usato per:

- componenti ui
- motion base

Non per:

- pagine
- sezioni complete

---

## 📁 Struttura progetto

```text
src/
  app/
    layout.tsx
    page.tsx
    projects/
      page.tsx
    about/
      page.tsx

  assets/
    images/
    icons/

  components/
    ui/
    motion/
    sections/

  hooks/
  layouts/
  lib/

  styles/
    tokens/
    foundations/
    index.scss

  types/
  utils/
```

Note:

- app sostituisce pages
- niente main.tsx
- niente msw
- niente query

Evoluzione futura:

```text
src/app/
  (site)/
  (dashboard)/
```

---

## 🧩 Naming

- PascalCase per componenti
- PascalCase per file
- lowercase per root folders

---

## ⚙️ CI

- npm ci
- lint
- typecheck
- build

Obiettivo:

- codice sempre valido su main

---

## 🧪 Testing / Performance

- NON ora
- dopo fase UI

---

## 🤖 Codex Guidelines

- seguire backlog
- non aggiungere librerie
- non anticipare backend
- lavorare incrementale

---

## ✅ Definition of Done

- setup Next
- struttura pronta
- tokens
- componenti base
- Storybook
- homepage
- CI

---

## 💡 Principi

- semplicità
- coerenza
- no over-engineering

---

## 🚫 Evitare

- backend subito
- DS complesso
- template pronti

---

## 🎯 Obiettivo fase 1

- homepage forte
- UI coerente
- base solida
