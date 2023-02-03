import React from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, color, ...rest }) => (
  <button
    type="submit"
    className={`inline-flex items-center ${color} p-4 rounded-lg font-medium hover:${color}/50 hover:shadow-lg button--flex tracking-wide`}
    {...rest}
  >
    {children}
  </button>
);

Button.defaultProps = {
  color: 'bg-primary',
};

export default Button;
