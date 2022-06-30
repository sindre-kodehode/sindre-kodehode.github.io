import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/scrimba-08-travel-journal/dist/",
  plugins: [react()],
  server: {
    open: true
  }
})
