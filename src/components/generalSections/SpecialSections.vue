<template>
    <section class="special_sections_wrapper bg-main-color">
        <v-container>
            <v-row align="center" justify="space-between">
                <v-col cols="12" lg="5">
                    <SectionHeader :title="sectionContent.title" :description="sectionContent.description"
                        :subtitle="sectionContent.subtitle" :activeColor="'white'" />
                    <BaseButton :title="'اطلب خدمة الان'" :link="'/services'" :btn-type="'secondaryBtn'" />
                </v-col>
                
                <v-col cols="12" lg="6">
                    <v-row justify="space-between">
                        <v-col cols="12" sm="6" md="4" v-for="item in sectionContent.sections" :key="item.id">
                            <div class="box">
                                <div class="box_image">
                                    <img :src="item.image" :alt="item.title" />
                                </div>
                                <h3 class="box_title">
                                    {{ item.title }}
                                </h3>
                            </div>
                        </v-col>
                    </v-row>
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
.secondaryBtn {
    inline-size: fit-content;
}

.box {
    @include flexCenterAlignment;
    flex-direction: column;
    gap: 1.5rem;
    margin-block-end: 1rem;

    .box_image {
        @include size(3.5rem, 3.5rem);

        img {
            @include size(100%, 100%);
            max-inline-size: 100%;
            object-fit: contain;
        }
    }

    .box_title {
        @include font(600, 1rem, $white_clr);
        margin-block-end: .5rem;
        text-align: center
    }
}
</style>