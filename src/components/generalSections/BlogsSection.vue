<template>
  <section class="services_section_wrapper">
    <v-container>
      <SectionHeader
        :title="'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة'"
        :subtitle="'المدونة'"
        :alignment="'alignCenter'"
        :activeColor="'#25006C'"
      />
      <BlogsCarousel :carousel-items="sectionContent" />
      <BaseButton
        :title="'جميع المدونات'"
        :btnType="'primaryBtn'"
        :link="'/blogs'"
      />
    </v-container>
  </section>
</template>

<script setup>
import BlogsCarousel from '../carousels/BlogsCarousel.vue'

defineProps({
  sectionContent: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.primaryBtn {
  inline-size: fit-content;
  margin-inline: auto;
  margin-block-start: 3rem;
}
</style>
