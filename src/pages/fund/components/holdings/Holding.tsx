interface HoldingProps {
  name: string;
  holdingPercent: number;
}

const Holding = ({ name, holdingPercent }: HoldingProps) => (
  <div className="flex flex-col sm:flex-row justify-between items-center">
    <div>{name}</div>
    <div className="flex flex-row items-center justify-between ">
      <span>{holdingPercent}</span>
      <progress
        className="ml-4 progress progress-secondary w-56"
        value={holdingPercent}
        max="100"
        title={holdingPercent.toString()}
      />
    </div>
  </div>
);

export default Holding;
