import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const ErrorPage = lazy(() => import('../pages/error/ErrorPage'));
const HomePage = lazy(() => import('../pages/home/HomePage'));
const Stocks = lazy(() => import('../pages/stocks/Stocks'));
const Funds = lazy(() => import('../pages/funds/Funds'));
const Debt = lazy(() => import('../pages/funds/components/Debt'));
const Balanced = lazy(() => import('../pages/funds/components/Balanced'));
const Equity = lazy(() => import('../pages/funds/components/Equity'));
const Liquid = lazy(() => import('../pages/funds/components/Liquid'));
const Tax = lazy(() => import('../pages/funds/components/Tax'));

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
      <Route
        path="equity"
        element={
          <Suspense fallback={<>LOADING...</>}>
            <Equity />
          </Suspense>
        }
      />
      <Route
        path="debt"
        element={
          <Suspense fallback={<>LOADING...</>}>
            <Debt />
          </Suspense>
        }
      />
      <Route
        path="liquid"
        element={
          <Suspense fallback={<>LOADING...</>}>
            <Liquid />
          </Suspense>
        }
      />
      <Route
        path="tax"
        element={
          <Suspense fallback={<>LOADING...</>}>
            <Tax />
          </Suspense>
        }
      />
      <Route
        path="balanced"
        element={
          <Suspense fallback={<>LOADING...</>}>
            <Balanced />
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
