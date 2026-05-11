# Vinicius Marques — Portfólio

Portfólio pessoal de Vinicius Marques, Engenheiro de Dados Jr. com identidade pixel-art/retrô, tema dia/noite e conteúdo em Português Brasileiro.

**Live:** [blzvini.github.io/website](https://blzvini.github.io/website) <!-- atualize se necessário -->

---

## Stack

- **Next.js 13.5.6** (Pages Router)
- **React 18**
- **CSS Modules** — sem Tailwind, sem CSS-in-JS
- **Vercel Analytics**

---

## Seções

| ID | Seção |
|---|---|
| `sobre` | Quem sou · Formação · Certificados |
| `experiencias` | Timeline de experiências |
| `habilidades` | Tech stack (Python, SQL, PySpark, Azure…) |
| `projetos` | Projetos do GitHub com estrelas ao vivo |
| `contato` | GitHub · LinkedIn · e-mail |

---

## Estrutura

```
pages/
  index.js          # Página única — monta todas as seções
  _app.js           # Gerencia tema (dark/light) + stars
  _document.js      # Injeta script anti-flash de tema

components/
  Header.js         # Hero + sol/lua animado + pipa que segue o cursor
  About.js          # Tabs "Quem sou" / "Formação" + TerminalChat
  Experiences.js    # Timeline de experiências
  Skills.js         # Cards de habilidades técnicas
  Projects.js       # Busca projetos da API do GitHub
  Contact.js        # Links de contato
  FloatingNav.js    # Nav flutuante (aparece após scroll > 320px)
  Footer.js
  WelcomeModal.js   # Modal ASCII na primeira visita
  TerminalChat.js   # Chat estilo terminal na seção About

styles/
  tokens.css        # Todas as CSS custom properties (cores, tipografia, espaçamento)
  base.css          # Reset + utilitários globais (.container, .btn, .sr-only)
  globals.css       # Entry point — importa tokens.css e base.css

public/
  cv.pdf            # Currículo para download
  foto.jpeg         # Foto de perfil (avatar)
  favicon.svg
```

---

## Tema

Dark mode via classe `theme-dark` em `<body>`. Alternado pelo Header e FloatingNav. Preferência salva em `localStorage` (`site-theme`). Script em `_document.js` previne flash antes da hidratação.

---
