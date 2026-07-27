# SPECK - Horóscopo del Agua 2027

Este proyecto es una Single Page Application (SPA) premium construida con **React**, **Vite** y **Tailwind CSS**.

## Características
- **Landing Screen**: Pantalla de bienvenida minimalista a pantalla completa.
- **Zodiac Grid**: Grid interactiva con efectos de glassmorphism y animaciones fluidas (Framer Motion).
- **Zodiac Detail Modal**: Detalle extendido de cada signo con predicciones, eficiencia y productos Speck.
- **Diseño Responsivo**: Adaptado para móviles, tablets y escritorio.
- **Estética Premium**: Paleta de colores azul marino (#1a2a62) con acentos cian, efectos de brillo y desenfoque.

## Instalación

1. Asegúrate de tener Node.js instalado.
2. Clona o descarga este repositorio.
3. Arregla los permisos de npm si es necesario (ver nota abajo).
4. Ejecuta:
   ```bash
   npm install
   npm run dev
   ```

> [!IMPORTANT]
> **Nota sobre Permisos**: Si encuentras errores de `EPERM` al ejecutar `npm install`, es probable que necesites arreglar los permisos de tu carpeta de caché de npm:
> `sudo chown -R $(id -u):$(id -g) ~/.npm`

## Personalización

### Reemplazar Textos
Todo el contenido de los signos se gestiona desde el archivo: 
- `src/data/signs.ts`

Puedes abrir este archivo y sustituir las propiedades `prediccion`, `eficiencia` o `equipoDesc` con el contenido real del PDF.

### Reemplazar Imágenes de Producto
Las imágenes se encuentran referenciadas en `src/data/signs.ts`. Para usar imágenes reales:
1. Copia tus imágenes a `public/images/`.
2. Renómbralas como `product-01.jpg`, `product-02.jpg`, etc., o actualiza la propiedad `imageUrl` en el array de `signs.ts`.

### Reemplazar Imagen de Portada
Sustituye el archivo `public/images/landing-hero.jpg` por tu imagen de alta resolución deseada. El componente `LandingScreen.tsx` la cargará automáticamente.

## Estructura de Carpetas
- `src/components/`: Componentes modulares de la interfaz.
- `src/data/`: Datos de los signos del zodíaco.
- `src/App.tsx`: Orquestador principal de vistas y estados.
- `src/index.css`: Estilos globales y utilidades personalizadas.
