import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
      '@layouts': '/src/layouts',
      '@styles': '/src/styles',
    },
  },
})
