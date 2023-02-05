import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ReactComponent as Semicircle } from '../../../../assets/svg/semicircle.svg';
import Divider from '../../../../components/Divider';
import BoxArrow from '../../../../components/icons/BoxArrow';

interface FundsCardProps {
  name: string;
  rating: number;
  scheme: string;
  oneyear: number;
  threeyear: number;
  fiveyear: number;
}

const FundsCard = ({
  name,
  rating,
  scheme,
  oneyear,
  threeyear,
  fiveyear,
}: FundsCardProps) => (
  <Link
    to={`/funds/fund/${name}`}
    className="text-gray-500 dark:text-gray-400 relative max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-secondary dark:border-gray-700 hover:shadow-2xl hover:shadow-green-400 hover:-translate-y-1 hover:-translate-x-1 transition-all ease-in"
  >
    <div className="mb-2">
      <div className="flex gap-x-10">
        <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
          <h5 className="font-semibold text-secondary dark:text-white">
            {name}
          </h5>
        </div>
        <BoxArrow />
      </div>
      <div>
        {Array.from({ length: 5 }, (_, i) =>
          i > rating - 1 ? (
            <Star key={i} />
          ) : (
            <Star key={i} style={{ color: 'var(--primary-color)' }} />
          )
        )}
      </div>
    </div>
    <Divider />
    <div className="mb-2 mt-2 text-sm grid grid-flow-col">
      <div>
        <p className="text-xs">Scheme</p>
        <p className="font-bold">{scheme}</p>
      </div>
      <div>
        <p className="text-xs">1 yr</p>
        <p className="text-green-400">{oneyear} %</p>
      </div>
      <div>
        <p className="text-xs">3 yr</p>
        <p className="text-green-400">{threeyear} %</p>
      </div>
      <div>
        <p className="text-xs">5 yr</p>
        <p className="text-green-400">{fiveyear} %</p>
      </div>
    </div>
    <Divider />
    <div className="mt-2 text-xs">
      <div className="flex gap-x-2 justify-between items-center">
        <div>
          <span className="font-bold">₹ 1000 </span> Min Subscription
        </div>
        <div>
          <Semicircle />
        </div>
      </div>
    </div>
  </Link>
);

export default FundsCard;
