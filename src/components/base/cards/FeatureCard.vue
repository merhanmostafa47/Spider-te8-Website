<template>
    <div class="feature_card_wrapper">
        <div class="card_image">
            <img :src="cardData.image" :alt="cardData.title" />
        </div>
        <h3 class="card_title">
            {{ cardData.title }}
        </h3>
        <p class="card_copy">
            {{ cardData.description }}
        </p>
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
.feature_card_wrapper {
    padding: 2rem 1rem;
    background-color: $card_background_dark_clr;
    border-radius: 1.875rem;
    @include flexStartAlignment;
    min-block-size: 19rem;
    inline-size: 26rem;
    text-transform: capitalize;

    .card_image {
        @include size(3rem, 3rem);
        margin-block-end: 1rem;

        img {
            @include size(100%, 100%);
            object-fit: contain;
            @include filterWhite;
        }
    }

    .card_title {
        @include font(500, 1.25rem, $white_clr);
        margin-block-end: 1.75rem;
        font-family: $medium_font;

        @include media(md) {
            font-size: 1.15rem;
        }
    }

    .card_copy {
        @include font(400, 1.15rem, $white_clr);
        @include lines(2);

        @include media(md) {
            font-size: 1rem;
        }
    }
}</style>
