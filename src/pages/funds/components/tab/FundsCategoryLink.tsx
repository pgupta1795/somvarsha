import { Link, useLocation } from 'react-router-dom';

interface FundsCategoryLinkProps {
  category: string;
  bgColor: string;
  borderColor: string;
}

const FundsCategoryLink = ({
  category,
  bgColor,
  borderColor,
}: FundsCategoryLinkProps) => {
  const location = useLocation();

  return (
    <Link
      key={category}
      title={category}
      to={category.toLowerCase()}
      className={`py-3 rounded-lg hover:shadow-lg border-4 ${borderColor} transition-all ease-in hover:scale-110 ${
        decodeURI(location.pathname).includes(category.toLowerCase())
          ? bgColor
          : 'bg-white'
      } inline-flex items-center justify-center text-center max-sm:h-[4rem] text-sm`}
    >
      {category}
    </Link>
  );
};

export default FundsCategoryLink;
