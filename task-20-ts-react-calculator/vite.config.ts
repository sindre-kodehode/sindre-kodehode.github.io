import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/task-20-ts-react-calculator/dist/",
  plugins: [react()],
  server: {
    open: true
  }
})
