<template>
  <h2>Hello Users</h2>
  <div class="row">
    <div class="col-12">
      <table class="table table-striped">
        <thead>
          <tr @keyup="debounceSearch">
            <th>
                Fname
                <input data-key="firstName" type="text" class="form-control">
            </th>
            <th>
                Lname
                <input data-key="lastName" type="text" class="form-control">
            </th>
            <th>
                Email
                <input data-key="email" type="text" class="form-control">
            </th>
            <th>
                Address
                <input data-key="address" type="text" class="form-control">
            </th>
            <th>
                Gender
                <input data-key="gender" type="text" class="form-control">
            </th>
            <th>
                &nbsp;
                <button @click="find(search)" class="btn btn-primary">
                    <i class="fa fa-search"></i>
                </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-dark">
            <td>
              <input type="text" class="form-control" v-model="user.firstName" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="user.lastName" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="user.email" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="user.address" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="user.gender" />
            </td>
            <td>
              <div class="btn-group">
                <button @click="create(user); user = {};" class="btn btn-success">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr v-for="row in userList" :key="row._id">
            <td>
              <input type="text" class="form-control" v-model="row.firstName" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="row.lastName" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="row.email" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="row.address" />
            </td>
            <td>
              <input type="text" class="form-control" v-model="row.gender" />
            </td>
            <td>
              <div class="btn-group">
                <button @click="update(row)" class="btn btn-info">
                  <i class="fa fa-refresh"></i>
                </button>
                <button @click="remove(row)" class="btn btn-danger">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UseUsers from "../store/user";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export default {
  name: "Table",
  setup() {
    const { list, load, remove, update, create, find } = UseUsers();
    load();
    return { userList: list, remove, update, create, find };
  },
  data() {
      return {
          user: {},
          search: {},
          searchSubject: new Subject().pipe(
              debounceTime(2000)
          ),
      };
  },
  mounted() {
      this.searchSubject.subscribe(
          searchData => {
              console.log(searchData);
              this.find(searchData);
          }
      );
  },
  methods: {
      debounceSearch(ev) {
          const key = ev.target.getAttribute('data-key');
          this.search[key] = ev.target.value;
          this.searchSubject.next(this.search);
      }
  }
};
</script>

<style scoped>
</style>