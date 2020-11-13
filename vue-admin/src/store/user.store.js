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
    }

    return { ...toRefs(state), load };
};
