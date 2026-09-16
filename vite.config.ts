import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the build works when served from a subpath such as /previews/<id>/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2019',
    cssCodeSplit: false,
    sourcemap: false,
  },
})
