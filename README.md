# Emmanuel Owusu — Eklipse Portfolio

A premium cinematic developer portfolio website for Emmanuel Owusu (@Eklipse), a Frontend Developer and Computer Science student at Kumasi Technical University.

## Project Overview

**Type**: React + TypeScript + Tailwind CSS Single Page Application  
**Theme**: Dark futuristic with electric blue (#3B82F6) and purple (#8B5CF6) accents  
**Background**: #0B0F19 (deep dark navy)

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3 + custom CSS animations
- **Animation**: Custom hooks (no external animation library needed)
- **Fonts**: Inter (body) + JetBrains Mono (code/tech elements)

## Project Structure

```
src/
  App.tsx                      # Entry — renders Portfolio
  index.css                    # Global styles, animations, glassmorphism
  components/
    Portfolio.tsx               # Root layout with custom cursor + particles
    sections/
      Navbar.tsx                # Fixed navigation with active section detection
      HeroSection.tsx           # Full-screen cinematic intro with typing effect
      TrustMetrics.tsx          # Animated counter stats grid
      FeaturedProject.tsx       # Committed By Faith highlight
      ProjectGallery.tsx        # Interactive 4-card project grid with tilt
      SkillsSection.tsx         # Tech icons grid + proficiency bars
      BuilderPhilosophy.tsx     # 4-card dev principles
      DevelopmentJourney.tsx    # Vertical alternating timeline
      GitHubActivity.tsx        # Contribution graph + repository list
      ContactSection.tsx        # Contact form + direct contact info
      FooterSection.tsx         # Minimal elegant footer
  hooks/
    useCustomCursor.ts          # Custom cursor dot + ring with lag effect
    useParticles.ts             # Canvas particle animation system
    useScrollReveal.ts          # IntersectionObserver for scroll reveals
    useTypingEffect.ts          # Typing/deleting text animation
  assets/
    portrait.png               # Developer portrait (AI generated, replace with real photo)
```

## Features Implemented

1. **Hero Section** — Animated gradient bg, floating particles, typing effect (React/Next.js/JS/UI Engineering), portrait with glow border & tilt effect, scroll indicator
2. **Trust Metrics** — Animated counters: 10+ Projects, 12+ Technologies, 3+ Live Platforms, 20+ Students Mentored
3. **Featured Project** — "Committed By Faith" faith-based dating platform with app mockup
4. **Project Gallery** — 4 projects with 3D tilt cards, tech tags, GitHub/demo links
5. **Skills & Technologies** — Frontend/Backend/Tools categories + proficiency bars
6. **Builder Philosophy** — 4 principle cards with hover glow effects
7. **Development Timeline** — 2023-2026 alternating vertical timeline
8. **GitHub Activity** — Generated contribution graph + repo list
9. **Contact Section** — Collaboration options, animated form, direct contacts
10. **Footer** — Navigation links, social icons, copyright

## Personal Details Encoded

- **Name**: Emmanuel Owusu (Eklipse)
- **University**: Kumasi Technical University
- **GitHub**: https://github.com/eklipse1999
- **LinkedIn**: https://www.linkedin.com/in/owusu-emmanuel
- **Email**: eklipse1999@gmail.com

## Development Notes

- The portrait image at `src/assets/portrait.png` is AI-generated. Replace with Emmanuel's actual photo for production.
- All sections use `.reveal` / `.reveal-left` / `.reveal-right` CSS classes triggered by IntersectionObserver for scroll animations.
- Custom cursor is hidden on mobile via CSS `@media (max-width: 768px)`.
- The contact form is a UI-only demo — wire it to a backend/email service for production use.

## Build Commands

```bash
npm install    # Install dependencies
npm run build  # Production build to /dist
npm run dev    # Development server
```
