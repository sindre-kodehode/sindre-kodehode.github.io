import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/scrimba-07-first-react/dist/",
  plugins: [react()],
  server: {
    open: true
  }
})
