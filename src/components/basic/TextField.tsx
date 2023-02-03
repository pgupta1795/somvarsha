import React from 'react';

export interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
  label: string;
}

const TextField = ({ name, label, ...rest }: TextFieldProps) => (
  <div className="bg-primary rounded-lg p-4">
    <label htmlFor={name}>
      {label}
      <textarea
        name={name}
        id=""
        cols={0}
        rows={7}
        className="w-full font-poppins border-none outline-none p-2 rounded-lg mt-4 dark:bg-black bg-white"
        {...rest}
      />
    </label>
  </div>
);

export default TextField;
