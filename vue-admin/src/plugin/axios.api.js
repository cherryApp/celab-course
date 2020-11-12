import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `http://localhost:3000`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.common["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
      if (response.status === 200 || response.status === 201) {
        if (response.data.token) {
            localStorage.setItem('access_token', response.data.token);
        }
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    error => {
        return Promise.reject(error);
    }
);

export default {
    install: (app, config) => {
        if (config && config.baseUrl) {
            axiosInstance.baseURL = config.baseURL;
        }
        app.config.globalProperties.$http = axiosInstance;
    }
}

export const $http = axiosInstance;
