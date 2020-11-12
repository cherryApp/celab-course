<template>
    <div class="row">
        <div class="col-12">

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th v-for="col in columns" :key="col.key">
                            {{ $translate(col.label) }}
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in store.list.value" :key="row.id">
                        <td v-for="col in columns" :key="col.key">
                            <input v-model="row[col.key]" type="text" class="form-control">
                        </td>
                        <td>
                            <div class="btn-group">
                                <button @click="onUpdate(row)" class="btn btn-info">
                                    <i class="fa fa-refresh"></i>
                                </button>
                                <button @click="onDelete(row)" class="btn btn-danger">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <button class="page-link" @click="onPrevPage" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </button>
                </li>
                <li v-for="num in pageNumbers" :key="num" class="page-item" :class="{ active: num === currentPage }">
                    <button @click="onChangePage(num)" class="page-link">{{ num }}</button>
                </li>
                <li class="page-item">
                  <button class="page-link" @click="onNextPage" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </button>
                </li>
              </ul>
            </nav>
        </div>
    </div>
</template>

<script>
// import { useI18n } from '../plugin/i18nPlugin';

export default {
    name: 'Main',
    props: {
        columns: Array,
        store: Object
    },
    setup() {
        return {
            currentPage: 1,
            pageNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        };
    },
    mounted() {
        this.store.page( this.currentPage );
    },
    data() {
        return {
            maxPage: 0
        };
    },
    methods: {
        onUpdate(row) {
            this.store.update(row);
        },
        onDelete(row) {
            this.store.remove(row);
        },
        onChangePage(pageNum) {
            this.currentPage = pageNum;
            this.store.page(this.currentPage);
            this.refreshPageNumbers();
        },
        onNextPage() {
            this.currentPage++;
            this.store.page(this.currentPage);
            this.refreshPageNumbers();
        },
        onPrevPage() {
            this.currentPage--;
            this.store.page(this.currentPage);
            this.refreshPageNumbers();
        },
        refreshPageNumbers() {
            let start = this.currentPage - 4 > 0 ? this.currentPage - 4 : 1;
            this.maxPage = Math.ceil(this.store.count.value / 10);
            if (start > this.maxPage - 9) {
                start = this.maxPage - 9;
            }
            this.pageNumbers = [];
            for (let i = 0; i < 9; i++) {
                this.pageNumbers[i] = start + i;
            }
        }
    }
}
</script>

<style scoped>

</style>