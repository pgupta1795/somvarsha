import Stat from '../../../../components/basic/Stat';

const FundStats = () => (
  <div className="stats bg-secondary text-primary">
    <Stat
      title="NAV"
      value={<span className="text-success">₹28.4000</span>}
      description="+1.50% (8 Feb)"
    />
    <Stat title="AUM" value={<span className="text-info">↗︎ 768 Cr</span>} />
    <Stat title="TER" value={<span className="text-success">1.08%</span>} />
    <Stat
      title="Risk"
      value={<span className="text-error">Very High Risk</span>}
    />
  </div>
);

export default FundStats;
