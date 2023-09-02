import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//Plugins
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import Particles from 'particles.vue3'

import { createPinia } from 'pinia'
import { registerGlobalComponents } from './helpers/globalComponents'

app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(Particles)
app.use(createPinia())

//Components
registerGlobalComponents(app)

app.mount('#app')
