<template>
  <nav class="navbar_wrapper">
    <v-container>
      <v-row justify="space-between" align="center">
        <div class="logo">
          <img src="../../assets/images/logo.svg" alt="" />
        </div>
        <ul class="nav_list">
          <li class="nav_item" v-for="(item, i) in navList" :key="i">
            <router-link :to="item.to">{{ item.title }}</router-link>
          </li>
        </ul>
      </v-row>
    </v-container>
  </nav>

  <button @click="setLocale('en')">EN</button>
  <button @click="setLocale('ar')">AR</button>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const navList = reactive([
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Services',
    to: '/services',
  },
  {
    title: 'Projects',
    to: '/projects',
  },
  {
    title: 'Store',
    to: '/store',
  },
])

const setLocale = (locale) => {
  localStorage.setItem('locale', locale)
  t.locale = locale 
}
</script>

<style lang="scss" scoped>
.navbar_wrapper {
  .logo {
    @include size(8rem, auto);
    img {
      max-inline-size: 100%;
    }
  }

  .nav_list {
    @include flex(center, center, row);
    gap: 1.5rem;
  }
}
button {
  margin-inline: 1rem;
}
</style>
