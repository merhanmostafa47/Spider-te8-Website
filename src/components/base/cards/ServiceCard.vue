<template>
    <div class="service_card_wrapper">
        <div class="card_content">
            <h3 class="card_title">
                {{ cardData.title }}
            </h3>
            <p class="card_copy">
                {{ cardData.description }}
            </p>
        </div>
        <div class="card_image">
            <img :src="cardData.image" :alt="cardData.title" />
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
.service_card_wrapper {
    padding: 2rem;
    background-color: $card_background_clr;
    border: 1px solid $border_main_clr;
    border-radius: 1rem;
    @include flexStartAlignment;
    justify-content: space-between;
    min-block-size: 25rem;

    position: relative;
    overflow: hidden;


    &::before {
        position: absolute;
        content: '';
        @include size(60%, 3px);
        inset-block-start: 0;
        border-radius: 5px;
        background-color: $main_theme_clr;
        z-index: 2;
    }

    &::after {
        position: absolute;
        content: '';
        @include size(100%, 0);
        inset-inline: 0;
        inset-block-start: 0;
        background: linear-gradient(44deg, #25006c 0%, #3c06bc 100%);
        z-index: 1;
        transition: all 0.5s ease-in-out;
    }

    .card_content {
        text-transform: capitalize;
        position: relative;
        z-index: 2;

        .card_title {
            @include font(700, 1.15rem, $theme_text_clr);
            margin-block-end: 2rem;

            @include media(md) {
                font-size: 1rem;
            }
        }

        .card_copy {
            @include font(500, 1rem, $theme_text_clr);

            @include media(md) {
                font-size: .9rem;
            }
        }
    }

    .card_image {
        @include size(2.5rem, 2.5rem);
        align-self: flex-end;
        position: relative;
        z-index: 2;

        img {
            @include size(100%, 100%);
            object-fit: contain;
            @include filterSecondaryThemeClr;
        }
    }

    &:hover {
        @include simpleShadow;
        border: none;
        z-index: 1;

        .card_copy,
        .card_title {
            color: $white_clr;
        }

        img {
            @include filterWhite;
        }

        &::after {
            block-size: 100%;
        }

        &::before {
            background-color: $secondary_theme_clr;
        }
    }
}
</style>
