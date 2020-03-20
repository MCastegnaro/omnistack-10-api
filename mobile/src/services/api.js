import axios from 'axios';

const api = axios.create({
    baseURL: 'http://MEUIP'
});

export default api;