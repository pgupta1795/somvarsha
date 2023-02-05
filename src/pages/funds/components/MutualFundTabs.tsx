import { lazy, Suspense } from 'react';

const Category = lazy(() => import('./children/Category'));
const AllFunds = lazy(() => import('./tab/AllFunds'));

const MutualFundTabs = [
  {
    name: 'root',
    label: 'All Funds',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <AllFunds />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'insta-redeem',
    label: 'Insta Redeem',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <AllFunds />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'save-taxes',
    label: 'Save Taxes',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <AllFunds />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'top-rated',
    label: 'Top Rated',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <AllFunds />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'investor-choice',
    label: 'Investor Choice',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <AllFunds />
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
        <AllFunds />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'top-searched',
    label: 'Top Searched',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <AllFunds />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'in-one',
    label: 'All in One',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <AllFunds />
      </Suspense>
    ),
    children: (
      <Suspense fallback={<>LOADING...</>}>
        <Category />
      </Suspense>
    ),
  },
  {
    name: 'international',
    label: 'International',
    component: (
      <Suspense fallback={<>LOADING...</>}>
        <AllFunds />
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
