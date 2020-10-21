import axios from 'axios';

const apiTransactions = axios.create({
  baseURL: 'http://localhost:5000/',
});

const apiCompanies = axios.create({
  baseURL: 'http://localhost:5001/',
});

export { apiTransactions, apiCompanies };
