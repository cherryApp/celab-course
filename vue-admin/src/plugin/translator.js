import { ref } from 'vue';
import axios from 'axios';

const localeConfig = {
    locale: ref('en'),
    messages: ref({})
};

const loadTranslation = (url) => {
    axios.get(url)
        .then( resp => setTranslation(resp.data) )
        .catch( err => console.error(err) );
};

const setTranslation = messages => {
    localeConfig.messages.value = messages || {};
}

const translate = key => {
    return localeConfig.messages.value[localeConfig.locale.value]
        ? localeConfig.messages.value[localeConfig.locale.value][key]
        : 'missing_translate';
}

// Install global Vuejs plugin.
export default {
    install: (app, config) => {
        console.log('installed', app, config, localeConfig);

        if (config.url) {
            loadTranslation(config.url);
        }

        app.config.globalProperties.$translate = translate;
    }
}
