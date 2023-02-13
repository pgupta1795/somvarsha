import { AddCircle, RemoveCircle } from '@mui/icons-material';
import { Ref, useRef } from 'react';

interface RowProps {
  name: string;
  one_year: string;
  three_year: string;
  five_year: string;
  all: string;
  volatility: string;
  remove: boolean;
}

const RowFundReturns = ({
  name,
  one_year,
  three_year,
  five_year,
  all,
  volatility,
  remove,
}: RowProps) => {
  const rowRef: Ref<HTMLTableRowElement> = useRef<HTMLTableRowElement>(null);

  return (
    <tr ref={rowRef}>
      <th>
        <div className={remove ? '' : 'hidden'}>
          <label className="swap" aria-label="minus" htmlFor={name}>
            <input
              id={name}
              type="checkbox"
              className="checkbox"
              onClick={() => {
                rowRef.current?.classList.add('hidden');
              }}
            />
            <div className="swap-off">
              <RemoveCircle className="text-info" />
            </div>
            <div className="swap-on">
              <AddCircle className="text-info" />
            </div>
          </label>
        </div>
      </th>
      <th className="w-20 sm:w-40" title={name}>
        <div className="w-20 sm:w-40 overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </div>
      </th>
      <td>{one_year}</td>
      <td>{three_year}</td>
      <td>{five_year}</td>
      <td>{all}</td>
      <th>{volatility}</th>
    </tr>
  );
};

export default RowFundReturns;
