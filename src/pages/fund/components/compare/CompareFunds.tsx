import AddFunds from './AddFunds';
import RowFundReturns from './RowFundReturns';
import RowHeaderFooter from './RowHeaderFooter';

const CompareFunds = () => (
  <div className="w-full p-4 rounded-lg bg-secondary">
    <span className="text-2xl font-bold">Compare with other fund</span>
    <div className="overflow-x-auto w-full mt-4">
      <table className="w-full rounded-lg table">
        <thead>
          <RowHeaderFooter />
        </thead>
        <tbody>
          <RowFundReturns
            name="ICICI Prudential Commodities Growth Direct Plan"
            volatility="27.2%"
            one_year="6.3%"
            three_year="38.5%"
            five_year="NA"
            all="36.4%"
            remove={false}
          />
          <RowFundReturns
            name="Quant Infrastructure Growth Direct Plan"
            volatility="27.2%"
            one_year="6.3%"
            three_year="38.5%"
            five_year="NA"
            all="36.4%"
            remove
          />
          <RowFundReturns
            name="Infrastructure Growth Direct Plan"
            volatility="27.2%"
            one_year="6.3%"
            three_year="38.5%"
            five_year="NA"
            all="36.4%"
            remove
          />
        </tbody>
        <tfoot>
          <RowHeaderFooter />
        </tfoot>
      </table>
    </div>
    <AddFunds />
  </div>
);

export default CompareFunds;
