import FundManagers from './FundManagers';

const OtherInformation = () => (
  <div className="w-full p-4 rounded-lg bg-secondary">
    <div className="text-2xl font-bold">Other Information</div>
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <span>Minimum SIP</span>
        <span>₹100</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span>Minimum lumpsum</span>
        <span>₹5,000</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span>Additional lumpsum</span>
        <span>₹1,000</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span>Portfolio turnover</span>
        <span>75%</span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span>Lock-in period</span>
        <span>-</span>
      </div>
      <FundManagers />
    </div>
  </div>
);

export default OtherInformation;
