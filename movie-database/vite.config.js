import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  base: '/movie-database-lucy/',
  build: {
    outDir: 'movie-database-lucy'
  },
  plugins: [react()],
})