import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the site works under any subpath, e.g. /previews/<branch>/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { target: 'es2019', cssCodeSplit: false },
})
