# Analytics & Tracking Guide

## Google Analytics 4 Setup

### 1. Configuración Inicial

```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Estructura de Archivos

```
/lib/analytics.ts          # Funciones de tracking
/hooks/useAnalytics.ts     # Hook para page views
/app/layout.tsx            # Script de GA4
```

## Eventos Tracked

### 1. **Page Views**

Automático en cada cambio de ruta:

```tsx
useAnalytics() // En layout.tsx
```

### 2. **CTA Clicks**

```tsx
analytics.trackCTAClick('Hero', 'View My Work')
analytics.trackCTAClick('Hero', 'Contact Me')
```

**Ubicaciones:**

- Hero section: "View My Work", "Contact Me"
- About section: CTAs personalizados
- Projects: Enlaces a detalles

### 3. **Cambio de Tema**

```tsx
analytics.trackThemeChange('dark' | 'light')
```

**Triggered:**

- Al hacer clic en ThemeSwitcher
- Automático desde useThemeStore

### 4. **Cambio de Idioma**

```tsx
analytics.trackLanguageChange('es' | 'en')
```

**Triggered:**

- Al seleccionar idioma en LanguageSwitcher
- Automático desde useLanguageStore

### 5. **Form Submissions**

```tsx
analytics.trackFormSubmit('contact', true) // success
analytics.trackFormSubmit('contact', false) // error
```

**Triggered:**

- Al enviar formulario de contacto
- Incluye estado de success/error

### 6. **Project Views**

```tsx
analytics.trackProjectView('ecommerce-platform')
```

**Triggered:**

- Al visitar página de proyecto individual
- Slug del proyecto como label

### 7. **External Links**

```tsx
analytics.trackExternalLink(url, 'github' | 'demo' | 'social')
```

**Triggered:**

- Links a GitHub repositories
- Links a demos en vivo
- Links a redes sociales

### 8. **Social Media**

```tsx
analytics.trackSocialClick('GitHub' | 'LinkedIn')
```

**Triggered:**

- Íconos sociales en Hero
- Links en Contact section

### 9. **Web Vitals**

Automático para Core Web Vitals:

```tsx
reportWebVitals({ name: 'LCP', value: 1234, id: '...' })
```

**Métricas:**

- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- FCP (First Contentful Paint)
- TTFB (Time to First Byte)

## Dashboard de Google Analytics

### Eventos Personalizados

| Categoría     | Acción          | Label               | Valor         |
| ------------- | --------------- | ------------------- | ------------- |
| CTA           | click           | Hero - View My Work | -             |
| CTA           | click           | Hero - Contact Me   | -             |
| Settings      | theme_change    | light/dark          | -             |
| Settings      | language_change | en/es               | -             |
| Form          | submit          | contact             | 1/0           |
| Project       | view            | project-slug        | -             |
| External Link | click           | github - url        | -             |
| External Link | click           | demo - url          | -             |
| Social        | click           | GitHub              | -             |
| Performance   | LCP             | -                   | milliseconds  |
| Web Vitals    | CLS             | -                   | score \* 1000 |

### Configuración de Objetivos

1. **Form Submissions (Success)**
   - Event: Form submit
   - Condition: value = 1

2. **Project Views**
   - Event: Project view
   - Cualquier label

3. **External Link Clicks**
   - Event: External Link click
   - Type: demo

4. **Social Engagement**
   - Event: Social click
   - Cualquier platform

## Reportes Recomendados

### 1. **User Engagement**

```
Events > CTA clicks
Events > Social clicks
Events > External Link clicks
```

### 2. **Content Performance**

```
Events > Project views (por slug)
Pages > Top viewed projects
```

### 3. **Settings Preferences**

```
Events > Theme changes (dark vs light ratio)
Events > Language changes (en vs es ratio)
```

### 4. **Conversion Tracking**

```
Events > Form submissions (success rate)
Funnel: Landing → Projects → Contact Form
```

### 5. **Performance Metrics**

```
Events > Web Vitals
Custom report con LCP, FID, CLS
```

## Privacy & GDPR

### Configuración Recomendada

```tsx
// lib/analytics.ts
window.gtag('config', GA_MEASUREMENT_ID, {
  anonymize_ip: true,
  cookie_flags: 'SameSite=None;Secure',
})
```

### Cookie Banner (Opcional)

```tsx
// components/CookieBanner.tsx
// Implementar banner de consentimiento
// Guardar preferencia en localStorage
// Inicializar GA solo si consentimiento = true
```

## Testing

### Development Mode

```bash
# GA no se inicializa en localhost por defecto
# Para testing, usar extension de Google Analytics Debugger
```

### Verificar Eventos

```javascript
// Chrome DevTools Console
dataLayer // Ver todos los eventos
```

### Real-time Reports

1. Google Analytics > Reports > Realtime
2. Navegar por el sitio
3. Verificar eventos en tiempo real

## Troubleshooting

### Eventos no aparecen

1. Verificar `NEXT_PUBLIC_GA_MEASUREMENT_ID`
2. Verificar que gtag esté cargado: `window.gtag`
3. Revisar console para errores
4. Verificar ad blockers deshabilitados

### Page views duplicados

- Usar `useAnalytics()` solo en layout.tsx
- No en páginas individuales

### Métricas incorrectas

- Verificar que los valores sean números
- CLS debe multiplicarse por 1000
- FID en milliseconds

## Best Practices

1. **No trackear PII** (Personally Identifiable Information)
2. **Usar labels descriptivos** para eventos
3. **Consistencia en naming** de eventos
4. **Documentar eventos custom** en este archivo
5. **Revisar reportes semanalmente**
6. **Optimizar basado en datos** de engagement
7. **Respetar privacy** del usuario
8. **Testear antes de deploy** a producción

## Integration con otras herramientas

### Google Tag Manager (Opcional)

```tsx
// Reemplazar GA script con GTM
<Script id="gtm">
  {`(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXX');`}
</Script>
```

### Hotjar / Clarity (Heatmaps)

```tsx
// Similar pattern a GA
<Script strategy="afterInteractive" src="hotjar-url" />
```

### Vercel Analytics (Alternative)

```tsx
import { Analytics } from '@vercel/analytics/react'
;<Analytics />
```

## Resources

- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [Web Vitals](https://web.dev/vitals/)
