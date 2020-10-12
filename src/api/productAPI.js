import axiosClient from './axiosClient';

const productApi = {
  getAll: () => axiosClient.get('/all'),
  categories: () => axiosClient.get('/categories'),
  search: name => axiosClient.get(`/search?name=${name}`),
  category: name => axiosClient.get(`/${name}`),
};

export default productApi;
