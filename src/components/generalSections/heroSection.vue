<template>
  <div class="hero_section_wrapper">
    <particles />
    <v-container align="center" justify="center" class="mx-auto">
      <div class="section_content">
        <SectionHeader :title="sectionContent.title" :description="sectionContent.description" :alignment="'alignCenter'"
          :activeColor="'white'" :descSize="'70%'" />

        <div class="btns_wrapper">
          <BaseButton :link="'/services'" :btn-type="'secondaryBtn'" :title="'طلب خدمة'" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import particles from '../particles.vue'

defineProps({
  sectionContent: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.hero_section_wrapper {
  position: relative;
  min-block-size: calc(100vh - 127px);
  overflow: hidden !important;

  .section_content {
    position: relative;
    z-index: 1;
    min-block-size: calc(100vh - 127px);
    @include flexCenterAlignment;
    margin-inline: auto;
  }

  .btns_wrapper {
    @include flexCenterAlignment;
  }
}
</style>
