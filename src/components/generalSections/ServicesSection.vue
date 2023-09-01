<template>
  <section class="services_section_wrapper">
    <v-container :fluid="true">
      <SectionHeader :title="'نوفر لك خدماتنا المميزة مع ادواتنا'" :alignment="'alignCenter'" />
      <ServicesCarousel :carousel-items="sectionContent" />
    </v-container>
  </section>
</template>

<script setup>
import SectionHeader from '../base/SectionHeader.vue'
import ServicesCarousel from '../carousels/ServicesCarousel.vue'

defineProps({
  sectionContent: {
    type: Object,
    required: true
  }
})

</script>
