import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { AppDispatch } from '../../../../app/store';
import { fetchCategories } from '../../../../features/funds/actions';
import { getError, getStatus } from '../../../../features/funds/fundsSlice';
import useIsLoadingOrError from '../../../../hooks/useIsLoadingOrError';
import FundsCategory from './FundsCategory';
import FundsIntro from './FundsIntro';

const FundTypesTabs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(getStatus);
  const renderErrorOrLoading = useIsLoadingOrError(getStatus, getError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  if (renderErrorOrLoading) return renderErrorOrLoading;

  return (
    <div className="grid grid-cols-1 gap-8 tracking-wider">
      <div className="text-2xl font-bold">Top Performing Mutual Funds</div>
      <FundsCategory />
      <Outlet />
      <FundsIntro />
    </div>
  );
};

export default FundTypesTabs;
