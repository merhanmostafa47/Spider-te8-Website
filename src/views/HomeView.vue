<template>
  <main>
    <heroSection :sectionContent="homeHero" />
    <ServicesSection :sectionContent="homeServices" />
    <AboutSection :sectionContent="homeAbout" />
    <StatisticsSection :section-content="homeStatistics" />
    <FeaturesSection :sectionContent="homeFeatures" />
    <ReadyProjects :section-content="homeReadyProjects"/>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import heroSection from '../components/generalSections/heroSection.vue';
import ServicesSection from '../components/generalSections/ServicesSection.vue';
import AboutSection from '../components/generalSections/AboutSection.vue';
import StatisticsSection from '../components/generalSections/StatisticsSection.vue';
import FeaturesSection from '../components/generalSections/FeaturesSection.vue';
import ReadyProjects from '../components/generalSections/ReadyProjects.vue';

import allData from '../helpers/dummyData'
const { homeAbout, homeHero, homeServices, homeStatistics,homeFeatures,homeReadyProjects } = allData


const projectData = reactive({
  title: "Sallon app",
  description: "سبايدر-تك هي شركة ناشئة في مجال تطوير البرمجيات تُمكن مؤسستك من إكتساب مِيزة تنافسية في سوق العمل عن طريق الخِدْمَات التي تقدمها وتدعم بها أعمالك. كفريق",
  image: "../src/assets/media/images/project_1.png",
})
</script>
