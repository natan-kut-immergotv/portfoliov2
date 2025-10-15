# 🚀 Guía de Deployment - Portfolio

## Opciones de Hosting Gratuito

### 🏆 Opción 1: Vercel (RECOMENDADO)

**Ventajas:**
- ✅ Gratis para proyectos personales
- ✅ Deploy automático desde GitHub
- ✅ Optimizado para Next.js
- ✅ SSL automático
- ✅ CDN global
- ✅ Analytics incluido
- ✅ Dominio personalizado gratis

#### Paso a Paso:

**1. Crear cuenta en Vercel**
```
https://vercel.com/signup
```
- Usa tu cuenta de GitHub

**2. Subir código a GitHub**
```bash
cd /Users/natankutnowski/Documents/Proyectos/Portfoliov2

# Inicializar git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit - Portfolio v2"

# Crear repo en GitHub y conectar
git remote add origin https://github.com/tuusuario/portfoliov2.git
git branch -M main
git push -u origin main
```

**3. Importar en Vercel**
1. Ve a [vercel.com/new](https://vercel.com/new)
2. Click en "Import Git Repository"
3. Selecciona tu repo `portfoliov2`
4. Click "Import"

**4. Configurar Variables de Entorno**
En Vercel dashboard:
- Settings → Environment Variables
- Agregar:
  ```
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
  NEXT_PUBLIC_SITE_URL=https://tu-portfolio.vercel.app
  ```

**5. Deploy**
- Click "Deploy"
- ¡Listo! Tu portfolio estará en: `https://tu-portfolio.vercel.app`

**6. Dominio Personalizado (Opcional)**
- Settings → Domains
- Agregar tu dominio (ej: `natankutnowski.com`)
- Configurar DNS según instrucciones

---

### 🌐 Opción 2: Netlify

**Ventajas:**
- ✅ Gratis para proyectos personales
- ✅ Deploy desde GitHub
- ✅ SSL automático
- ✅ CDN global
- ✅ Forms integrados (útil para contacto)

#### Paso a Paso:

**1. Crear cuenta**
```
https://app.netlify.com/signup
```

**2. Subir a GitHub** (igual que Vercel)

**3. Deploy desde Netlify**
1. New site from Git
2. Connect to GitHub
3. Seleccionar repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

**4. Variables de Entorno**
- Site settings → Environment variables
- Agregar las mismas variables

**5. Deploy**
- URL: `https://tu-portfolio.netlify.app`

---

### 🎨 Opción 3: GitHub Pages (Solo para Static Export)

**Limitaciones:**
- ❌ No soporta SSR/API routes
- ❌ Requiere configuración adicional
- ✅ Gratis e ilimitado

**No recomendado para este portfolio** (usa features de Next.js que requieren servidor)

---

### ☁️ Opción 4: Railway

**Ventajas:**
- ✅ $5 gratis/mes
- ✅ Soporta bases de datos
- ✅ Deploy desde GitHub

**Uso:** Si planeas agregar backend/API en el futuro

---

## 🔧 Preparar el Proyecto para Deploy

### 1. Verificar que todo funcione localmente

```bash
# Build de producción
npm run build

# Probar build
npm start

# Abrir http://localhost:3000
# Verificar que todo funcione
```

### 2. Optimizar antes de deploy

```bash
# Ejecutar linter
npm run lint

# Formatear código
npm run format

# Verificar TypeScript
npx tsc --noEmit
```

### 3. Actualizar URLs en el código

Buscar y reemplazar en:
- `app/seo.ts`: Cambiar `https://natankutnowski.com` por tu URL real
- `app/sitemap.ts`: Cambiar `baseUrl`
- `next-seo.config.ts`: Actualizar URLs

### 4. Crear .gitignore (ya existe)

Verificar que incluya:
```
node_modules/
.next/
.env.local
```

---

## 📝 Checklist Pre-Deploy

- [ ] Código en GitHub
- [ ] Build funciona localmente (`npm run build`)
- [ ] Variables de entorno documentadas
- [ ] URLs actualizadas en SEO
- [ ] Imágenes optimizadas
- [ ] README.md actualizado
- [ ] .gitignore configurado
- [ ] package.json con scripts correctos

---

## 🚀 Deploy Rápido con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd /Users/natankutnowski/Documents/Proyectos/Portfoliov2
vercel

# Seguir instrucciones interactivas
# Primera vez: configurar proyecto
# Siguientes: deploy automático

# Deploy a producción
vercel --prod
```

---

## 🔄 Workflow de Desarrollo

### Después del primer deploy:

1. **Hacer cambios localmente**
   ```bash
   npm run dev
   # Editar código
   ```

2. **Commit y push**
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push
   ```

3. **Deploy automático**
   - Vercel/Netlify detectan el push
   - Build automático
   - Deploy en ~2 minutos
   - Preview URL para cada branch

---

## 🌍 Dominio Personalizado

### Comprar Dominio (Opcional)

**Registrars recomendados:**
- [Namecheap](https://namecheap.com) - $8-12/año
- [Google Domains](https://domains.google) - $12/año
- [Cloudflare](https://cloudflare.com) - $9/año

### Configurar DNS

**En Vercel:**
1. Domains → Add domain
2. Ingresar tu dominio
3. Configurar DNS records:
   ```
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```

**En Netlify:**
1. Domain settings → Add custom domain
2. Configurar DNS:
   ```
   A     @     75.2.60.5
   CNAME www   tu-site.netlify.app
   ```

---

## 📊 Post-Deploy

### 1. Verificar SEO

```bash
# Google Search Console
https://search.google.com/search-console

# Agregar propiedad
# Verificar ownership
# Submit sitemap: https://tudominio.com/sitemap.xml
```

### 2. Configurar Analytics

```bash
# Google Analytics
https://analytics.google.com

# Crear propiedad
# Copiar Measurement ID
# Agregar a .env.local y redeploy
```

### 3. Performance Check

```bash
# Lighthouse
# Abrir Chrome DevTools
# Lighthouse tab
# Run audit

# Objetivo: >90 en todas las métricas
```

### 4. Monitoreo

**Vercel Analytics:**
- Automático en dashboard
- Web Vitals incluidos

**Google Analytics:**
- Tráfico en tiempo real
- Eventos personalizados

---

## 🐛 Troubleshooting

### Build falla en Vercel

```bash
# Verificar localmente
npm run build

# Si falla, revisar:
# - Errores de TypeScript
# - Imports faltantes
# - Variables de entorno
```

### Imágenes no cargan

```bash
# Verificar rutas en portfolioData.ts
# Deben empezar con /
image: '/projects/nombre.svg'

# NO:
image: 'projects/nombre.svg'
```

### Variables de entorno no funcionan

```bash
# En Vercel/Netlify:
# - Deben empezar con NEXT_PUBLIC_
# - Redeploy después de agregar
# - Verificar en Settings → Environment Variables
```

---

## 📈 Optimizaciones Post-Deploy

### 1. Agregar OG Image Real

Crear imagen 1200x630px en:
```
/public/og-image.png
```

### 2. Configurar Redirects

En `next.config.mjs`:
```javascript
async redirects() {
  return [
    {
      source: '/old-url',
      destination: '/new-url',
      permanent: true
    }
  ]
}
```

### 3. Headers de Seguridad

```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        }
      ]
    }
  ]
}
```

---

## 🎯 Próximos Pasos

1. ✅ Deploy en Vercel
2. ✅ Configurar dominio personalizado
3. ✅ Agregar a Google Search Console
4. ✅ Configurar Google Analytics
5. ✅ Compartir en redes sociales
6. ✅ Agregar a LinkedIn
7. ✅ Actualizar CV con link

---

## 📞 Soporte

**Vercel:**
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

**Netlify:**
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com

---

¡Tu portfolio estará online en menos de 10 minutos! 🚀

