# BIBLIOTHECA

**A high-aesthetic, Renaissance-style digital museum for your Markdown artifacts.**

BIBLIOTHECA transforms simple Markdown files into an immersive, curated gallery experience. Inspired by the Italian Renaissance, it leverages Chiaroscuro (light/dark contrast), elegant serif typography, and rich textures to elevate digital knowledge into a work of art.

## 🎨 The Aesthetic Vision

- **Chiaroscuro Atmosphere**: A moody, charcoal-textured background with radial "spotlight" gradients that focus the eye on your content.
- **The Golden Frame**: Every artifact is elegantly encased in a double-gold border with 3D depth shadows.
- **Universal Typography**: A bespoke pairing of `Cinzel` (authoritative headings) and `EB Garamond` (classic body text). For multi-lingual support, we integrate `Noto Serif SC` to bring the same scholarly weight to Chinese text.
- **Micro-interactions**: Smooth transitions and hover effects that simulate walking through a physical gallery space.

## 🏛️ Interactive Curation

While the museum can serve as a static archive, its heart is the **Curator's Desk**:

- **Instant Digitization**: Visit the `/curator` page to drag and drop any `.md` file. It renders instantly in the browser without any server-side storage or processing.
- **Privacy First**: Your documents never leave your machine; the conversion happens entirely on the client side.
- **Dynamic Watermarking**: Artifacts without cover images automatically receive custom typographic cover art based on their title.

## 🚀 Experience it Locally

```bash
# Prepare the edifice
npm install

# Open the gallery (http://localhost:4321)
npm run dev

# Construct for production
npm run build
```

## 📜 Metadata Support

The museum respects your manuscript's metadata (YAML frontmatter):

```yaml
---
title: "The Nature of Intelligence"
author: "Aristotle"
date: "2023-10-27"
description: "A profound exploration into the origins of thought..."
cover: "https://example.com/cover.jpg" # Optional aesthetic cover
---
```

## 🛠️ Built for the Modern Scholar
- **Core**: [Astro](https://astro.build) (Static optimization)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (v4)
- **Parsing**: [Marked](https://marked.js.org/)

---
*Ars Longa, Vita Brevis.*
