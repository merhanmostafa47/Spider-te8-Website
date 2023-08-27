<template>
  <main>
   <heroSection/>
  </main>
</template>
<script setup>
import heroSection from '../components/generalSections/heroSection.vue';

</script>
<style lang="scss" scoped>
h1 {
  @include font(700, 2.5rem,$mid_green_clr);
  text-transform: uppercase;
}
</style>
