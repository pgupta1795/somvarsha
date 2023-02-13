import { useState } from 'react';
import Button from '../../../../components/basic/Button';

type YEAR = '1M' | '6M' | '1Y' | '3Y' | '5Y';

const btns: Array<YEAR> = ['1M', '6M', '1Y', '3Y', '5Y'];

const FundsGraphToolbar = () => {
  const [selection, setSelection] = useState<YEAR>('1Y');

  const updateData = (timeline: YEAR) => {
    setSelection(timeline);

    switch (timeline) {
      case '1M':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('28 Jan 2013').getTime(),
          new Date('27 Feb 2013').getTime()
        );
        break;
      case '6M':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 Sep 2012').getTime(),
          new Date('27 Feb 2013').getTime()
        );
        break;
      case '1Y':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('27 Feb 2012').getTime(),
          new Date('27 Feb 2013').getTime()
        );
        break;
      case '3Y':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('01 Jan 2013').getTime(),
          new Date('27 Feb 2013').getTime()
        );
        break;
      case '5Y':
        ApexCharts.exec(
          'area-datetime',
          'zoomX',
          new Date('23 Jan 2012').getTime(),
          new Date('27 Feb 2013').getTime()
        );
        break;
      default:
    }
  };

  return (
    <div className="w-max p-1 mb-1">
      {btns.map((btn) => (
        <Button
          key={btn}
          id={btn}
          onClick={() => updateData(btn)}
          className={`btn mx-1 btn-sm ${
            selection === btn ? 'btn-info' : 'btn-primary'
          }`}
        >
          {btn}
        </Button>
      ))}
    </div>
  );
};

export default FundsGraphToolbar;
