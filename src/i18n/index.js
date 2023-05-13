import { createI18n } from "vue-i18n"

const messages = {
    en: {
        nav: {
            home: "Home",
            about: "About"
        },
        home: {
            header: "Welcome to the Vue 3 I18n POC development",
            created_by: "This POC was developed by {developer}.",
        },
        about: {
            header: "About us",
            desc: "{developer} is a Junior Frontend Developer."
        }
    },
    tr: {
        nav: {
            home: "Anasayfa",
            about: "Hakkında"
        },
        home: {
            header: "Vue 3 I18n POC geliştirmesine hoşgeldiniz",
            created_by: "Bu POC çalışması {developer} tarafından geliştirilmiştir",
        },
        about: {
            header: "Hakkında",
            desc: "{developer} Junior bir Frontend Developerdır."
        }
    }
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages
})