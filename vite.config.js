import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
// import {AntDesignVueResolver,ElementPlusResolver,VantResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // resolvers: [
      //   AntDesignVueResolver(),
      //   ElementPlusResolver(),
      //   VantResolver(),
      // ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
