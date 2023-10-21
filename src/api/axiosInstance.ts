import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://data.fixer.io/api/latest?access_key=1a0211bd21561ed4bea0bcfff343f5a6',
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      return JSON.parse(data);
    },
  ],
});
