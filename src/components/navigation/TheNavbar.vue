<template>
  <nav class="navbar_wrapper">
    <v-container class="mx-auto">
      <div class="app-nav">
        <v-row justify="space-between" align="center" class="m-0">
          <div class="logo filter_white">
            <img src="@/assets/media/logo/logo.svg" alt="" />
          </div>
          <ul class="nav_list">
            <li class="nav_item" v-for="(item, i) in navList" :key="i">
              <router-link :to="item.to" class="nav_link">{{ item.title }}</router-link>
            </li>
          </ul>
          <BaseButton :link="'/services'" :btn-type="'secondaryBtn'" :title="'طلب خدمة'" />
        </v-row>
      </div>
      <smallNavigationBar />
    </v-container>
  </nav>
</template>

<script setup>
import { onMounted, reactive } from 'vue'

const navList = reactive([
  {
    title: 'الرئيسية',
    to: '/',
  },
  {
    title: 'نبذة عن',
    to: '/about',
  },
  {
    title: 'خدماتنا',
    to: '/services',
  },
  {
    title: 'اعمالنا',
    to: '/projects',
  },
  {
    title: 'المتجر',
    to: '/store',
  },
  {
    title: 'المدونة',
    to: '/blog',
  },
])

</script>

