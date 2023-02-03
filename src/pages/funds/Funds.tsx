import { Link, Outlet } from 'react-router-dom';
import Container from '../../components/container/Container';

const Funds = () => (
  <Container>
    <div className="grid grid-cols-1 gap-8 tracking-wider">
      <div className="text-4xl tracking-widest font-bold">
        Top Performing Mutual Funds
      </div>
      <div className="grid grid-flow-row grid-cols-5 items-start gap-4 w-1/2 text-center">
        <Link
          to="equity"
          className="bg-white p-4 rounded-lg hover:shadow-lg border-4 border-purple"
        >
          Equity
        </Link>
        <Link
          to="debt"
          className="bg-white p-4 rounded-lg hover:shadow-lg  border-4 border-pink-dark"
        >
          Debt
        </Link>
        <Link
          to="liquid"
          className="bg-white p-4 rounded-lg hover:shadow-lg  border-4 border-sea-blue"
        >
          Liquid
        </Link>
        <Link
          to="tax"
          className="bg-white p-4 rounded-lg hover:shadow-lg  border-4 border-brown"
        >
          Tax
        </Link>
        <Link
          to="balanced"
          className="bg-white p-4 rounded-lg hover:shadow-lg  border-4 border-crimson"
        >
          Balanced
        </Link>
      </div>
      <Outlet />
    </div>
  </Container>
);

export default Funds;
