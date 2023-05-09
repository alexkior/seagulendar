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
  build: {
    // Enable cache-busting by including a content hash in the output file names
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // This will generate file names like "index.12345678.js" and "index.abcdefgh.css"
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    https: true,
  },
  base: isProduction ? '/' : './',
  root: isProduction ? undefined : process.cwd(),
})
