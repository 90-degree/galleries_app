import axios from "axios";

export const http = axios.create({
    baseURL: 'http://localhost:8000/api'
})

http.interceptors.request.use(request => {
    const token = localStorage.getItem('token');
    if (token) request.headers['Authorization'] = 'Bearer ' + token;
    return request;
})
http.interceptors.response.use((response) => {
    return response;
}, async error => {
    const token = localStorage.getItem('token');
    if (token && error.response.status === 401) localStorage.removeItem('token')
})