<template>
    <section class="about_section_wrapper bg-main-color">
        <v-container>
            <v-row class="section__row">
                <v-col :sm="12" :md="6">
                    <SectionHeader :title="sectionContent.title" :description="sectionContent.description"
                        :alignment="'alignStart'" :activeColor="'white'" />
                </v-col>
                <v-col :sm="12" :md="6">
                    <div class="section_image">
                        <img :src="sectionContent.image" :alt="sectionContent.title" />
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
        required: true
    }
})
</script>

<style lang="scss" scoped>
.section__row {
    @include media(md) {
        flex-direction: column-reverse;
    }
}

.section_image {
    block-size: 30rem;

    @include media(md) {
        block-size: 25rem
    }

    img {
        @include size(100%, 100%);
        max-block-size: 100%;
        max-inline-size: 100%;
        object-fit: contain;
    }
}
</style>