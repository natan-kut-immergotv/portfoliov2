# 🚀 Portfolio v2 - Modern Frontend Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Portfolio personal moderno y performante construido con Next.js 14, TypeScript, Tailwind CSS, Framer Motion y Zustand. Incluye internacionalización (i18n), dark mode, SEO optimizado y analytics integrado.

## ✨ Características

- ✅ **Next.js 14** con App Router
- ✅ **TypeScript** estricto para type-safety
- ✅ **Tailwind CSS** para estilos modernos y responsive
- ✅ **Dark/Light Mode** con persistencia en localStorage
- ✅ **Internacionalización (i18n)** - Español e Inglés
- ✅ **Framer Motion** para animaciones fluidas
- ✅ **Zustand** para state management global
- ✅ **SEO Optimizado** con metadatos dinámicos
- ✅ **Google Analytics 4** integrado
- ✅ **Web Vitals Monitoring** automático
- ✅ **Lazy Loading** de secciones y componentes
- ✅ **Sitemap** automático y robots.txt
- ✅ **ESLint + Prettier** configurados
- ✅ **Lighthouse Score** >90 en todas las métricas

## 📦 Tecnologías Principales

| Tecnología    | Versión | Uso                         |
| ------------- | ------- | --------------------------- |
| Next.js       | 14.2.5  | Framework React con SSR/SSG |
| TypeScript    | 5.6.2   | Type-safety y mejor DX      |
| Tailwind CSS  | 3.4.14  | Utility-first CSS           |
| Framer Motion | 11.3.29 | Animaciones declarativas    |
| Zustand       | 4.5.2   | State management            |
| i18next       | 23.11.5 | Internacionalización        |
| next-seo      | 6.5.0   | SEO y meta tags             |
| Lucide React  | 0.441.0 | Iconos                      |

## 🗂️ Estructura del Proyecto

```
portfoliov2/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout raíz con providers
│   ├── page.tsx                 # Página principal
│   ├── seo.ts                   # Funciones de SEO
│   ├── sitemap.ts               # Generador de sitemap
│   └── projects/
│       └── [slug]/
│           ├── page.tsx         # Página dinámica de proyecto
│           └── not-found.tsx    # 404 personalizado
├── components/
│   ├── sections/                # Secciones principales
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── Navbar.tsx
│   ├── ThemeSwitcher.tsx
│   ├── LanguageSwitcher.tsx
│   └── ...
├── data/
│   └── portfolioData.ts         # Datos centralizados del portfolio
├── hooks/
│   ├── useActiveSection.ts      # Detección de sección visible
│   └── useAnalytics.ts          # Page view tracking
├── lib/
│   ├── analytics.ts             # Google Analytics setup
│   └── i18n.ts                  # Configuración i18next
├── public/
│   ├── locales/                 # Traducciones (en/es)
│   │   ├── en/common.json
│   │   └── es/common.json
│   ├── projects/                # Imágenes de proyectos
│   ├── robots.txt
│   └── favicon.ico
├── store/
│   ├── useThemeStore.ts         # Store de tema
│   └── useLanguageStore.ts      # Store de idioma
├── styles/
│   └── globals.css              # Estilos globales + Tailwind
├── .eslintrc.cjs                # Configuración ESLint
├── .prettierrc                  # Configuración Prettier
├── next.config.ts               # Configuración Next.js
├── tailwind.config.ts           # Configuración Tailwind
├── tsconfig.json                # Configuración TypeScript
├── package.json
└── README.md
```

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 18.x o superior
- **npm**, **pnpm** o **yarn**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/portfoliov2.git
cd portfoliov2

# Instalar dependencias
npm install
# o
pnpm install
# o
yarn install
```

### Variables de Entorno

Crear archivo `.env.local` en la raíz:

```bash
# Google Analytics (opcional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# URL del sitio (para SEO)
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

### Desarrollo

```bash
npm run dev
# o
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 📜 Scripts Disponibles

```bash
# Desarrollo local con hot reload
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm run start

# Ejecutar linter
npm run lint

# Formatear código con Prettier
npm run format
```

## 🎨 Personalización

### 1. Datos del Portfolio

Editar `/data/portfolioData.ts`:

```typescript
export const portfolioData = {
  en: {
    hero: {
      name: 'Tu Nombre',
      role: 'Tu Rol',
      description: 'Tu descripción...',
      // ...
    },
    projects: [
      {
        id: 1,
        slug: 'mi-proyecto',
        title: 'Mi Proyecto',
        description: 'Descripción corta',
        fullDescription: 'Descripción completa...',
        tags: ['React', 'Next.js'],
        image: '/projects/mi-proyecto.png',
        github: 'https://github.com/...',
        demo: 'https://...',
      },
    ],
  },
  es: {
    // Misma estructura en español
  },
}
```

### 2. Agregar Nuevos Proyectos

1. Añadir imágenes en `/public/projects/`
2. Actualizar `portfolioData.ts` en ambos idiomas (en/es)
3. El sitemap se genera automáticamente

### 3. Modificar Tema y Colores

Editar `/tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#tu-color',
      // ...
    }
  }
}
```

Actualizar variables CSS en `/styles/globals.css`:

```css
:root {
  --background: 255 255 255;
  --foreground: 15 23 42;
}

