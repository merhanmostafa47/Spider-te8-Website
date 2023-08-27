<template>
  <nav class="navbar_wrapper">
    <v-container>
      <v-row justify="space-between" align="center">
        <div class="logo">
          <img src="../../assets/images/logo/logo.svg" alt="" />
        </div>
        <ul class="nav_list">
          <li class="nav_item" v-for="(item, i) in navList" :key="i">
            <router-link :to="item.to" class="nav_link">{{ item.title }}</router-link>
          </li>
        </ul>
        <router-link to="/contact" class="primary-btn">
          {{$t('NAV.contactUs')}}
        </router-link>
      </v-row>
    </v-container>
  </nav>

  <button>EN</button>
  <button>AR</button>
</template>

<script setup>
import { reactive } from 'vue'

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
    title: 'Our Work',
    to: '/projects',
  },
  {
    title:'Store',
    to: '/store',
  },
  {
    title:'blog',
    to: '/blog',
  },
])
</script>
<style lang="scss" scoped>
.navbar_wrapper{
    padding-block: 1rem;
    .logo {
        @include size(9rem, auto);
        img {
          max-inline-size: 100%;
        }
      }

      .nav_list {
        @include flex(center, center, row);
        gap: 1.5rem;

        .nav_item{
          .nav_link{
            text-decoration: none;
            @include font(500,1.25rem,$main_theme_clr);
          }
        }
      }
    
}
</style>
