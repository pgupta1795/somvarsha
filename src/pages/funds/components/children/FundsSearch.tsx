import Button from '../../../../components/basic/Button';
import Search from '../../../../components/icons/Search';

const FundsSearch = () => (
  <div className="form-control relative w-full max-w-[10rem] sm:max-w-xs">
    <Button className="absolute top-0 right-0 btn btn-ghost">
      <Search color="var(--primary-color)" />
    </Button>
    <input type="text" placeholder="Search" className="input input-bordered" />
  </div>
);

export default FundsSearch;
