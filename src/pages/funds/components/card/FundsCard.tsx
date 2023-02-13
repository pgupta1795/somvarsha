import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Divider from '../../../../components/Divider';
import BoxArrow from '../../../../components/icons/BoxArrow';
import { MutualFundType } from '../../../../features/funds/initialState';

interface FundsCardProps {
  details: MutualFundType;
}

const FundsCard = ({ details }: FundsCardProps) => (
  <Link
    to={`/funds/fund/${details.unique_fund_code}`}
    title={details.name}
    className="text-card relative max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-secondary dark:border-gray-700 hover:shadow-2xl hover:shadow-primary-content hover:-translate-y-1 hover:-translate-x-1 transition-all ease-in"
  >
    <div className="mb-2">
      <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
        <h5>{details.name}</h5>
      </div>
      <div className="grid justify-between grid-flow-col mt-1">
        <div>
          {Array.from({ length: 5 }, (_, i) =>
            i > details.rating - 1 ? (
              <Star key={i} />
            ) : (
              <Star key={i} className="text-info" />
            )
          )}
        </div>
        <div>
          <span className="text-xs">TER</span>
          <span className="ml-2 font-bold">{details.ter} %</span>
        </div>
      </div>
    </div>
    <Divider />
    <div className="mb-2 mt-2 text-sm grid grid-flow-col font-bold">
      <div>
        <p className="text-xs font-normal">NAV</p>
        <p>₹ {details.current_nav}</p>
      </div>
      <div>
        <p className="text-xs font-normal">1 day</p>
        <p
          className={details.one_day_return > 0 ? 'text-success' : 'text-error'}
        >
          {details.one_day_return} %
        </p>
      </div>
      <div>
        <p className="text-xs font-normal">1 yr</p>
        <p
          className={
            details.one_year_return > 0 ? 'text-success' : 'text-error'
          }
        >
          {details.one_year_return} %
        </p>
      </div>
      <div>
        <p className="text-xs font-normal">3 yr</p>
        <p
          className={
            details.three_year_return > 0 ? 'text-success' : 'text-error'
          }
        >
          {details.three_year_return} %
        </p>
      </div>
    </div>
    <Divider />
    <div className="mb-2 mt-2 text-sm grid grid-flow-col">
      <div>
        <p className="text-xs">Scheme</p>
        <p className="font-bold text-white uppercase">{details.scheme_plan}</p>
      </div>
      <div>
        <p className="text-xs">Category</p>
        <p className="font-bold text-white uppercase">{details.category}</p>
      </div>
      <div>
        <p className="text-xs">Sub Category</p>
        <p className="font-bold text-white uppercase">{details.sub_category}</p>
      </div>
    </div>
    <Divider />
    <div className="mt-2 text-xs">
      <div className="flex gap-x-2 justify-between items-center">
        <div className="font-bold">
          {details.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-info badge-xs uppercase p-2 mr-2 mt-1"
            >
              {tag.replaceAll('_', ' ')}
            </span>
          ))}
        </div>
        <div>
          <BoxArrow />
        </div>
      </div>
    </div>
  </Link>
);

export default FundsCard;
