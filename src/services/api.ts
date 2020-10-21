import axios from 'axios';

const apiTransactions = axios.create({
  baseURL: 'http://localhost:5000/',
});

export { apiTransactions };
