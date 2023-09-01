<template>
    <div class="small_nav_wrapper">
        <v-row justify="space-between" align="center" class="mx-0">
            <div class="logo filter_white">
                <img src="@/assets/media/logo/logo.svg" alt="" />
            </div>
            <v-layout>
                <v-navigation-drawer v-model="drawer" temporary class="bg-main-color " theme="dark">
                    <v-img :width="300" src="@/assets/media/logo/logo.svg"></v-img>

                    <v-list density="compact" nav v-for="(item, i) in navList" :key="i">
                        <v-list-item :prepend-icon="`mdi-${item.icon}`" :title="item.title" :to="item.to"></v-list-item>
                    </v-list>
                </v-navigation-drawer>
                <v-main>
                    <div class="d-flex justify-end align-end h-auto">
                        <v-btn :variant="'text'" @click.stop="drawer = !drawer">
                            <Icon icon="mdi-menu" class="bar_icon" />
                        </v-btn>
                    </div>
                </v-main>
            </v-layout>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            navList: [
                {
                    icon: 'dots-circle',
                    title: 'الرئيسية',
                    to: '/',
                },
                {
                    icon: 'dots-circle',
                    title: 'نبذة عن',
                    to: '/about',
                },
                {
                    icon: 'dots-circle',
                    title: 'خدماتنا',
                    to: '/services',
                },
                {
                    icon: 'dots-circle',
                    title: 'اعمالنا',
                    to: '/projects',
                },
                {
                    icon: 'dots-circle',
                    title: 'المتجر',
                    to: '/store',
                },
                {
                    icon: 'dots-circle',
                    title: 'المدونة',
                    to: '/blog',
                },
            ]

        }
    },
}
</script>

<style lang="scss">
.small_nav_wrapper {
    @media (min-width:991px) {
        display: none;
    }

    .bar_icon {
        @include size(2rem, 2rem);
        color: $white_clr;
    }
}

.v-navigation-drawer {
    .v-navigation-drawer__scrim {
        opacity: 0.5 !important;
    }

    .v-responsive__sizer {
        padding-bottom: 45% !important;
    }

    .v-list-item--nav {
        .v-list-item-title {
            font-size: 1rem;
            line-height: 2rem;
        }
    }
}

.v-btn--size-default {
    min-width: 36px;
}
</style>