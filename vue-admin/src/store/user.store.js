import { reactive, toRefs } from 'vue';
import { $http } from '../plugin/axios.api';

const state = reactive({
    list: [],
    item: {},
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
    }

    const page = async (pageNumber) => {
        try {
            const response = await $http.get(`/users?_page=${pageNumber}`);
            state.count = response.headers['x-total-count'];
            state.list = response.data;
        } catch(e) {
            state.error = e;
        }
    };
    
    const getItem = async (id) => {
        try {
            const item = state.list.find( i => i.id === id );
            if (item) {
                return state.item = item;
            }
            
            const response = await $http.get(`/users/${id}`);
            state.count = response.headers['x-total-count'];
            state.item = response.data;
        } catch(e) {
            state.error = e;
        }
    };

    const update = async (entity) => {
        try {
            const resp = await $http.patch( `/users/${entity.id}`, entity );
            state.list.splice(state.list.indexOf(entity), 1, resp.data);
        } catch(e) {
            state.error = e;
        }
    };
    
    const remove = async (entity) => {
        try {
            await $http.delete( `/users/${entity.id}` );
            state.list.splice(state.list.indexOf(entity), 1);
        } catch(e) {
            state.error = e;
        }
    };

    return { ...toRefs(state), load, page, update, remove, getItem };
};
