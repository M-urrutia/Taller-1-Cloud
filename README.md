# CloudDeploy — Frontend del Taller 1

Frontend React + Vite pensado para el Taller 1 – PaaS (Coolify Self-hosted).

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Generar producción

```bash
npm run build
```

El resultado queda en `dist/`.

```
El footer ya muestra automáticamente el año 2026.

## Despliegue

Para un despliegue estático en Coolify:
- Build command: `npm run build`
- Output directory: `dist`

Si Coolify configura automáticamente el build mediante el repositorio, puedes dejar que detecte Vite/Node y verificar que el directorio de salida sea `dist`.
