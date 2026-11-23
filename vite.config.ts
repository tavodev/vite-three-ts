import { defineConfig } from 'vite'

export default defineConfig({
  server: { host: true },
  build: {
    target: 'es2022',
    // three.js alone is ~550 kB minified
    chunkSizeWarningLimit: 1000,
  },
})
