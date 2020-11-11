// i18nPlugin.js
import { ref, provide, inject } from 'vue';
import axios from 'axios';

const localeConfig = {
    messages: ref({})
};

const createI18n = config => {
    if (config.messages) {
        localeConfig.messages.value = config.messages;
    }
    
    return ({
        locale: ref(config.locale),
        $t(key) {
            return localeConfig.messages.value[this.locale.value]
                ? localeConfig.messages.value[this.locale.value][key]
                : '';
        }
    });
}

const i18nSymbol = Symbol();

export function provideI18n(i18nConfig) {
    const i18n = createI18n(i18nConfig);
    provide(i18nSymbol, i18n);
}

export function useI18n() {
    const i18n = inject(i18nSymbol);
    if (!i18n) throw new Error("No i18n provided!!!");

    return i18n;
}

export function loadMessages(url) {
    console.log(url, axios);
    return axios.get(url)
        .then(
            resp => setMessages(resp.data)
        )
        .catch(err => console.error(err))
}

export function setMessages(messages) {
    localeConfig.messages.value = messages;
    return localStorage.messages;
}

export function updateMessage(key, content) {
    localeConfig.messages[key] = content;
}
