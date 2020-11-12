<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th v-for="col in columns" :key="col.key">
                    {{ i18n.$t(col.label) }}
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row">
                <td v-for="col in columns" :key="col.key">
                    <input v-bind:value=row[col.key] type="text" class="form-control">
                </td>
                <td>
                    <div class="btn-group">
                        <button class="btn btn-info">
                            <i class="fa fa-refresh"></i>
                        </button>
                        <button class="btn btn-danger">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { useI18n } from '../plugin/i18nPlugin';

export default {
    name: 'Main',
    props: {
        columns: Array,
        rows: Array
    },
    setup() {
        return { i18n: useI18n() };
    }
}
</script>

<style scoped>

</style>