import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.common.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    response => {
        if (response.data.accessToken) {
            localStorage.setItem('access_token', response.data.accessToken);
        }
        return Promise.resolve(response);
    },
    error => Promise.reject(error)
)

export default {
    install: (app, config) => {
        if (config && config.baseURL) {
            axiosInstance.baseURL = config.baseURL;
        }

        app.config.globalProperties.$http = axiosInstance;
    }
}

export const $http = axiosInstance;
