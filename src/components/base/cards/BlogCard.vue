<template>
  <div class="blog_card_wrapper">
    <div class="blog_image">
      <img
        :src="blogData.image"
        :alt="blogData.title"
        width="100"
        height="100"
        loading="lazy"
      />
    </div>
    <div class="box_content">
      <p class="blog_type">{{ blogData.type }}</p>
      <h3 class="blog_title">
        {{ blogData.title }}
      </h3>
      <p class="blog_description">
        {{ blogData.description }}
      </p>
      <div class="blog_author">
        <div class="author_img">
          <img
            :src="blogData.author_image"
            :alt="blogData.author_title"
            width="100"
            height="100"
            loading="lazy"
          />
        </div>
        <div>
          <h4 class="author_title">{{ blogData.author_title }}</h4>
          <p class="blog_post_date">{{ blogData.post_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blogData: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.blog_card_wrapper {
  position: relative;
  border: 1px solid transparent;
  transition: all 0.3s ease-in;

  &::after {
    position: absolute;
    content: '';
    @include size(90%, 3px);
    background-color: transparent;
    inset-block-end: 0;
    border-radius: 1rem;
    inset-inline: 5%;
    transition: all 0.3s ease-in;
  }

  .blog_image {
    @include size(100%, 16rem);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s ease-in;
    img {
      @include size(100%, 100%);
      object-fit: cover;
      transition: all 0.3s ease-in;
    }
  }

  .box_content {
    padding: 2rem 1rem;
    .blog_type {
      @include font(500, 0.8rem, $light_main_theme_clr);
      margin-block: 0 0.5rem;
    }

    .blog_title {
      @include font(600, 1.1rem, $main_theme_clr);

      @include media(sm) {
        font-size: 1rem;
      }
    }

    .blog_description {
      @include font(400, 0.8rem, $main_theme_clr);
      margin-block: 1rem 2rem;
    }

    .blog_author {
      @include flex(flex-start, center, row);
      gap: 1rem;

      .author_img {
        @include size(2.8rem, 2.8rem);
        overflow: hidden;
        border-radius: 50%;
        @include simpleShadow;
        padding: 0.3rem;
        img {
          @include size(100%, 100%);
          object-fit: contain;
        }
      }

      .author_title {
        @include font(600, 0.8rem, $main_theme_clr);
      }
      .blog_post_date {
        @include font(400, 0.8rem, $theme_text_clr_50);
      }
    }
  }

  &:hover {
    background-color: $white_clr;
    border-color: $border_main_clr;
    border-radius: 1rem;
    overflow: hidden;
    @include heavyShadow;
    transition: all 0.3s ease-in;

    &::after {
      background-color: $light_main_theme_clr;
    }

    .blog_image {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
