import { AddCircle } from '@mui/icons-material';
import Button from '../../../../components/basic/Button';

const AddFunds = () => (
  <Button className="group mt-4 flex items-center justify-start gap-x-4 p-2 w-fit rounded-lg cursor-pointer hover:border-2">
    <AddCircle className="text-info group-hover:text-primary" />
    <span className="text-info text-2xl group-hover:text-primary uppercase">
      Add Funds
    </span>
  </Button>
);

export default AddFunds;
