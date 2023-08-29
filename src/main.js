import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//Plugins
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import Particles from "vue3-particles";
import { Icon } from '@iconify/vue';
import { createPinia } from 'pinia'

app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(Particles)
app.use(createPinia())

//Components
app.component('Icon', Icon)

import TheNavbar from './components/navigation/TheNavbar.vue'
import smallNavigationBar from './components/navigation/smallNavigationBar/NavigationBar.vue'

app.component('TheNavbar', TheNavbar)
app.component('smallNavigationBar', smallNavigationBar)

app.component('SectionHeader', SectionHeader)
app.component('BaseButton', BaseButton)

import SectionHeader from './components/base/SectionHeader.vue';
import BaseButton from './components/base/BaseButton.vue'
app.mount('#app')
