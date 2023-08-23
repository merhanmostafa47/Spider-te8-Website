import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from "node:path";
import ViteGlobalStyle from '@originjs/vite-plugin-global-style'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteGlobalStyle({
      globalStyle: "./src/assets/sass/main.scss",
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
      strictMessage: false
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/sass/main.scss";
        `,
      },
    },
  },
})
