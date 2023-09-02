<template>
  <section class="statistics_section_wrapper">
    <v-container>
      <v-row class="custom_row">
        <v-col sm="6" lg="3" v-for="item in sectionContent" :key="item.id">
          <div class="box">
            <div class="box_image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="box_content">
              <h3 class="box_title">
                {{ item.title }}
              </h3>
              <p class="box_description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
defineProps({
  sectionContent: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.statistics_section_wrapper {
  padding-block: 0;
}

.custom_row {
  transform: translateY(-60%);
  border-radius: 1rem;
  @include heavyShadow;
  padding: 1rem 2rem;
  background-color: $white_clr;

  @include media(lg) {
    transform: translateY(-50%)
  }

  @include media(sm) {
    transform: translateY(0)
  }

  .box {
    @include flexCenterAlignment;
    flex-direction: row;
    gap: 1rem;

    .box_image {
      @include size(4rem, 4rem);

      img {
        @include size(100%, 100%);
        object-fit: contain;
      }
    }

    .box_content {
      @include flexCenterAlignment;
      flex-direction: column;

      .box_title {
        @include font(600, 1.5rem, $main_theme_clr);
        margin-block-end: .5rem;
        text-align: center
      }

      .box_description {
        @include font(500, 1rem, $main_theme_clr);
        text-align: center
      }
    }
  }
}</style>
