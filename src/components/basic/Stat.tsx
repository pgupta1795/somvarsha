import { Info } from '@mui/icons-material';
import { FC } from 'react';

interface StatProps {
  title: string;
  value: React.ReactNode;
  description?: string;
}

const Stat: FC<StatProps> = ({ title, value, description }: StatProps) => (
  <div className="stat place-items-center max-md:p-1">
    <div
      className="stat-figure max-md:hidden"
      title="Investors understand that their investment will be at very high risk in this fund.
Market risk refers to chances of value of investment decreasing due to market factors."
    >
      <Info />
    </div>
    <div className="stat-title">{title}</div>
    <div className="stat-value text-sm md:text-2xl">{value}</div>
    {description ? <div className="stat-desc">{description}</div> : null}
  </div>
);

Stat.defaultProps = {
  description: '',
};

export default Stat;
