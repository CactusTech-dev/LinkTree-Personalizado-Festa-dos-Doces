import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: O nome do repositório deve estar entre barras
  base: '/LinkTree-Personalizado-Festa-dos-Doces/',
})