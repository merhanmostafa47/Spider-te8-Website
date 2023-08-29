<template>
    <section class="hero_section_wrapper">
        <particles />
        <v-container align="center" justify="center" class="mx-auto">
            <div class="section_content">
                <SectionHeader :title="'فى سبايدر-تك نحول أفكارك لواقع'"
                    :description="'نحن دليلك فى رحلة التحول الرقمي , عالم من الابداع فى مجال البرمجيات و تصميم المواقع الاكترونية و المتاجر الالكترنية و تطبيقات الهاتف و انظمة الحسابات و الادارة'"
                    :alignment="'alignCenter'" :activeColor="'white'" />

                <div class="btns_wrapper">
                    <BaseButton :link="'/services'" :btn-type="'secondaryBtn'" :title="'طلب خدمة'" />
                </div>
            </div>
        </v-container>
    </section>
</template>

<script setup>
import particles from '../particles.vue';
</script>

<style lang="scss" scoped>
.hero_section_wrapper {
    position: relative;

    .section_content {
        min-block-size: calc(100vh - 127px);
        @include flexCenterAlignment;
        margin-inline: auto;
    }

    .btns_wrapper {
        @include flexCenterAlignment;
        margin-block-start: 3rem;
    }
}
</style>