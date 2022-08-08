import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/task-21-ts-react-webshop/dist/",
  plugins: [react()],
  server: {
    open: true,
  }
})
