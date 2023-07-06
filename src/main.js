import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import PageHome from './components/PageHome.vue'

// const routes = [
//     {
//         path:'/', 
//         component: PageHome
//     }
// ]

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
