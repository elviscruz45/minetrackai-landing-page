# Guía de Corrección SEO - MineTrack AI

## Problemas Identificados y Soluciones

### ❌ Problema 1: Redirects en vercel.json

**Causa:** Las redirecciones de `minetrack.site` a `www.minetrack.site` causaban que Google marcara las páginas como "Page with redirect"

**Solución Aplicada:**

- ✅ Eliminadas las reglas de redirect problemáticas de `vercel.json`
- ✅ Agregados headers de seguridad en su lugar
- ✅ Mantenido `trailingSlash: false` para URLs limpias

### ✅ Solución 2: URLs Canónicas Mejoradas

**Cambio en:** `src/layouts/Layout.astro`

- ✅ Normalización de URLs (eliminación de trailing slashes)
- ✅ URLs canónicas consistentes en todo el sitio

### ✅ Solución 3: Navegación Corregida

**Cambio en:** `src/data/global_settings.json`

- ✅ Link de "Inicio" cambiado de `/#` a `/#inicio`
- ✅ Eliminados espacios vacíos en el array de navegación

### ✅ Solución 4: Headers HTTP Optimizados

**Nuevos archivos:**

- `public/_headers` - Headers para seguridad y cache
- `vercel.json` - Headers de seguridad

---

## Pasos Post-Deployment

### 1. Configurar Dominio en Vercel

Si usas tanto `minetrack.site` como `www.minetrack.site`:

**Opción A - Solo WWW (Recomendado):**

```
1. En Vercel Dashboard → Settings → Domains
2. Agregar: www.minetrack.site (Primary)
3. Agregar: minetrack.site (Redirect to www.minetrack.site)
```

**Opción B - Sin WWW:**

```
1. En Vercel Dashboard → Settings → Domains
2. Agregar: minetrack.site (Primary)
3. Agregar: www.minetrack.site (Redirect to minetrack.site)
4. Actualizar base_url en global_settings.json a "https://minetrack.site"
```

### 2. Google Search Console

#### Verificar Propiedad

```bash
1. Ir a: https://search.google.com/search-console
2. Agregar propiedad: www.minetrack.site
3. Método: Archivo HTML
4. Descargar archivo google[...].html
5. Colocar en: /public/
6. Deploy y verificar
```

#### Enviar Sitemap

```
URL del sitemap: https://www.minetrack.site/sitemap-index.xml
```

#### Solicitar Indexación

```
1. URL Inspection Tool
2. Ingresar: https://www.minetrack.site
3. Click: "Request Indexing"
```

### 3. Robots.txt - Verificación

El archivo `public/robots.txt` debe apuntar al sitemap correcto:

```
Sitemap: https://www.minetrack.site/sitemap-index.xml
```

### 4. Verificar después del Deploy

**a) Verificar Redirects:**

```bash
# No debe haber redirects en la URL principal
curl -I https://www.minetrack.site
# Status debe ser: 200 OK (NO 301/302)
```

**b) Verificar Canonical:**

```bash
# Ver source de la página y buscar:
<link rel="canonical" href="https://www.minetrack.site/" />
```

**c) Verificar Sitemap:**

```bash
# Abrir en navegador:
https://www.minetrack.site/sitemap-index.xml
```

---

## Checklist Final

- [ ] Deploy realizado con cambios
- [ ] Dominio configurado correctamente en Vercel
- [ ] Propiedad verificada en Google Search Console
- [ ] Sitemap enviado en Search Console
- [ ] Indexación solicitada para URL principal
- [ ] Verificar status 200 (sin redirects)
- [ ] Verificar canonical URL en source
- [ ] Esperar 24-48 horas para re-crawl de Google

---

## Monitoreo

### Google Search Console

- Coverage Report: Debe mostrar "Valid" en lugar de "Page with redirect"
- Index Status: Debe incrementar de 0 a 1+ páginas indexadas

### Tiempo Estimado

- Re-crawl inicial: 1-3 días
- Indexación completa: 1-2 semanas

---

## Notas Importantes

⚠️ **Si el problema persiste:**

1. Verificar que NO existan redirects a nivel de DNS/hosting
2. Revisar que el dominio primary en Vercel sea correcto
3. Verificar configuración SSL/HTTPS
4. Usar herramienta de inspección de URL en Search Console

📧 **Soporte:**
Si necesitas ayuda adicional, contacta a tu proveedor de hosting (Vercel) o revisa la documentación:

- https://vercel.com/docs/projects/project-configuration
- https://support.google.com/webmasters/answer/7440203
