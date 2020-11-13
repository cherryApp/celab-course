<template>
  <div v-if="userError" class="alert alert-danger">
    {{ userError }}
  </div>

  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.key" v-translate="col.label"></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in store.list.value" :key="row">
        <td v-for="col in columns" :key="col.key">
          <input v-model="row[col.key]" type="text" class="form-control" />
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
</template>

<script>
export default {
  name: "Main",
  props: {
    columns: Array,
    store: Object,
  },
  mounted() {
      this.store.page(1);
  },
  methods: {
    onUpdate(row) {
      this.store.update(row);
    },
    onDelete(row) {
      this.store.remove(row);
    },
  },
};
</script>

<style scoped>
</style>