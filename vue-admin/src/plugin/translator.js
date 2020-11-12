// plugins/i18n.js
import { ref } from 'vue';
import axios from 'axios';

const localeConfig = {
    locale: ref('en'),
    messages: ref({})
};

const translatedElements = [];

const updateTranslations = () => {
    for (const item of translatedElements) {
        item.el.innerHTML = localeConfig.messages.value[localeConfig.locale.value]
            ? localeConfig.messages.value[localeConfig.locale.value][item.value]
            : 'missing_translate';
    }
};

const loadTranslation = url => {
    axios.get(url)
        .then( resp => {
            setTranslation(resp.data);
         } )
        .catch( err => console.error(err) );
};

const setTranslation = messages => {
    localeConfig.messages.value = messages || {};
    updateTranslations();
}

const setLocale = locale => {
    if (localeConfig.locale.value !== locale) {
        localeConfig.locale.value = locale || 'en';
        updateTranslations();
    }
}

const getLocale = () => localeConfig.locale.value;

const translate = key => {
    return localeConfig.messages.value[localeConfig.locale.value]
        ? localeConfig.messages.value[localeConfig.locale.value][key]
        : 'missing_translate';
}

export default {
    install: (app, config) => {
        setLocale(config.locale);
        setTranslation(config.messages);

        if (config.url) {
            loadTranslation(config.url);
        }

        app.config.globalProperties.$translate = translate;
        
        app.config.globalProperties.setTranslation = setTranslation;        
        app.config.globalProperties.setLocale = setLocale;
        app.config.globalProperties.getLocale = getLocale;

        app.directive('translate', {
            mounted (el, binding) {
                translatedElements.push({ el, value: binding.value });
                updateTranslations();
            }
        })
    }
}
