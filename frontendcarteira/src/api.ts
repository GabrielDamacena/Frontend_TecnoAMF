import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.7:8000', // Substitua pelo IP local do servidor Django
});

export default api;
