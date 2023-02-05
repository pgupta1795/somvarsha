import { useState } from 'react';
import Select from '../../../../components/select/Select';
import { SelectOption } from '../../../../interfaces/SelectProps';
import FundsCardContainer from '../card/FundsCardContainer';
import FundsSearch from './FundsSearch';
import GrowthDividend from './GrowthDividend';

const options = [
  { label: 'first', value: 1 },
  { label: 'first1', value: 21 },
  { label: 'first2', value: 31 },
  { label: 'first3', value: 41 },
];

const Category = () => {
  const [value, setValue] = useState<SelectOption[]>([options[0]]);

  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-lg font-bold">Equity Funds</p>
      <div className="flex flex-row items-center">
        <FundsSearch />
        <div className="flex-grow" />
        <Select
          options={options}
          onChange={(o) => setValue(o)}
          value={value}
          multiple
        />
      </div>
      <GrowthDividend />
      <FundsCardContainer />
    </div>
  );
};

export default Category;
