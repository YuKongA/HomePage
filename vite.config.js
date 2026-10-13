import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  define: {
    __VUE_OPTIONS_API__: false
  },
  build: {
    cssMinify: 'lightningcss'
  }
})
