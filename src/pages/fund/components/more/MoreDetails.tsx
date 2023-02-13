import BoxArrow from '../../../../components/icons/BoxArrow';

const MoreDetails = () => (
  <div className="w-full p-4 rounded-lg bg-secondary hover:bg-info duration-75 transition-all">
    <a
      href="https://www.icicipruamc.com/downloads/sid"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row justify-between"
    >
      <div className="text-2xl font-extrabold text-primary rounded-lg">
        More Details
      </div>
      <BoxArrow />
    </a>
  </div>
);

export default MoreDetails;
