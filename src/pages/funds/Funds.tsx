import { Link, Outlet, useLocation } from 'react-router-dom';
import Container from '../../components/container/Container';
import tabs from './components/MutualFundTabs';

const Funds = () => {
  const location = useLocation();

  const isActive = (name: string) =>
    encodeURI(location.pathname).includes(name);

  return (
    <Container>
      <div className="tabs tabs-boxed bg-secondary mb-8">
        {tabs.map((t) => (
          <Link
            key={t.name}
            to={t.name}
            className={`tab tab-lg text-primary ${
              isActive(t.name) ? 'tab-active' : ''
            }`}
          >
            {t.label}
          </Link>
        ))}
      </div>
      <Outlet />
    </Container>
  );
};

export default Funds;
