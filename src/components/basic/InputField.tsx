import React from 'react';

export interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
}

const InputField = ({ name, label, ...rest }: InputFieldProps) => (
  <div className="bg-primary rounded-lg p-4">
    <label htmlFor={name}>
      {label}
      <input
        className="w-full font-poppins border-none outline-none p-2 rounded-lg mt-4"
        name={name}
        {...rest}
      />
    </label>
  </div>
);

export default InputField;
