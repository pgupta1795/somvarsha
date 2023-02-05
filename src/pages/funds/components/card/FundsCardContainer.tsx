import FundsCard from './FundsCard';

const FundsCardContainer = () => {
  console.log('');
  return (
    <div className="grid grid-flow-row sm:grid-cols-3 grid-cols-1 gap-4 self-center">
      <FundsCard
        name="Mirae Asset Large Cap Fund - Direct Plan"
        rating={4}
        scheme="Large-Cap"
        oneyear={1.4}
        threeyear={2.3}
        fiveyear={15.3}
      />
      <FundsCard
        name="ABC Asset Large Cap Fund - Direct Plan"
        rating={2}
        scheme="Large-Cap"
        oneyear={1.4}
        threeyear={2.3}
        fiveyear={15.3}
      />
      <FundsCard
        name="GUPTA Asset Large Cap Fund - Direct Plan"
        rating={3}
        scheme="Large-Cap"
        oneyear={1.4}
        threeyear={2.3}
        fiveyear={15.3}
      />
      <FundsCard
        name="LAVI Asset Large Cap Fund - Direct Plan"
        rating={4}
        scheme="Large-Cap"
        oneyear={1.4}
        threeyear={2.3}
        fiveyear={15.3}
      />
      <FundsCard
        name="PALLAV Asset Large Cap Fund - Direct Plan"
        rating={4.5}
        scheme="Large-Cap"
        oneyear={1.4}
        threeyear={2.3}
        fiveyear={15.3}
      />
    </div>
  );
};

export default FundsCardContainer;
