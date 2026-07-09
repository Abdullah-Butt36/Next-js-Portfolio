<div align="center">

# 🌐 Abdullah Butt — Personal Portfolio

### A modern, dark-themed developer portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**
</div>

---

## ✨ Overview

A premium, fully responsive personal portfolio showcasing skills, projects, education, and a working contact form — all wrapped in a sleek **dark glassmorphism** design system with subtle radial glow animations and staggered fade-in transitions.

---

## 📸 Key Highlights

| Feature | Description |
|---|---|
| 🎨 **Dark Glassmorphism** | Frosted-glass card effects with `backdrop-blur`, subtle border glows, and gradient accents |
| 🌊 **Animated Blobs** | Radial-gradient background blobs with pulse and float animations |
| ⚡ **Static Generation** | All pages are statically prerendered at build time for blazing-fast load speeds |
| 📧 **Working Contact Form** | Fully functional email form powered by **EmailJS** — no backend needed |
| 📱 **Fully Responsive** | Optimized layouts for desktop, tablet, and mobile viewports |
| 🔍 **SEO Optimized** | Proper meta tags, heading hierarchy, and semantic HTML on every page |
| 🖼️ **Next.js Image** | Optimized image loading with `next/image` for performance |
| 🎭 **CSS Animations** | Custom keyframe animations (fade-in, float, pulse, heartbeat) — no Framer Motion dependency |

---

## 🗂️ Project Structure

```
personal-portfolio/
├── app/
│   ├── layout.tsx          # Root layout — Navbar, Footer, fonts, global metadata
│   ├── globals.css         # Tailwind v4 imports, custom keyframes, scrollbar hiding
│   ├── page.tsx            # 🏠 Home — Hero section with profile image & CTA
│   ├── about/
│   │   └── page.tsx        # 👤 About — Journey, stats grid, tech stack pills
│   ├── education/
│   │   └── page.tsx        # 🎓 Education — Timeline cards with SVG icons
│   ├── skills/
│   │   └── page.tsx        # 🛠️ Skills — Category cards with tech tag pills
│   ├── projects/
│   │   └── page.tsx        # 💼 Projects — Project cards with image overlays
│   └── contact/
│       ├── layout.tsx      # SEO metadata (separated for client component)
│       └── page.tsx        # 📧 Contact — Form + info cards + social links
├── components/
│   ├── Navbar.tsx          # Responsive navigation with mobile hamburger menu
│   └── Footer.tsx          # Footer with social links
├── public/
│   ├── pic.jpg             # Profile photo
│   ├── Resume.pdf          # Downloadable resume
│   ├── codefix.jpg         # CodeFix project screenshot
│   ├── faran.jpg           # Faran Traders project screenshot
│   └── realstate.jpg       # Real Estate project screenshot
└── package.json
```

---

## 🚀 Pages

### 🏠 Home
Hero section with animated profile image ring, gradient text, role badges, and CTA buttons (View Projects / Download Resume). Three animated background blobs add depth.

### 👤 About
Two-column layout: personal journey card (left) and stats grid + tech stack pills (right). A "What Drives Me" passion block sits below with a heartbeat-animated icon.

### 🎓 Education
Timeline-style cards for BS Computer Science, Full Stack Certification, and ICS. Each card features an SVG icon, institution details, and bullet-point highlights.

### 🛠️ Skills
Five glassmorphic category cards (Frontend Architecture, Backend & Cloud, Databases, UI & Animation, Tools & Testing) in a responsive 3→2→1 column grid. Each skill tag has a custom inline SVG icon.

### 💼 Projects
Stacked project cards with full-width screenshots. On hover, images scale up and a blurred overlay reveals GitHub and Live Demo buttons. Tech stack chips sit below each description.

### 📧 Contact
Split layout: contact info cards + social profile pills (left) and a fully functional EmailJS-powered contact form (right) with real-time validation, sending state, and success/error feedback.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5|
| **Styling** | Tailwind CSS v4 |
| **Font** | Outfit |
| **Email** | emailjs |
| **Images** | next/image |
| **Deployment** | Vercel |

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Abdullah-Butt36/Next-js-portfolio.git

# 2. Navigate to the project
cd personal-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000] in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start the production server
npm start
```

---

## 📧 EmailJS Configuration

The contact form uses **EmailJS** to send emails directly from the browser. The credentials are configured in [`app/contact/page.tsx`](app/contact/page.tsx):

```typescript
emailjs.sendForm(
  'service_3asji8p',    // Service ID
  'template_hgv93sh',   // Template ID
  form.current!,
  'iGwNSW8quH5PQNZ3N'  // Public Key
)
```

To use your own EmailJS account:
1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Set up an email service and template
3. Replace the Service ID, Template ID, and Public Key in the code above

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| 🔵 Cyan Accent | `#00d2ff` | Primary accent, gradients, badges, links |
| 🔷 Blue | `#3a7bd5` | Gradient endpoints, hover states |
| 🟣 Violet | `#7c3aed` | Background blob accents |
| 🌑 Dark BG | `#0a0f1e` → `#0d1b2a` | Page background gradients |
| ⬜ Slate Text | `#94a3b8` | Body text, descriptions |
| ⚪ Light Text | `#f1f5f9` | Headings, titles |

### Animations

| Name | Effect |
|---|---|
| `fade-in-left` | Slides in from left with opacity |
| `fade-in-right` | Slides in from right with opacity |
| `float-blob` | Subtle floating motion for background blobs |
| `pulse-slow` | Slow opacity pulsing for glow effects |
| `heartbeat` | Scale pulse for the passion section icon |
| `badge-pulse` | Box-shadow pulse for status badges |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Behavior |
|---|---|
| `≥1024px` (lg) | Full multi-column layouts |
| `≥768px` (md) | Adjusted padding, 2-column grids |
| `≥640px` (sm) | Form fields side-by-side |
| `<640px` | Single column, compact spacing |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Connect with Me


---

<div align="center">

**⭐ If you found this helpful, please give it a star!**

Made with ❤️ by **Abdullah Butt**

</div>
