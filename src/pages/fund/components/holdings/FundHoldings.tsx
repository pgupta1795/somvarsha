import Collapse from '../../../../components/collapse/Collapse';
import Holding from './Holding';

const FundHoldings = () => (
  <div className="w-full p-4 rounded-lg bg-secondary">
    <div className="text-2xl font-bold">See Fund Holdings as of 31st Dec</div>
    <div className="mt-4 flex flex-col gap-4 text-secondary">
      <Collapse title={<>Top Holdings</>} open>
        <Holding name="JSW Steel Ltd" holdingPercent={91} />
        <Holding name="UltraTech Cement Ltd" holdingPercent={75} />
        <Holding name="Jindal Stainless Ltd" holdingPercent={7.5} />
      </Collapse>
      <Collapse title={<>Top industry exposure</>}>
        <Holding name="Basic Materials" holdingPercent={84.5} />
        <Holding name="Energy" holdingPercent={5.8} />
        <Holding name="Utilities" holdingPercent={4} />
      </Collapse>
    </div>
  </div>
);

export default FundHoldings;
