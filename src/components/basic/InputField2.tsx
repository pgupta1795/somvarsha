import React from 'react';

export interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  subLabel1: string;
  subLabel2: string;
  value: string | number;
}

const InputField2 = ({
  id,
  value,
  label,
  subLabel1,
  subLabel2,
  ...rest
}: InputFieldProps) => (
  <div className="self-center">
    <div className="label" aria-label="Enter Amount">
      <span className="px-4">{label}</span>
    </div>
    <label className="input-group text-secondary" htmlFor={id}>
      <span>{subLabel1}</span>
      <input
        id={id}
        type="text"
        placeholder="Enter Amount in Rupees"
        value={value}
        className="input input-bordered"
        {...rest}
      />
      <span>{subLabel2}</span>
    </label>
  </div>
);

export default InputField2;
