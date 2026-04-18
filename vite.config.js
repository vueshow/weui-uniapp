import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 5174,
  },
  plugins: [
    uni(),
  ],
})
