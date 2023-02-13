import { Link, Outlet, useLocation } from 'react-router-dom';
import Container from '../../components/container/Container';
import Indexes from './components/card/Indexes';
import tabs from './components/MutualFundTabs';

const Funds = () => {
  const location = useLocation();

  const isActive = (name: string) =>
    encodeURI(location.pathname).includes(name);

  return (
    <Container>
      <div className="tabs tabs-boxed bg-secondary">
        {tabs.map((t) => (
          <Link
            key={t.name}
            to={`${t.name}/all`}
            className={`tab tab-lg text-primary ${
              isActive(t.name) ? 'tab-active' : ''
            }`}
          >
            {t.label}
          </Link>
        ))}
      </div>
      <Indexes />
      <Outlet />
    </Container>
  );
};

export default Funds;
