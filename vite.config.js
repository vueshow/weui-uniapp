import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.UNI_BASE || '/',
  server: {
    host: '127.0.0.1',
    port: 5174,
  },
  plugins: [
    uni(),
  ],
})
