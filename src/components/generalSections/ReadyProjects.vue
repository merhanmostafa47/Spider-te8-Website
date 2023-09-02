<template>
    <section class="ready_projects_section_wrapper">
        <v-container>
            <SectionHeader :title="sectionContent.title" :subtitle="sectionContent.subtitle" :activeColor="'#25006C'"
                :alignment="'alignCenter'" />
            <v-row>
                <v-col cols="12" md="6" v-for="item in sectionContent.projects" :key="item.id">
                    <ProjectCard :cardData="item" />
                </v-col>
            </v-row>
            <BaseButton :title="'جميع المشاريع'" :btnType="'primaryBtn'" :link="'/projects'"/>
        </v-container>
    </section>
</template>

<script setup>
import ProjectCard from '../base/cards/ProjectCard.vue'
defineProps({
    sectionContent: {
        type: Object,
        required: true
    }
})
</script>

<style scoped lang="scss">
.primaryBtn{
    inline-size: fit-content;
    margin-inline: auto;
    margin-block-start: 3rem;
}
</style>