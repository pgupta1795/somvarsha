import axiosLib from 'axios';

export const BASE_URL = 'https://api.kuvera.in';

export const FUND_CATEGORIES_URL = '/mf/api/v4/fund_scheme_categories.json';

axiosLib.defaults.headers.post['Content-Type'] = 'application/json';

const axios = axiosLib.create({
  baseURL: BASE_URL,
});

export default axios;
