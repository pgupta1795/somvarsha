import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { AppDispatch } from '../../../../app/store';
import { searchMutualFunds } from '../../../../features/funds/actions';
import {
  getError,
  getMutualFunds,
  getParams,
  getStatus,
  setParams,
} from '../../../../features/funds/fundsSlice';
import useIsLoadingOrError from '../../../../hooks/useIsLoadingOrError';
import FundsCard from './FundsCard';

const FundsCardContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const renderErrorOrLoading = useIsLoadingOrError(getStatus, getError);
  const mutualFunds = useSelector(getMutualFunds);
  const params = useSelector(getParams);
  const urlParams = useParams();
  const location = useLocation();

  useEffect(() => {
    const tags = location.pathname
      .split('/')
      .filter((a) => a !== urlParams.category)
      .splice(-1);
    if (
      params.category !== urlParams.category ||
      (tags && tags[0] !== params.tags)
    ) {
      dispatch(
        setParams({ category: urlParams.category || '', tags: tags[0] })
      );
      dispatch(searchMutualFunds());
    }
  }, [
    dispatch,
    urlParams.category,
    params.category,
    location.pathname,
    params.tags,
  ]);

  if (renderErrorOrLoading) return renderErrorOrLoading;

  return (
    <div className="grid grid-flow-row sm:grid-cols-3 grid-cols-1 gap-4 self-center">
      {mutualFunds.map((mf) => (
        <FundsCard key={mf.name} details={mf} />
      ))}
    </div>
  );
};

export default FundsCardContainer;
