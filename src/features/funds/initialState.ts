type SortBy = 'one_year_return' | 'three_year_return' | 'ter' | 'name.raw';

type OrderBy = 'desc' | 'asc';

type Tags =
  | ''
  | 'instant'
  | 'elss'
  | 'top_rated'
  | 'investor'
  | 'top_searched'
  | 'core_portfolio_fund'
  | 'international_funds';

export interface ParamProps {
  limit: number;
  sort_by: SortBy;
  order_by: OrderBy;
  category: string;
  sub_category: string;
  tags: Tags;
  rating: string; // from 1 to 5
}

export type MutualFundType = {
  name: string;
  category: string;
  amc: string;
  sub_category: string;
  unique_fund_code: string;
  kuvera_id: string;
  asset_class_name: string;
  one_year_return: number;
  three_year_return: number;
  current_nav: string;
  scheme_plan: string;
  slug: string;
  tags: Array<string>;
  one_day_return: number;
  short_name: string;
  short_code: string;
  rating: number;
  fund_active: boolean;
  ter: number;
};

export interface FundsState {
  status: string;
  error: string | null | undefined;
  categories: { [key: string]: string[] };
  mutualFunds: Array<MutualFundType>;
  params: ParamProps;
}

const initialState: FundsState = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  categories: {},
  mutualFunds: [],
  params: {
    limit: 100,
    sort_by: 'one_year_return',
    order_by: 'desc',
    category: '',
    sub_category: '',
    tags: '',
    rating: '',
  },
};

export default initialState;
