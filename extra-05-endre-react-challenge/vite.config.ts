import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/extra-05-endre-react-challenge/dist/",
  plugins: [react()],
  server: {
    open: true
  }
})
