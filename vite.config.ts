import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the build works from a GitHub Pages subpath like /previews/<id>/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2018',
    cssCodeSplit: false,
    assetsInlineLimit: 8192,
  },
})
