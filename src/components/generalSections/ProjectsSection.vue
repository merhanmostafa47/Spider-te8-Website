<template>
    <section class="ready_projects_section_wrapper">
        <v-container>
            <SectionHeader :title="sectionContent.title" :activeColor="'#25006C'" :alignment="'alignCenter'" />
            <Tabs :tabs="tabsList" :tabsContent="tabsContent" />
            <BaseButton :title="'مشاهدة اعمالنا'" :btnType="'primaryBtn'" :link="'/projects'" />
        </v-container>
    </section>
</template>

<script setup>
import Tabs from '../base/Tabs.vue'

defineProps({
    sectionContent: {
        type: Object,
        required: true
    },
    tabsList: {
        type: Array,
        required: true
    },
    tabsContent: {
        type: Array,
        required: true
    }
})
</script>

<style scoped lang="scss">
.primaryBtn {
    inline-size: fit-content;
    margin-inline: auto;
    margin-block-start: 3rem;
}
</style>