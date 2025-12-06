import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para Vercel, o base deve ser '/' (raiz)
  base: '/',
})
