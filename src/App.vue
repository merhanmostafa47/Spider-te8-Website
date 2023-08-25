<script setup>
import { ref } from 'vue'
import TheNavbar from './components/navigation/TheNavbar.vue'

import { useLocale } from 'vuetify'
const { current } = useLocale()

const locale =
  localStorage.getItem('locale') || navigator.language.substring(0, 2)
const i18n = {
  locale: ref(locale),
}
current.value = i18n.locale.value
document.dir = locale === 'en' ? 'ltr' : 'rtl'
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <RouterView />
</template>
