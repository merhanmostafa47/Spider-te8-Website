<template>
    <button @click="setLocale('en')">EN</button>
    <button @click="setLocale('ar')">AR</button>
</template>

<script>
export default {
    name: 'TheNavbar',

    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale;
            localStorage.setItem('locale', locale);
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    margin-inline: 1rem;
}
</style>