import { useSelector } from 'react-redux';
import { getCategories } from '../../../../features/funds/fundsSlice';
import Colors from '../../../../helper/Colors';
import FundsCategoryLink from './FundsCategoryLink';

const FundsCategory = () => {
  const categories: object = useSelector(getCategories);

  return (
    <div className="grid max-sm:grid-cols-3 grid-cols-6 sm:w-3/4 gap-2">
      <FundsCategoryLink
        category="All"
        bgColor="bg-slate-500"
        borderColor="border-slate-500"
      />
      {categories &&
        Object.keys(categories).map((key, index) => (
          <FundsCategoryLink
            key={key}
            category={key}
            bgColor={Object.values(Colors.BG)[index]}
            borderColor={Object.values(Colors.BORDER)[index]}
          />
        ))}
    </div>
  );
};

export default FundsCategory;
