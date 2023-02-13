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
      className={`hover:shadow-lg border-4 ${borderColor} transition-all ease-in hover:scale-110 ${
        decodeURI(location.pathname).includes(category.toLowerCase())
          ? bgColor
          : 'bg-white'
      } text-center max-sm:h-[4rem] text-xs btn btn-outline`}
    >
      {category}
    </Link>
  );
};

export default FundsCategoryLink;
