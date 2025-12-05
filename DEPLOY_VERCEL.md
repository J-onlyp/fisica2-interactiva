Despliegue recomendado: Frontend en GitHub Pages + Proxy seguro en Vercel

Resumen rápido:
- Mantén la web estática en GitHub Pages si quieres.
- Despliega el proxy serverless `/api/gemini` en Vercel y guarda la clave `GEMINI_API_KEY` en sus Environment Variables (privado).
- Añade en GitHub Secrets el valor `VITE_GEMINI_PROXY_URL` con la URL de tu deploy en Vercel (por ejemplo `https://mi-app.vercel.app`).
- El workflow CI ya pasa `VITE_GEMINI_PROXY_URL` al build, y el frontend llamará a ese proxy.

Pasos detallados:

1) Desplegar proxy en Vercel
- Ve a https://vercel.com y crea una cuenta o inicia sesión.
- Click en "New Project" → Import Git Repository → selecciona `J-onlyp/fisica2-interactiva`.
- En la configuración del proyecto, deja Build Command `npm run build` y Output Directory `dist`.
- IMPORTANTE: en "Root Directory" puedes dejar `/` — Vercel detectará la carpeta `api/` y desplegará las serverless functions.
- En Project Settings → Environment Variables añade:
  - `GEMINI_API_KEY` = <tu clave real>  (Environment: Production)
  - `VITE_GEMINI_USE_PROXY` = `true`    (Environment: Production)

- Deploya el proyecto.
- Cuando el deploy termine, copia la URL del deploy (ej. `https://fisica2-interactiva-abc.vercel.app`).

2) Configurar GitHub para usar el proxy
- Ve a tu repo en GitHub → Settings → Secrets and variables → Actions → New repository secret
  - Name: `VITE_GEMINI_PROXY_URL`
  - Value: la URL pública de Vercel (ej. `https://fisica2-interactiva-abc.vercel.app`)
- (Opcional) Si tu workflow necesita otros envs, puedes agregarlos aquí.

3) Volver a construir en GitHub Actions
- Ve a Actions → selecciona el workflow `Build and Deploy` → Re-run jobs
- El build incorporará la variable `VITE_GEMINI_PROXY_URL` y el frontend llamará al proxy en Vercel.

4) Probar
- Abre tu GitHub Pages (o la URL de Vercel si desplegaste todo ahí). Usa el chat y verifica que las llamadas a `/api/gemini` respondan.
- Si el frontend está en GitHub Pages y el proxy en Vercel, las peticiones irán a `https://mi-app.vercel.app/api/gemini`. Si hay errores, revisa la consola y los logs en Vercel.

Notas de seguridad y buenas prácticas:
- Nunca pongas `GEMINI_API_KEY` en GitHub Secrets si el build lo embebe en `dist` y el cliente la usa directamente.
- Mantén la clave solo en Vercel (o Netlify) como variable de entorno privada.
- Considera añadir autenticación o rate-limiting en el proxy si tu sitio será público.

Si quieres, puedo:
- A) Crear un PR con un ejemplo de `vercel.json` para configuración avanzada.
- B) Ajustar `ChatGemini.jsx` para soportar autenticación simple hacia el proxy.
- C) Guiarte paso a paso mientras haces el deploy en Vercel (te lo describo y espero tus acciones).

Dime cuál prefieres y te guío al siguiente paso.
