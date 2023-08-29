<script setup>
// import { ref ,onUpdated} from 'vue'

// import { useLocaleStore } from './stores/localeStore';
// const locale = useLocaleStore();
// locale.getlocale();

// import { useLocale } from 'vuetify'
// const { current } = useLocale()

// const locale =
//   localStorage.getItem('locale') || navigator.language.substring(0, 2)
// const i18n = {
//   locale: ref(locale),
// };

// onMounted(() => {
//   current.value = i18n.locale.value
//   document.dir = localStorage.getItem('dir');
// })
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <RouterView />
</template>
