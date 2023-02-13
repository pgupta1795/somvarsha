import { Star } from '@mui/icons-material';

const FundName = () => (
  <div className="text-xl sm:text-3xl font-extrabold tracking-wider text-secondary">
    ICICI Prudential Commodities Growth Direct Plan
    <div>
      {Array.from({ length: 5 }, (_, i) =>
        i > 4 ? <Star key={i} /> : <Star key={i} className="text-info" />
      )}
    </div>
  </div>
);

export default FundName;
