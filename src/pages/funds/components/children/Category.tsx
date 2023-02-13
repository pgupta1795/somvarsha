import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { AppDispatch } from '../../../../app/store';
import Select from '../../../../components/select/Select';
import { searchMutualFunds } from '../../../../features/funds/actions';
import {
  getCategories,
  getParams,
  setParams,
} from '../../../../features/funds/fundsSlice';
import { SelectOption } from '../../../../interfaces/SelectProps';
import FundsCardContainer from '../card/FundsCardContainer';

const Category = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(getCategories);
  const params = useSelector(getParams);
  const { category } = useParams();
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [value, setValue] = useState<SelectOption[]>([]);

  useEffect(() => {
    if (category) {
      const cat = category.charAt(0).toUpperCase() + category.slice(1) || '';
      const opts = categories[cat]?.map((sub) => ({ label: sub, value: sub }));
      if (opts) setOptions(opts);
    }

    return () => {
      setOptions([]);
    };
  }, [categories, category]);

  useEffect(() => {
    if (params.sub_category)
      setValue(
        params.sub_category
          .split(',')
          .map((sub) => ({ label: sub, value: sub }))
      );

    return () => {
      setValue([]);
    };
  }, [params.sub_category]);

  // useEffect(() => {
  //   dispatch(setParams({ sub_category: '' }));
  // }, [dispatch, navigate]);

  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-lg font-bold">Equity Funds</p>
      <div className="flex flex-row items-center">
        <div className="flex-grow" />
        {options && options.length > 0 ? (
          <Select
            options={options}
            onChange={async (o) => {
              setValue(o);
              await dispatch(
                setParams({ sub_category: o.map((opt) => opt.value).join(',') })
              );
              dispatch(searchMutualFunds());
            }}
            value={value}
            multiple
          />
        ) : null}
      </div>
      <FundsCardContainer />
    </div>
  );
};

export default Category;
