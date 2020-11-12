// i18nPlugin.js for translations
import { ref, provide, inject } from 'vue';

const localeConfig = {
    messages: ref({})
};

const createI18n = config => {
    setMessages(config.messages);
    return {
        locale: ref(config.locale),
        $t(key) {
            return localeConfig.messages.value[this.locale.value]
                ? localeConfig.messages.value[this.locale.value][key]
                : 'missing_translate';
        }
    };
};

const i18nSymbol = Symbol();

export function provideI18n(i18nConfig) {
    const i18n = createI18n(i18nConfig);
    provide(i18nSymbol, i18n);
}

export function useI18n() {
    const i18n = inject(i18nSymbol);
    if (!i18n) throw new Error('No i18n provided!');

    return i18n;
}

export function setMessages(messages) {
    localeConfig.messages.value = messages || {};
}
