# 🎬 Portafolio Vintage Cartoon - Franco Arce

Portafolio personal con estética **Rubber Hose Animation** de los años 30, combinando nostalgia vintage con tecnología moderna.

![Vintage Cartoon Style](https://img.shields.io/badge/Style-1930s%20Cartoon-8B5CF6?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

## 🎨 Características

### Diseño Visual
- **Estética Rubber Hose**: Inspirado en cartoons de los años 30 (Cuphead, Fleischer Studios)
- **Paleta de Colores**: Violeta (#8B5CF6) + Negro (#0A0A0A) + Crema vintage (#F5E6D3)
- **Efectos Especiales**:
  - Film grain animado (efecto película antigua)
  - Viñeta sutil en los bordes
  - Sombras con glow violeta
  - Bordes redondeados exagerados

### Animaciones
- **Rubber Hose Effects**: Movimientos elásticos con squash & stretch
- **Avatar Animado**: Flotación, parpadeo, seguimiento de cursor
- **Typewriter Effect**: Títulos que se escriben automáticamente
- **Scroll Animations**: Elementos que aparecen al hacer scroll
- **Hover Effects**: Transformaciones bouncy en cards y botones

### Interactividad
- **Avatar Interactivo**: Click 3 veces para un easter egg
- **Cursor Personalizado**: Estilo cartoon (solo desktop)
- **Smooth Scroll**: Navegación suave entre secciones
- **Parallax Stars**: Estrellas decorativas con efecto parallax

## 📂 Estructura del Proyecto

```
PortFolio Antigravity/
├── index.html          # Estructura principal
├── styles.css          # Estilos vintage + animaciones
├── script.js           # Interactividad y efectos
├── Avatar.png          # Avatar principal
├── _cleanup/           # Archivos antiguos no utilizados
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir Localmente
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo! No requiere servidor

### Opción 2: Servidor Local (Recomendado)
```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con VS Code
# Instala extensión "Live Server" y haz click derecho > "Open with Live Server"
```

Luego abre: `http://localhost:8000`

### Opción 3: Deploy en GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings > Pages
4. Selecciona branch `main` y carpeta `/ (root)`
5. Guarda y espera unos minutos
6. Tu portafolio estará en: `https://tu-usuario.github.io/nombre-repo`

## 🎯 Secciones del Portafolio

### 1. Hero Section
- Avatar animado con efecto rubber hose
- Nombre con sombra 3D vintage
- Typewriter effect rotando entre roles
- Botones CTA con hover bouncy

### 2. Sobre Mí
- Biografía concisa
- Grid de 6 skills con iconos animados
- Cards con efecto hover (rotación + elevación)

### 3. Proyectos Destacados
Incluye 5 proyectos principales:
- **DataChef**: Plataforma de análisis para restaurantes
- **CodeFlow Capital**: App de finanzas con gamificación
- **Lead Scoring Multi-Universidad**: Sistema ML para 5 universidades
- **Detección de Fraude**: Modelo de clasificación
- **Pipeline ETL Multi-Tenancy**: Arquitectura escalable

Cada proyecto muestra:
- Descripción clara
- Tech stack con badges
- Métricas de impacto
- Links a GitHub/demo

### 4. Experiencia
- Timeline vertical con marcadores animados
- Efecto pulse en los markers
- Hover effect que desplaza las cards

### 5. Contacto
- Botones grandes estilo cartoon
- Links a Email, LinkedIn, GitHub
- Footer con mensaje "The End" vintage

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables custom, Grid, Flexbox, Animations
- **JavaScript Vanilla**: Sin dependencias
- **Google Fonts**: Fredoka One + Quicksand
- **SVG**: Avatar animado vectorial

## 🎨 Personalización

### Cambiar Colores
Edita las variables en `styles.css`:
```css
:root {
    --violet-primary: #8B5CF6;  /* Color principal */
    --violet-light: #A78BFA;    /* Color secundario */
    --vintage-black: #0A0A0A;   /* Fondo oscuro */
    --cream-vintage: #F5E6D3;   /* Texto claro */
}
```

### Modificar Textos del Typewriter
En `script.js`, línea 8:
```javascript
const phrases = [
    'Tu Rol 1 📊',
    'Tu Rol 2 🤖',
    'Tu Rol 3 ⚙️'
];
```

### Actualizar Proyectos
Edita la sección `<div class="projects-grid">` en `index.html`

### Cambiar Links de Contacto
Actualiza los `href` en la sección `<div class="contact-links">`

## 📱 Responsive Design

El portafolio es completamente responsive:
- **Desktop** (>768px): Experiencia completa con cursor custom
- **Tablet** (768px): Grid adaptado, navegación optimizada
- **Mobile** (<480px): Layout vertical, botones full-width

## 🎭 Easter Eggs

1. **Avatar**: Haz click 3 veces en el avatar para un mensaje secreto
2. **Console**: Abre DevTools para ver un mensaje especial
3. **Cursor**: En desktop, el cursor cambia al pasar sobre elementos interactivos

## ⚡ Optimizaciones

- **Lazy Loading**: Animaciones solo cuando son visibles (Intersection Observer)
- **Debounce**: Eventos de scroll optimizados
- **CSS Animations**: Uso de GPU para animaciones suaves
- **Sin Dependencias**: Carga rápida sin librerías externas

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo como inspiración para tu propio portafolio.

## 🤝 Créditos

- **Diseño y Desarrollo**: Franco Arce
- **Inspiración**: Cuphead, Fleischer Studios, Betty Boop
- **Tipografía**: Google Fonts (Fredoka One, Quicksand)

---

**Hecho con ❤️ y datos** | [LinkedIn](#) | [GitHub](#) | [Email](#)
