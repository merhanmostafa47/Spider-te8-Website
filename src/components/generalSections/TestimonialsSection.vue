<template>
    <section class="partner_testimonials_wrapper">
        <v-container>
            <SectionHeader :subtitle="'موثوق به من قبل أكثر من 100 شركة ناشئة وعمل مستقل'" :activeColor="'white'"
                :alignment="'alignCenter'" class="mb-0" />
            <PartnersCarousel :carousel-items="partnersData" />
        </v-container>
    </section>
</template>

<script setup>
import PartnersCarousel from '../carousels/PartnersCarousel.vue'

defineProps({
    partnersData: {
        type: Array,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.partner_testimonials_wrapper {
    background-color: $theme_main_bg_clr;
}
</style>
