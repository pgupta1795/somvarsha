import axiosLib from 'axios';

const BASE_URL = 'https://api.kuvera.in';

const INDEX_BASE_URL =
  'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia';

export const FUND_CATEGORIES_URL = '/mf/api/v4/fund_scheme_categories.json';

export const ALL_MUTUAL_FUNDS_URL = '/insight/api/v1/mutual_fund_search.json';

// pass unique_fund_code as suffix ex: 8184-GR.json
export const FUND = {
  // also pass comma seperated multiple fund codes TRITG1-GR,TREFG1-GR,TRTBG1-GR,413-GR,425-GR.json
  details: '/mf/api/v5/fund_schemes/',
  tags: '/api/v4/funds/tags/',
  insights: '/insight/api/v1/fund_insight/',
  graph: '/mf/api/v6/fund_navs/',
};

export const GRAPH = {
  Nifty50: '/mf/api/v5/fund_index_navs/NIFTY50.json',
  Nav_Next50: '/mf/api/v5/fund_index_navs/NIFTYNEXT50.json',
  Nifty_MidCap100: '/mf/api/v5/fund_index_navs/NIFTYMIDCAP100.json',
  Nifty_SmallCap100: '/mf/api/v5/fund_index_navs/NIFTYSMALLCAP100.json',
};

export const INDEX = {
  NIFTY_50: `${INDEX_BASE_URL}/in%3BNSX`,
  SENSEX: `${INDEX_BASE_URL}/in%3BSEN`,
  NIFTY_BANK: `${INDEX_BASE_URL}/in%3Bnbx`,
  NIFTY_MIDCAP_100: `${INDEX_BASE_URL}/in%3Bccx`,
};

axiosLib.defaults.headers.post['Content-Type'] = 'application/json';

const axios = axiosLib.create({
  baseURL: BASE_URL,
});

export default axios;
