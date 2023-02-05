export const PAGE_SIZE = 30;

export interface FundsState {
  status: string;
  error: string | null | undefined;
  categories: object;
}

const initialState: FundsState = {
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  categories: {},
};

export default initialState;
