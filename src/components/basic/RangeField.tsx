import React from 'react';

export interface RangeFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  value: string | number;
}

const RangeField = ({ id, label, value, ...rest }: RangeFieldProps) => (
  <div>
    <label className="label gap-4" htmlFor={id}>
      <span>{label}</span>
      <div className="w-full">
        <input
          id={id}
          type="range"
          min="0"
          max="11"
          value={value}
          className="range range-secondary range-xs"
          {...rest}
        />
      </div>
      <span>{value}</span>
    </label>
  </div>
);

export default RangeField;
