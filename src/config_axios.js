import axios from 'axios';

//criar uma instância Axios com a URL do back end
//baseURL é a porta que está rodando o backend
const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export default api;
