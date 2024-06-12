import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api": "https://fullstack-practice-1-dowd.onrender.com"
    }
  },
  plugins: [react()],
})
