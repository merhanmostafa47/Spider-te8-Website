<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/helloworld.vue'
import TheNavbar from './components/navigation/TheNavbar.vue'

export default {
  components: {
    HelloWorld,
    TheNavbar,
  },

  created() {
    const locale = localStorage.getItem('locale')

    if (locale) {
      this.$i18n.locale = locale
    } else if (navigator.language) {
      this.$i18n.locale = navigator.language.substring(0, 2)
    }
  },
}
</script>

<template>
  <header>
    <TheNavbar />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
