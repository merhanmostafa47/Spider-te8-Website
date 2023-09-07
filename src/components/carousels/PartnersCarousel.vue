<template>
  <swiper
    :slides-per-view="6"
    :space-between="40"
    :loop="true"
    :autoplay="true"
    :breakpoints="{
      320: {
        slidesPerView: 2,
      },
      551: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    }"
  >
    <swiper-slide v-for="item in carouselItems" :key="item.id">
      <div class="partner_image_wrapper">
        <img
          :src="item.image"
          :alt="item.title"
          width="100%"
          height="100%"
          loading="lazy"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
defineProps({
  carouselItems: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.partner_image_wrapper {
  @include size(6rem, auto);

  img {
    @include size(100%, 100%);
    object-fit: contain;
  }
}
</style>
