// plugins/i18n.js
import { ref } from 'vue';

const localeConfig = {
    locale: ref('en'),
    messages: ref({})
};

const setTranslation = messages => {
    localeConfig.messages.value = messages || {};
}

const setLocale = locale => {
    localeConfig.locale.value = locale || 'en';
}

export default {
    install: (app, config) => {
        console.log('installed');

        setLocale(config.locale);
        setTranslation(config.messages);

        app.config.globalProperties.$translate = key => {
            return localeConfig.messages.value[localeConfig.locale.value]
                ? localeConfig.messages.value[localeConfig.locale.value][key]
                : 'missing_translate';
        }
        
        app.config.globalProperties.setTranslation = setTranslation;        
        app.config.globalProperties.setLocale = setLocale;

        app.directive('translate', {
            mounted: function(el, bindings) {
                console.log(el, bindings);
                el.innerHTML = 'test';
            }
        })
    }
}
