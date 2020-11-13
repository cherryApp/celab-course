<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">{{ title }}</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <!-- Navigation. -->
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li v-for="item in navigation" :key="item.href" class="nav-item">
                    <a class="nav-link" v-bind:href=item.href>
                        {{ i18n.$t(item.text) }}
                    </a>
                </li>
            </ul>
            
            <!-- Language chooser. -->
            <div class="dropdown open">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                            <i class="fa fa-language"></i>
                        </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                    <button @click="switchLanguage" data-lang="en" class="dropdown-item" href="#">en</button>
                    <button @click="switchLanguage" data-lang="hu" class="dropdown-item" href="#">hu</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { useI18n } from '../plugin/i18nPlugin';

export default {
    name: 'Nav',
    setup() {
        const i18n = useI18n();

        const switchLanguage = (event) => {
            const lang = event.target.getAttribute('data-lang');
            i18n.locale.value = lang || 'hu';
        };

        return { i18n, switchLanguage };
    },
    props: {
        title: String,
        navigation: Array
    },
    methods: {
        swLang(event) {
            this.setLocale(
                event.target.getAttribute('data-lang') || 'hu'
            );
        }
    }
}
</script>

<style scoped>

</style>