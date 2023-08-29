<template>
    <RouterLink :to="link" :class="btnType">
        {{ title }}
    </RouterLink>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    btnType: {  //primaryBtn || secondaryBtn || BorderedBtn
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
})
</script>