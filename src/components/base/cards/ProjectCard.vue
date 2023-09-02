<template>
  <div class="project_card_wrapper">
    <div class="card_image">
      <img :src="cardData.image" alt="" />
    </div>
    <div class="card_overlay">
      <h3 class="card_title">
        {{ cardData.title }}
      </h3>
      <p class="card_copy">
        {{ cardData.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cardData: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.project_card_wrapper {
  border-radius: 1rem;
  overflow: hidden;
  block-size: 25rem;
  position: relative;
  transition: all 0.5s ease-in-out;

  .card_image {
    @include size(100%, 100%);
    img {
      @include size(100%, 100%);
      object-fit: cover;
    }
  }

  &::before,
  .card_overlay {
    position: absolute;
    @include size(100%, 0);
    z-index: 1;
    overflow: hidden;
    inset-block-start: 0;
    transition: all 0.5s ease-in-out;
  }
  &::before {
    content: '';
    background-color: rgba(38, 0, 108, 0.7);
    // mix-blend-mode: multiply;
    border-radius: 1rem;
  }
  .card_overlay {
    @include flexCenterAlignment;

    .card_title {
      @include font(700, 1.75rem, $white_clr);
      text-transform: uppercase;
      margin-block-end: 1rem;
    }
    .card_copy {
      @include font(400, 1.25rem, $white_clr);
      text-align: center;
      margin-block-end: 1.5rem;
      inline-size: 75%;
    }
  }

  &:hover {
    &::before,
    .card_overlay {
      @include size(100%, 100%);
      transform: translate(0, 0);
      inset: 0;
    }
  }
}
</style>
