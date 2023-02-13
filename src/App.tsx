import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './app/Router';
import Breadcrumbs from './components/breadcrumb/Breadcrumbs';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/NavBar';

const SearchModal = lazy(() => import('./components/nav/search/SearchModal'));

const App = () => (
  <div>
    <BrowserRouter>
      <div className=" max-w-screen-2xl text-white dark:text-black overflow-x-hidden bg-gradient-to-tr from-card via-primary to-primary">
        <NavBar />
        <Breadcrumbs />
        <div className="page-content">
          <SearchModal />
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
