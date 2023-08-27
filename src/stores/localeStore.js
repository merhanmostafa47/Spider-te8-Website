import { defineStore } from "pinia";

// import { useI18n } from "vue-i18n";
// const { t } = useI18n()

// import { useLocale } from 'vuetify'
// const { current } = useLocale()

export const useLocaleStore= defineStore("localeStore", {
    state: () => {
        return {
            locale:null
        }
    },

    actions: {

        setLocale(locale) {
            this.locale = locale;
            localStorage.setItem("locale", locale);
            document.dir = localStorage.getItem('dir')  
        },
        
        getlocale() {
            // current.value = localStorage.getItem('dir')
            // t.locale.value = locale
        }
    }
})