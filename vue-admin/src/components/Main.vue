<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th v-for="col in columns" :key="col.key">
                    {{ i18n.$t(col.label) }}
                </th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
</template>

<script>
import { useI18n } from '../plugin/i18nPlugin';

export default {
    name: 'Main',
    props: {
        columns: Array
    },
    setup() {
        return { i18n: useI18n() };
    }
}
</script>

<style scoped>

</style>