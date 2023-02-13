import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

const useIsLoadingOrError = (
  getStatus: (state: RootState) => string,
  getError: (state: RootState) => string | null | undefined
) => {
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  if (status === 'failed' || error) return <div>{error}</div>;
  if (status === 'loading') return <div>LOADING ...</div>;
  return null;
};

export default useIsLoadingOrError;
