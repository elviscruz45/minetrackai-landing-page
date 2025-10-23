# Guía de Configuración - Google Search Console

## 📋 Archivos Creados

✅ `/public/robots.txt` - Instrucciones para crawlers
✅ `/public/sitemap.xml` - Mapa del sitio (será reemplazado por generación automática)
✅ Meta tags SEO agregados en `Layout.astro`
✅ Configuración de sitemap automático en `astro.config.mjs`

## 🚀 Pasos para Registrar en Google Search Console

### 1. Instalar dependencias necesarias

```bash
npm install @astrojs/sitemap
```

### 2. Actualizar tu dominio

Edita `astro.config.mjs` y reemplaza:

```javascript
site: "https://tu-dominio.com";
```

con tu dominio real, por ejemplo:

```javascript
site: "https://minetrack.com";
```

También actualiza en `/public/robots.txt` la URL del dominio.

### 3. Verificar tu sitio en Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Haz clic en "Agregar propiedad"
3. Elige el método de verificación:

#### Opción A: Verificación por archivo HTML

- Google te dará un archivo HTML para descargar
- Colócalo en la carpeta `/public/`
- Ejemplo: `/public/google1234567890abcdef.html`

#### Opción B: Verificación por meta tag

- Copia el meta tag que Google te proporciona
- Agrégalo en `src/layouts/Layout.astro` dentro del `<head>`:

```html
<meta name="google-site-verification" content="TU_CODIGO_AQUI" />
```

#### Opción C: Verificación por DNS

- Agrega un registro TXT en tu proveedor de dominio
- Usa el valor que Google te proporcione

### 4. Enviar el Sitemap

Una vez verificado tu sitio:

1. En Google Search Console, ve a "Sitemaps" en el menú lateral
2. Ingresa la URL de tu sitemap: `https://tu-dominio.com/sitemap-index.xml`
3. Haz clic en "Enviar"

### 5. Archivos robots.txt

El archivo `robots.txt` ya está configurado en `/public/robots.txt`. Verifica que esté accesible en:

```
https://tu-dominio.com/robots.txt
```

## 📊 Monitoreo

Después de configurar:

- Google puede tardar unos días en indexar tu sitio
- Revisa regularmente el panel de Google Search Console para:
  - Ver páginas indexadas
  - Identificar errores de rastreo
  - Analizar el rendimiento de búsqueda
  - Verificar la cobertura del sitemap

## 🔧 Comandos Útiles

```bash
# Construir el sitio (genera sitemap automáticamente)
npm run build

# Vista previa del sitio construido
npm run preview

# Desarrollo
npm run dev
```

## ✨ Mejoras SEO Implementadas

- ✅ Meta tags completos (Open Graph, Twitter Card)
- ✅ Canonical URLs
- ✅ Robots meta tags
- ✅ Sitemap automático
- ✅ robots.txt configurado
- ✅ Meta descripción y título optimizados
- ✅ Theme color para PWA

## 📝 Próximos Pasos Recomendados

1. Actualizar `src/data/global_settings.json`:

   - `base_url`: Tu dominio real
   - `description`: Una descripción más específica y con keywords
   - `title`: Un título optimizado para SEO

2. Crear contenido de calidad con keywords relevantes
3. Agregar schema.org markup (JSON-LD) para rich snippets
4. Optimizar imágenes (ya tienes formato AVIF ✅)
5. Implementar Google Analytics para métricas

## 🆘 Solución de Problemas

**Si el sitemap no se genera:**

```bash
npm install @astrojs/sitemap
npm run build
```

**Si robots.txt no es accesible:**

- Verifica que esté en `/public/robots.txt`
- Asegúrate de hacer deploy del proyecto

**Si Google no encuentra tu sitio:**

- Verifica que el dominio en `astro.config.mjs` sea correcto
- Asegúrate de que el sitio esté público y accesible
- Espera 24-48 horas después de enviar el sitemap
