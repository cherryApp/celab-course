import { reactive, toRefs } from 'vue';
import { $http } from '../plugin/axios';

const entityName = 'user';
const state = reactive({
    list: [], 
    item: {}, 
    count: 0, 
    error: null,
});

export default () => {
    const load = async () => {
        try {
            const response = await $http.get(`/${entityName}`);
            state.list = response.data.data;
        } catch(e) {
            state.error = e;
        }
    };

    const getItem = async id => {
        try {
            const response = await $http.get(`/${entityName}/${id}`);
            state.list = response.data.data;
        } catch(e) {
            state.error = e;
        }
    };

    const update = async entity => {
        try {
            await $http.put(
                `/${entityName}/${entity._id}`,
                entity
            );
        } catch(e) {
            state.error = e;
        }
    };

    const remove = async entity => {
        try {
            await $http.delete(`/${entityName}/${entity._id}`);
            state.list.splice( state.list.indexOf(entity), 1 );
        } catch(e) {
            state.error = e;
        }
    };

    const find = async query => {
        try {
            const response = await $http.post(`/${entityName}/find`, query);
            state.list = response.data.data;
        } catch(e) {
            state.error = e;
        }
    };

    const create = async entity => {
        try {
            const response = await $http.post(`/${entityName}`, entity);
            state.list.push(response.data.data);
        } catch(e) {
            state.error = e;
        }
    };

    return { ...toRefs(state), load, getItem, update, remove, find, create };

};
