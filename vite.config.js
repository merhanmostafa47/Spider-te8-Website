import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from "node:path";
import ViteGlobalStyle from '@originjs/vite-plugin-global-style'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  plugins: [
    vue(),
    ViteGlobalStyle({
      globalStyle: "./src/assets/sass/components/navigation/theNavbar.scss",
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
      strictMessage: false
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/sass/main.scss";
          @import "./src/assets/sass/abstracts/_variables.scss";
          @import "./src/assets/sass/abstracts/_mixins.scss";
        `,
      },
    },
  },
})
