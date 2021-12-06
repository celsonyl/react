import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('acessToken')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
})

export default api;