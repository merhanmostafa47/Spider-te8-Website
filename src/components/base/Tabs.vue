<template>
  <v-tabs v-model="tab" align-tabs="center">
    <v-tab :value="tab.title" v-for="tab in tabs" :key="tab.id">{{
      tab.title
    }}</v-tab>
  </v-tabs>

  <v-card-text>
    <v-window v-model="tab">
      <v-window-item :value="tab.title" v-for="tab in tabs">
        <v-row>
          <v-col cols="12" md="6" v-for="item in tabsContent" :key="item.id">
            <ProjectCard :cardData="item" />
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../base/cards/ProjectCard.vue'

const tab = ref(null)

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  tabsContent: {
    type: Array,
    required: true,
  },
})
</script>
<style lang="scss">
.v-tabs {
  height: auto;
  flex-wrap: wrap;
  margin-block-end: 2rem;

  .v-slide-group-item--active {
    border-bottom-color: $main_theme_clr;
    color: $main_theme_clr;
    font-weight: 700;
  }
}
</style>
