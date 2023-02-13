export type Index = { [key: string]: string };

export interface IndexState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
  indexes: {
    'NIFTY 50': Index;
    SENSEX: Index;
    'NIFTY BANK': Index;
    'NIFTY Midcap 100': Index;
  };
}

const initialState: IndexState = {
  status: 'idle',
  error: null,
  indexes: {
    'NIFTY 50': {},
    SENSEX: {},
    'NIFTY BANK': {},
    'NIFTY Midcap 100': {},
  },
};

export default initialState;
