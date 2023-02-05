import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import tabs from '../pages/funds/components/MutualFundTabs';

const ErrorPage = lazy(() => import('../pages/error/ErrorPage'));
const HomePage = lazy(() => import('../pages/home/HomePage'));
const Stocks = lazy(() => import('../pages/stocks/Stocks'));
const Funds = lazy(() => import('../pages/funds/Funds'));
const Fund = lazy(() => import('../pages/fund/Fund'));

const Router = () => (
  <Routes>
    <Route
      index
      element={
        <Suspense fallback={<>LOADING...</>}>
          <HomePage />
        </Suspense>
      }
    />
    <Route
      path="funds"
      element={
        <Suspense fallback={<>LOADING...</>}>
          <Funds />
        </Suspense>
      }
    >
      {/* <Route index element={<Navigate to="root" />} /> */}
      {tabs.map((tab) => (
        <Route key={tab.name} path={tab.name} element={tab.component}>
          <Route index element={<Navigate to="all" />} />
          {tab.children ? (
            <Route path=":category" element={tab.children} />
          ) : null}
        </Route>
      ))}
      <Route
        path="fund/:id"
        element={
          <Suspense fallback={<>LOADING...</>}>
            <Fund />
          </Suspense>
        }
      />
    </Route>

    <Route
      path="stocks"
      element={
        <Suspense fallback={<>LOADING...</>}>
          <Stocks />
        </Suspense>
      }
    />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default Router;
