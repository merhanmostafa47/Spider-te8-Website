<template>
  <main>
    <heroSection :sectionContent="homeHero" />
    <ServicesSection :sectionContent="homeServices" />
    <AboutSection :sectionContent="homeAbout" />
    <StatisticsSection :section-content="homeStatistics" />
    <FeaturesSection :sectionContent="homeFeatures" />
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import heroSection from '../components/generalSections/heroSection.vue';
import ServicesSection from '../components/generalSections/ServicesSection.vue';
import AboutSection from '../components/generalSections/AboutSection.vue';
import StatisticsSection from '../components/generalSections/StatisticsSection.vue';

import allData from '../helpers/dummyData'
import FeatureCard from '../components/base/cards/FeatureCard.vue';
import FeaturesSection from '../components/generalSections/FeaturesSection.vue';
const { homeAbout, homeHero, homeServices, homeStatistics,homeFeatures } = allData


const projectData = reactive({
  title: "Sallon app",
  description: "سبايدر-تك هي شركة ناشئة في مجال تطوير البرمجيات تُمكن مؤسستك من إكتساب مِيزة تنافسية في سوق العمل عن طريق الخِدْمَات التي تقدمها وتدعم بها أعمالك. كفريق",
  image: "../src/assets/media/images/project_img.png",
})
</script>
