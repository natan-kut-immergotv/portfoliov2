# 🚀 Deploy Inmediato - 5 Pasos

## Método 1: Vercel (MÁS RÁPIDO - 5 minutos)

### Paso 1: Subir a GitHub

```bash
cd /Users/natankutnowski/Documents/Proyectos/Portfoliov2

# Inicializar git
git init
git add .
git commit -m "Initial commit: Portfolio v2 with Next.js 14"

# Crear repo en GitHub:
# 1. Ve a https://github.com/new
# 2. Nombre: portfoliov2
# 3. Public o Private
# 4. NO inicializar con README
# 5. Create repository

# Conectar y subir
git remote add origin https://github.com/TUUSUARIO/portfoliov2.git
git branch -M main
git push -u origin main
```

### Paso 2: Deploy en Vercel

**Opción A - Desde Web (Más fácil):**
1. Ve a https://vercel.com/signup
2. Sign up con GitHub
3. Click "Add New Project"
4. Import tu repo `portfoliov2`
5. Click "Deploy"
6. ¡Listo! URL: `https://portfoliov2-xxx.vercel.app`

**Opción B - Desde CLI (Más rápido):**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Seguir prompts:
# - Set up and deploy? Y
# - Which scope? [tu cuenta]
# - Link to existing project? N
# - What's your project's name? portfoliov2
# - In which directory? ./
# - Auto-detect settings? Y
# - Deploy? Y

# Deploy a producción
vercel --prod
```

### Paso 3: Configurar Variables (Opcional)

En Vercel Dashboard:
1. Tu proyecto → Settings → Environment Variables
2. Agregar:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
3. Redeploy

---

## Método 2: Netlify (Alternativa)

### Paso 1: Subir a GitHub (igual que arriba)

### Paso 2: Deploy en Netlify

1. Ve a https://app.netlify.com/signup
2. Sign up con GitHub
3. "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Seleccionar `portfoliov2`
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Deploy
8. URL: `https://tu-portfolio.netlify.app`

---

## 🎯 Comandos Completos (Copy-Paste)

### Para Vercel:

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Ir a tu proyecto
cd /Users/natankutnowski/Documents/Proyectos/Portfoliov2

# 3. Verificar que funcione
npm run build
npm start
# Abrir http://localhost:3000 y verificar

# 4. Subir a GitHub
git init
git add .
git commit -m "Initial commit: Portfolio v2"
# Crear repo en GitHub primero, luego:
git remote add origin https://github.com/TUUSUARIO/portfoliov2.git
git branch -M main
git push -u origin main

# 5. Deploy
vercel login
vercel --prod

# ¡Listo! Copia la URL que te da
```

---

## 🔄 Updates Futuros

Después del primer deploy, cada vez que hagas cambios:

```bash
# 1. Hacer cambios en el código
# 2. Commit
git add .
git commit -m "Descripción de cambios"

# 3. Push
git push

# 4. Deploy automático
# Vercel/Netlify detectan el push y deplayan automáticamente
# Recibirás email cuando termine
```

---

## 🌍 Dominio Personalizado

### Opción A: Dominio Gratis con Vercel

Tu proyecto tendrá:
- `https://portfoliov2.vercel.app` (gratis)
- Puedes cambiar el nombre en Settings

### Opción B: Comprar Dominio

**Recomendados (baratos):**
- Namecheap: ~$9/año
- Cloudflare: ~$9/año
- Porkbun: ~$8/año

**Configuración:**
1. Comprar dominio
2. En Vercel: Domains → Add
3. Ingresar tu dominio
4. Configurar DNS según instrucciones
5. Esperar 24-48h para propagación

---

## ✅ Checklist Final

Antes de deploy:

- [ ] `npm run build` funciona sin errores
- [ ] `npm run lint` sin errores
- [ ] Todas las imágenes existen en `/public/`
- [ ] URLs actualizadas en `seo.ts` y `sitemap.ts`
- [ ] README.md actualizado
- [ ] .gitignore incluye `.env.local`
- [ ] Variables de entorno documentadas

---

## 🎉 Después del Deploy

### 1. Verificar que funcione

```bash
# Abrir tu URL
# Verificar:
# - Todas las secciones cargan
# - Imágenes se ven
# - Links funcionan
# - Tema dark/light funciona
# - Cambio de idioma funciona
# - Formulario valida
```

### 2. SEO Setup

```bash
# Google Search Console
https://search.google.com/search-console

# Agregar propiedad
# Submit sitemap: https://tudominio.com/sitemap.xml
```

### 3. Analytics

```bash
# Google Analytics
https://analytics.google.com

# Crear propiedad GA4
# Copiar Measurement ID
# Agregar a Vercel Environment Variables
# Redeploy
```

### 4. Compartir

- ✅ Agregar a LinkedIn
- ✅ Actualizar GitHub profile
- ✅ Compartir en Twitter/X
- ✅ Agregar a CV
- ✅ Enviar a recruiters

---

## 🆘 Problemas Comunes

### "Build failed"

```bash
# Verificar localmente
npm run build

# Ver errores específicos
# Corregir y volver a deployar
```

### "404 Not Found"

```bash
# Verificar en next.config.mjs:
# NO debe tener output: 'export'
```

### "Images not loading"

```bash
# Verificar que existan en /public/
# Verificar rutas en portfolioData.ts
```

---

## 💰 Costos

### Gratis Forever:
- Vercel: Unlimited personal projects
- Netlify: 100GB bandwidth/month
- GitHub: Unlimited public repos

### Si creces:
- Vercel Pro: $20/month (no necesario para portfolio)
- Dominio: $9-12/año
- Todo lo demás: GRATIS

---

## 🎯 Tu Plan de Acción AHORA

1. **Ahora (5 min):** Subir a GitHub
2. **Ahora (3 min):** Deploy en Vercel
3. **Hoy:** Compartir URL con amigos/familia
4. **Esta semana:** Crear proyectos reales
5. **Próximo mes:** Comprar dominio personalizado

---

¡Estás a 8 minutos de tener tu portfolio online! 🚀

