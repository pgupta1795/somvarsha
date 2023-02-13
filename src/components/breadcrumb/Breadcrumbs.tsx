import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const filterRoutes = ['fund'];
  const pathnames = location.pathname.split('/').filter((x) => x);

  const crumb = (to: string, value: string, c: string, i: number) => {
    if (to === '/funds') to = '/funds/root/all';
    return (
      <li className={c} key={`${to}${i}`}>
        <Link to={to}>{value}</Link>
      </li>
    );
  };

  return (
    <div className="breadcrumbs px-4 font-bold font-poppins uppercase text-gray-dark">
      <ul>
        {pathnames.map((value, i) => {
          const last = i === pathnames.length - 1;
          const to = `/${pathnames.slice(0, i + 1).join('/')}`;

          if (filterRoutes.includes(value, i))
            return crumb(to, value, 'hidden', i);
          return last
            ? crumb(to, value, 'pointer-events-none opacity-50', i)
            : crumb(to, value, '', i);
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
