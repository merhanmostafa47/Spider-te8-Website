<template>
  <main>
    <heroSection :sectionContent="homeHero" />
    <ServicesSection :sectionContent="homeServices" />
    <AboutSection :sectionContent="homeAbout" />
    <StatisticsSection :section-content="homeStatistics" />
    <ProjectsSection :section-content="projects" :tabsList="projectsTabs" :tabs-content="projects.projects" />
    <FeaturesSection :sectionContent="homeFeatures" />
    <ReadyProjects :section-content="projects" />
    <SpecialSections :section-content="specialSections" />
  </main>
</template>

<script setup>
import heroSection from '../components/generalSections/heroSection.vue';
import ServicesSection from '../components/generalSections/ServicesSection.vue';
import AboutSection from '../components/generalSections/AboutSection.vue';
import StatisticsSection from '../components/generalSections/StatisticsSection.vue';
import FeaturesSection from '../components/generalSections/FeaturesSection.vue';
import ReadyProjects from '../components/generalSections/ReadyProjects.vue';
import SpecialSections from '../components/generalSections/SpecialSections.vue';
import ProjectsSection from '../components/generalSections/ProjectsSection.vue';

import allData from '../helpers/dummyData'
const { homeAbout, homeHero, homeServices, homeStatistics, homeFeatures, projects, projectsTabs, specialSections } = allData
</script>
