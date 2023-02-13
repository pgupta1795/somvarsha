import { useParams } from 'react-router-dom';
import Container from '../../components/container/Container';
import CalculateReturns from './components/calculate/CalculateReturns';
import FundsChart from './components/chart/FundsChart';
import CompareFunds from './components/compare/CompareFunds';
import FundDescription from './components/description/FundDescription';
import FundHoldings from './components/holdings/FundHoldings';
import MoreDetails from './components/more/MoreDetails';
import FundName from './components/name/FundName';
import OtherInformation from './components/other/OtherInformation';
import FundStats from './components/stats/FundStats';

const Fund = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <Container>
      <div className="flex flex-col gap-y-8 text-primary">
        <FundName />
        <div className="flex flex-col lg:flex-row gap-1 justify-between items-stretch">
          <div className="flex flex-col gap-y-8 text-primary">
            <FundDescription />
            <div className="flex flex-col gap-1 justify-between items-stretch">
              <FundStats />
              <FundsChart />
            </div>
            <CompareFunds />
            <FundHoldings />
            <OtherInformation />
          </div>
          <div>
            <CalculateReturns />
          </div>
        </div>
        <MoreDetails />
      </div>
    </Container>
  );
};

export default Fund;
