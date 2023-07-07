import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

//NOT WORKING WITH VITE
// // register Base components globally
// const requireComponent = require.context(
//     './src',
//     true,
//     /Base[A-Z]\w+\.(vue|js)$/
//   )
//   requireComponent.keys().forEach(function (fileName) {
//     let baseComponentConfig = requireComponent(fileName)
//     baseComponentConfig =
//       baseComponentConfig.default || baseComponentConfig
//     const baseComponentName =
//       baseComponentConfig.name ||
//       fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
//     app.component(baseComponentName, baseComponentConfig)
//   })

app.mount('#app')