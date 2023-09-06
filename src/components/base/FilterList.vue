<template>
    <ul class="filter_list">
        <li v-for="item in filterData" :key="item">
            {{ item }}
        </li>
    </ul>
</template>

<script setup>
defineProps({
    filterData: {
        type: Array,
        required: true
    }
})
</script>

<style scoped lang="scss">
.filter_list {
    @include flex(center, center);
    gap: 1rem;
    margin-block-end: 2rem;

    li {
        @include font(600, 1.25rem, $deactive_button_clr);
        text-transform: capitalize;
        padding: .2rem 2rem;
    }
}
</style>