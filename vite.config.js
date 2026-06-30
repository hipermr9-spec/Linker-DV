import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'linker-dv-production.up.railway.app'
    ]
  },
  preview: {
    allowedHosts: [
      'linker-dv-production.up.railway.app'
    ]
  }
})