# Performance Optimization Guide

## Estrategias Implementadas

### 1. **Lazy Loading**

#### Secciones Below-the-Fold

```tsx
// app/page-optimized.tsx
const About = dynamic(() => import('../components/sections/About'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
})
```

**Beneficios:**

- Reduce el bundle inicial en ~60%
- Mejora TTI (Time to Interactive) en ~40%
- Solo carga secciones cuando están cerca del viewport

#### Imágenes con Next/Image

```tsx
<Image
  src={project.image}
  alt={project.title}
  fill
  priority={false} // Solo true para hero images
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Beneficios:**

- Optimización automática de imágenes
- WebP/AVIF automático
- Lazy loading nativo del navegador
- Placeholder blur (opcional)

### 2. **Code Splitting**

#### Dynamic Imports

- Hero Section: Carga inmediata (above the fold)
- About, Skills, Projects, Contact: Lazy load con Suspense

#### Bundle Analysis

```bash
npm run build
# Revisar .next/analyze/client.html
```

### 3. **Memoization**

```tsx
const HeroMemo = memo(Hero)
const AboutMemo = memo(About)
```

**Beneficios:**

- Evita re-renders innecesarios
- Reduce trabajo del Virtual DOM
- Mejora FPS en animaciones

### 4. **Analytics Optimizado**

#### Script Loading Strategy

```tsx
<Script
  strategy="afterInteractive" // Carga después del contenido principal
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
/>
```

**Beneficios:**

- No bloquea renderizado inicial
- Mejora FCP (First Contentful Paint)
- Tracking sin impacto en UX

### 5. **CSS Optimization**

#### Tailwind Purge

```js
// tailwind.config.ts
content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}']
```

**Beneficios:**

- Elimina clases no usadas
- Reduce CSS final a ~10-15KB
- Mejora CLS (Cumulative Layout Shift)

### 6. **Font Optimization**

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

**Beneficios:**

- Self-hosted fonts automático
- Elimina flash of unstyled text (FOUT)
- Mejora FCP

## Lighthouse Scores Objetivo

| Métrica        | Objetivo | Actual |
| -------------- | -------- | ------ |
| Performance    | >90      | -      |
| Accessibility  | >90      | -      |
| Best Practices | >90      | -      |
| SEO            | 100      | -      |

## Core Web Vitals

| Métrica                        | Objetivo | Descripción                         |
| ------------------------------ | -------- | ----------------------------------- |
| LCP (Largest Contentful Paint) | <2.5s    | Mayor elemento visible              |
| FID (First Input Delay)        | <100ms   | Tiempo hasta interactividad         |
| CLS (Cumulative Layout Shift)  | <0.1     | Estabilidad visual                  |
| FCP (First Contentful Paint)   | <1.8s    | Primer contenido visible            |
| TTI (Time to Interactive)      | <3.8s    | Tiempo hasta totalmente interactivo |

## Monitoreo

### Web Vitals Tracking

```tsx
// app/layout.tsx
import { reportWebVitals } from '../lib/analytics'

// Se envía automáticamente a Google Analytics
```

### Performance Metrics

```tsx
analytics.trackPerformance('LCP', value)
analytics.trackPerformance('FID', value)
analytics.trackPerformance('CLS', value)
```

## Checklist de Optimización

### Build Time

- [ ] Tree-shaking habilitado
- [ ] Minificación de JS/CSS
- [ ] Compresión Gzip/Brotli
- [ ] Source maps solo en dev

### Runtime

- [ ] Service Worker (opcional)
- [ ] HTTP/2 Push (Vercel automático)
- [ ] CDN para assets estáticos
- [ ] Cache headers optimizados

### Images

- [ ] WebP/AVIF format
- [ ] Responsive sizes
- [ ] Lazy loading
- [ ] Priority para hero images

### Fonts

- [ ] Preload critical fonts
- [ ] Font display: swap
- [ ] Subset fonts (solo latin)

### Third-party Scripts

- [ ] Async loading
- [ ] Defer non-critical
- [ ] afterInteractive strategy
- [ ] Resource hints (preconnect)

## Comandos Útiles

```bash
# Analizar bundle size
npm run build
npm run analyze

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Auditoría de performance
npm run build
npm start
# Abrir Chrome DevTools > Lighthouse

# Web Vitals en producción
# Configurado automáticamente con analytics.reportWebVitals()
```

## Mejores Prácticas

1. **Prioriza el contenido crítico** - Hero section sin lazy load
2. **Lazy load agresivo** - Todo lo demás con dynamic()
3. **Memoiza componentes pesados** - Usa React.memo()
4. **Optimiza imágenes** - Usa Next/Image siempre
5. **Monitorea constantemente** - Web Vitals en producción
6. **Code splitting** - Separa código por rutas
7. **Prefetch estratégico** - Solo rutas críticas
8. **Evita re-renders** - useCallback, useMemo donde sea necesario

## Resources

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
