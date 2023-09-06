<template>
  <swiper
    :slides-per-view="3"
    :space-between="40"
    :loop="true"
    :autoplay="true"
    :breakpoints="{
      320: {
        slidesPerView: 1,
      },
      634: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }"
  >
    <swiper-slide v-for="item in carouselItems" :key="item.id">
      <BlogCard :blog-data="item" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import BlogCard from '../base/cards/BlogCard.vue'

defineProps({
  carouselItems: {
    type: Array,
    required: true,
  },
})
</script>
