import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `http://localhost:3000/api`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

// Export the plugin.
export default {
    install: (app, config) => {
        if (config && config.baseURL) {
            axiosInstance.baseURL = config.baseURL;
        }

        // Set plugin to the global variable.
        app.config.globalProperties.$http = axiosInstance;
    }
}

// If want to access the instance directly.
export const $http = axiosInstance;
