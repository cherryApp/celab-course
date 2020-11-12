import { reactive, toRefs } from 'vue';
import { $http } from '../plugin/axios.api';

const state = reactive({
    list: [],
    count: 0,
    error: null
});

export default () => {
    const load = async () => {
        try {
            const response = await $http.get('/users');
            state.count = response.headers['x-total-count'];
            state.list = response.data;
        } catch(e) {
            state.error = e;
        }
    };
    
    const page = async (pageNumber) => {
        try {
            const response = await $http.get(`/users?_page=${pageNumber}`);
            state.count = response.headers['x-total-count'];
            state.list = response.data;
        } catch(e) {
            state.error = e;
        }
    };

    const update = async (entity) => {
        $http.patch(
            `/users/${entity.id}`,
            entity
          )
          .then( response => state.list.splice(state.list.indexOf(entity), 1, response.data) )
          .catch( err => console.error(err) );
    };
    
    const remove = async (entity) => {
        $http.delete(
            `/users/${entity.id}`
          )
          .then( () => state.list.splice(state.list.indexOf(entity), 1) )
          .catch( err => console.error(err) );
    };

    return { ...toRefs(state), load, page, remove, update };
};
