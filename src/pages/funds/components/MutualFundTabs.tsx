import { lazy, Suspense } from 'react';
import NewFunds from './tab/NewFunds';

const Category = lazy(() => import('./children/Category'));
const FundTypesTabs = lazy(() => import('./tab/FundTypesTabs'));

const MutualFundTabs = [
  {
    name: 'root',
    label: 'All Funds',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <FundTypesTabs />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'instant',
    label: 'Insta Redeem',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <FundTypesTabs />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'elss',
    label: 'Save Taxes',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <FundTypesTabs />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'top_rated',
    label: 'Top Rated',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <FundTypesTabs />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'investor',
    label: 'Investor Choice',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <FundTypesTabs />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'new-funds',
    label: 'New Funds',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <NewFunds />
      </Suspense>
    ),
  },
  {
    name: 'top_searched',
    label: 'Top Searched',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <FundTypesTabs />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'core_portfolio_fund',
    label: 'All in One',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <FundTypesTabs />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'international_funds',
    label: 'International',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <FundTypesTabs />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
];

export default MutualFundTabs;
