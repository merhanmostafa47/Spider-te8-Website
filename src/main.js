import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(createPinia())

app.mount('#app')
