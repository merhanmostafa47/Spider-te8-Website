<template>
    <section class="feature_section_wrapper">
        <v-container>
            <v-row align="center" justify="space-between">
                <v-col cols="12" lg="3">
                    <SectionHeader :title="'أهم مميزات التعاون مع سبايدر-تك'" :descSize="'60%'" :activeColor="'#25006C'" />
                    <BaseButton :title="'اطلب خدمة الان'" :link="'/services'" :btn-type="'primaryBtn'" />
                </v-col>
                <v-col cols="12" lg="8">
                    <v-row>
                        <v-col cols="12" sm="6" v-for="item in sectionContent" :key="item.id">
                            <FeatureCard :cardData="item" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup>
import FeatureCard from '../base/cards/FeatureCard.vue'
defineProps({
    sectionContent: {
        type: Array,
        required: true,
    }
})
</script>