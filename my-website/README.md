# MiSitio — plantilla simple

Pequeña plantilla estática hecha con HTML, CSS y JavaScript.

Cómo probar localmente

- Servir con Python (recomendado):

```bash
python3 -m http.server 8000 --directory src
```

Luego abre http://localhost:8000 en tu navegador.

- También puedes usar `live-server` o cualquier servidor estático.

Estructura

```
my-website/
  src/
    index.html
    css/styles.css
    js/main.js
```

Siguientes mejoras sugeridas

- Añadir imágenes y assets en `src/assets`.
- Conectar el formulario a un servicio real (Netlify Functions, Formspree, o tu backend).
- Automatizar tareas con npm scripts si lo deseas.
