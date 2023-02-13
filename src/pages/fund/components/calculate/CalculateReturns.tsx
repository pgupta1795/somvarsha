import { Ref, useEffect, useRef, useState } from 'react';
import InputField from '../../../../components/basic/InputField';
import InputField2 from '../../../../components/basic/InputField2';
import RangeField from '../../../../components/basic/RangeField';
import {
  calculateLumpsum,
  calculateSIP,
  currencyConvert,
} from '../../../../utils/FormulaUtils';

const CalculateReturns = () => {
  const lumpsumRef: Ref<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
  const sipRef: Ref<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(lumpsumRef);
  const [formData, setFormData] = useState({
    'investment-amount': 10000,
    'return-rate': 7.5,
    'investment-duration-years': 2,
    'duration-months': 0,
  });
  const [calculatedValue, setCalculatedValue] = useState('');

  useEffect(() => {
    setCalculatedValue(
      active === lumpsumRef
        ? calculateLumpsum(
            formData['investment-amount'],
            formData['return-rate'],
            formData['investment-duration-years'],
            formData['duration-months']
          )
        : calculateSIP(
            formData['investment-amount'],
            formData['return-rate'],
            formData['investment-duration-years'],
            formData['duration-months']
          )
    );

    return () => {
      setCalculatedValue('');
    };
  }, [active, formData]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: Number(e.target.value),
    }));
  };

  return (
    <div className="w-full p-4 rounded-lg bg-secondary-focus">
      <div className="text-2xl font-bold text-center">Calculate Returns</div>
      <div className="flex flex-col gap-4 mt-4 justify-between">
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            ref={lumpsumRef}
            className={`btn btn-primary ${
              active === lumpsumRef ? '' : 'btn-outline'
            }`}
            onClick={() => setActive(lumpsumRef)}
          >
            Lumpsum
          </button>
          <button
            type="button"
            ref={sipRef}
            className={`btn btn-primary ${
              active === sipRef ? '' : 'btn-outline'
            }`}
            onClick={() => setActive(sipRef)}
          >
            SIP
          </button>
        </div>

        <form className="form-control gap-4">
          <InputField2
            id="investment-amount"
            placeholder="Enter Amount in Rupees"
            label="Investment Amount"
            subLabel1={active === sipRef ? 'Monthly' : 'lumpsum'}
            subLabel2="₹"
            onChange={handleFormChange}
            value={formData['investment-amount']}
          />
          <div className="self-center text-secondary">
            <InputField
              type="text"
              name="Number"
              label="Expected Return Rate (%)"
              required
              pattern="[7-9]{1}[0-9]{9}"
              title="Expected Return Rate"
              placeholder="Enter Return Rate in Percent"
              value={formData['return-rate']}
              id="return-rate"
              onChange={handleFormChange}
            />
          </div>
          <div className="bg-primary flex flex-col gap-4 text-secondary rounded-lg p-4">
            <div>Investment Duration</div>
            <RangeField
              id="investment-duration-years"
              label="Years"
              min="1"
              max="30"
              value={formData['investment-duration-years']}
              onChange={handleFormChange}
            />
            <RangeField
              id="duration-months"
              label="Months"
              value={formData['duration-months']}
              onChange={handleFormChange}
            />
          </div>
        </form>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between gap-8">
            <div>Investment Amount</div>
            <div>₹ {currencyConvert(formData['investment-amount'])}</div>
          </div>
          <div className="flex flex-row justify-between gap-8">
            <div>Return Rate</div>
            <div>{formData['return-rate']}%</div>
          </div>
          <div className="flex flex-row justify-between gap-8">
            <div>Duration</div>
            <div>
              {formData['investment-duration-years']}y{' '}
              {formData['duration-months']}m
            </div>
          </div>
          <div className="flex flex-row text-center justify-between gap-8 p-1 bg-info rounded-sm text-xl font-bold">
            <div>Return Amount</div>
            <div>₹ {calculatedValue}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateReturns;
