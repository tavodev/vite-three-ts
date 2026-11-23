# Proyecto Three.js (Vite + TS estricto + pnpm)

## Comandos
- `pnpm dev` — servidor de desarrollo
- `pnpm typecheck` — debe pasar sin errores antes de dar algo por terminado
- `pnpm build` — typecheck + build de producción

## Arquitectura
- `src/main.ts` — bootstrap; no meter lógica aquí.
- `src/core/Experience.ts` — renderer, scene, camera, OrbitControls y loop. Solo tocar para cambios globales de render.
- `src/core/Sizes.ts` / `Time.ts` — resize y delta/elapsed (THREE.Timer).
- `src/world/World.ts` — **punto de entrada del contenido del experimento.** Nuevos objetos van en clases dentro de `src/world/` con `update(delta, elapsed)` y `dispose()`, instanciadas desde `World`.

## Convenciones
- TypeScript estricto: nada de `any`, `@ts-ignore` ni `!` non-null assertions; manejar `undefined` explícitamente (`noUncheckedIndexedAccess` está activo).
- Imports de tipos con `import type` (`verbatimModuleSyntax`). Imports relativos con extensión `.ts`.
- Addons desde `three/addons/...`.
- Animaciones basadas en `delta`, nunca en frames.
- Todo recurso de GPU (geometries, materials, textures, render targets) se libera en `dispose()`.
- Assets estáticos en `public/`; shaders `.glsl` importados con `?raw`.