.dark {
  --background: 15 23 42;
  --foreground: 241 245 249;
}
```

### 4. Agregar Nuevos Idiomas

1. Crear carpeta en `/public/locales/[nuevo-idioma]/`
2. Añadir `common.json` con traducciones
3. Actualizar tipo `Language` en `/store/useLanguageStore.ts`:

```typescript
export type Language = 'en' | 'es' | 'fr' // ejemplo
```

4. Actualizar configuración i18n en `/lib/i18n.ts`:

```typescript
supportedLngs: ['en', 'es', 'fr']
```

### 5. Agregar Nuevas Secciones

1. Crear componente en `/components/sections/NuevaSeccion.tsx`
2. Importar en `/app/page.tsx`:

```tsx
import NuevaSeccion from '../components/sections/NuevaSeccion'

// Agregar con lazy loading
const NuevaSeccion = dynamic(
  () => import('../components/sections/NuevaSeccion'),
  {
    loading: () => <div className="min-h-screen" />,
    ssr: true,
  }
)
```

3. Añadir traducciones en `/public/locales/*/common.json`
4. Actualizar navbar si es necesario

## 🌐 Internacionalización (i18n)

### Uso en Componentes

```tsx
import { useTranslation } from 'react-i18next'

export default function MiComponente() {
  const { t } = useTranslation('common')

  return <h1>{t('seccion.titulo')}</h1>
}
```

### Cambiar Idioma

El LanguageSwitcher usa Zustand store:

```tsx
import useLanguageStore from '../store/useLanguageStore'

const { language, setLanguage } = useLanguageStore()
setLanguage('es') // Cambia a español
```

## 🎭 Dark/Light Mode

### Uso del Theme Store

```tsx
import useThemeStore from '../store/useThemeStore'

const { theme, toggleTheme } = useThemeStore()

// Toggle entre dark y light
<button onClick={toggleTheme}>Toggle</button>

// Verificar tema actual
{theme === 'dark' ? <Moon /> : <Sun />}
```

El tema persiste automáticamente en `localStorage`.

## 📊 SEO y Analytics

### SEO

- **Metadatos dinámicos** por página en `/app/seo.ts`
- **next-seo** para OpenGraph y Twitter Cards
- **Sitemap** generado automáticamente en `/app/sitemap.ts`
- **robots.txt** en `/public/robots.txt`

### Google Analytics

Eventos trackeados automáticamente:

- ✅ Page views
- ✅ CTA clicks
- ✅ Form submissions
- ✅ Theme changes
- ✅ Language changes
- ✅ External link clicks
- ✅ Web Vitals (LCP, FID, CLS)

#### Agregar Eventos Personalizados

```tsx
import { analytics } from '../lib/analytics'

// Evento simple
analytics.trackEvent('Categoría', 'acción', 'label', valor)

// Eventos específicos
analytics.trackCTAClick('Ubicación', 'Nombre del CTA')
analytics.trackFormSubmit('nombre-form', true)
analytics.trackExternalLink(url, 'tipo')
```

Ver documentación completa en `ANALYTICS.md`.

## ⚡ Performance y Optimización

### Lazy Loading

Secciones below-the-fold con `dynamic()`:

```tsx
import dynamic from 'next/dynamic'

const About = dynamic(() => import('../components/sections/About'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
})
```

### Optimización de Imágenes

Usar Next.js `<Image />` siempre:

```tsx
import Image from 'next/image'
;<Image
  src="/projects/imagen.png"
  alt="Descripción"
  fill
  priority={false} // true solo para hero images
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Memoization

Componentes pesados con `memo()`:

```tsx
import { memo } from 'react'

const ComponentePesado = memo(({ data }) => {
  // ...
})
```

### Bundle Analysis

```bash
npm run build
# Revisar .next/static para tamaños de bundle
```

Ver guía completa en `PERFORMANCE.md`.

## 🚢 Deploy

### Vercel (Recomendado)

1. Push código a GitHub
2. Conectar repositorio en [vercel.com](https://vercel.com)
3. Configurar variables de entorno:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy automático ✅

### Netlify

1. Conectar repositorio
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Configurar variables de entorno
5. Deploy ✅

### Build Manual

```bash
npm run build
npm run start
```

## 🧹 Linting y Formateo

### ESLint

```bash
# Ejecutar linter
npm run lint

# Fix automático
npm run lint -- --fix
```

Configuración en `.eslintrc.cjs`:

- Reglas de Next.js
- TypeScript rules
- React hooks exhaustive-deps
- Prettier integration

### Prettier

```bash
# Formatear todos los archivos
npm run format

# Check sin modificar
npx prettier --check .
```

Configuración en `.prettierrc`:

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false
}
```

## 📁 Archivos de Configuración

### `next.config.ts`

```typescript
const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
}
```

### `tailwind.config.ts`

```typescript
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
}
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 🐛 Troubleshooting

### Error: Module not found

```bash
# Limpiar cache y reinstalar
rm -rf node_modules .next
npm install
```

### Hydration errors

Verificar que no haya contenido dinámico (fecha, random) sin `useEffect`.

### Analytics no funciona

1. Verificar `NEXT_PUBLIC_GA_MEASUREMENT_ID` en `.env.local`
2. Revisar console para errores
3. Deshabilitar ad blockers
4. Verificar en Google Analytics > Realtime

### Build fails

```bash
# Verificar TypeScript
npx tsc --noEmit

# Verificar ESLint
npm run lint
```

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [i18next Documentation](https://www.i18next.com/)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👤 Autor

**Natan Kutnowski**

- GitHub: [@natankutnowski](https://github.com/natankutnowski)
- LinkedIn: [Natan Kutnowski](https://linkedin.com/in/natankutnowski)
- Portfolio: [natankutnowski.com](https://natankutnowski.com)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
