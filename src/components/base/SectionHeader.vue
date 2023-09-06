<template>
  <div
    class="section_header_wrapper"
    :class="alignment"
    :style="{
      color: activeColor,
    }"
  >
    <p class="subtitle" v-if="subtitle">
      {{ subtitle }}
    </p>
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="description" v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
  alignment: {
    //alignStart || alignCenter
    type: String,
    required: false,
  },
  activeColor: {
    type: String,
    required: false,
  },
  descSize: {
    type: String,
    required: false,
  },
})
</script>

<style lang="scss" scoped>
.section_header_wrapper {
  margin-block-end: 3rem;

  @include media(md) {
    margin-block-end: 1rem;
  }
}

.title {
  font-size: 1.5rem;
  font-family: $bold_font;
  margin-block-end: 2rem;

  @include media(md) {
    font-size: 1.25rem;
  }

  @include media(sm) {
    font-size: 1.15rem;
  }
}

.subtitle {
  font-size: 1.15rem;
  font-family: $semi_bold_font;
  margin-block-end: 1rem;

  @include media(md) {
    font-size: 1rem;
  }

  @include media(sm) {
    font-size: 0.8em;
  }
}

.description {
  font-size: 1.15rem;
  font-family: $regular_font;
  inline-size: v-bind(descSize);

  @include media(md) {
    font-size: 1rem;
    inline-size: 100%;
  }

  @include media(sm) {
    font-size: 0.9rem;
  }
}
</style>
