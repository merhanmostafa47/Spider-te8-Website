<template>
  <swiper :slides-per-view="4" :space-between="30" :loop="true" :autoplay="true" :breakpoints="{
    320: {
      slidesPerView: 1,
    },
    551: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }">
    <swiper-slide v-for="item in carouselItems" :key="item.id">
      <ServiceCard :card-data="item" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import ServiceCard from '../base/cards/ServiceCard.vue';

defineProps({
  carouselItems: {
    type: Array,
    required: true,
  },
})

</script>
