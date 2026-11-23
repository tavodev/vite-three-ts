# vite-three-ts

Boilerplate: Vite + Three.js + TypeScript estricto + pnpm.

## Nuevo proyecto

```zsh
thnew mi-experimento
```

O sin la función:

```zsh
pnpm dlx tiged tavodev/vite-three-ts mi-experimento
cd mi-experimento && pnpm install && pnpm dev
```

## Estructura

- `src/core/` — Experience (renderer, scene, camera, loop), Sizes, Time
- `src/world/World.ts` — aquí va el contenido de cada experimento

Ver `CLAUDE.md` para las convenciones.

## Mantenimiento

```zsh
pnpm up --latest && pnpm build
```
