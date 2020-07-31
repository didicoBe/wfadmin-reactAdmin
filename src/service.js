import axios from 'axios';

const api = axios.create({
    baseURL: 'http://wfdesenvolvimento.com.br/api',
    headers: {
        'Authorization': 'jW|SZmY52Exj6HJ',
    }
});

export default api;