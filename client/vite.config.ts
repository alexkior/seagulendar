import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import { config as loadEnv } from 'dotenv'

loadEnv()

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [
    react(),
    !isProduction && mkcert(),
  ].filter(Boolean),
  server: {
    host: '0.0.0.0',
    port: 8080,
    https: true,
  },
  base: isProduction ? '/' : './',
  root: isProduction ? undefined : '/app',
})
