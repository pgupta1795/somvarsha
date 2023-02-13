import React, { FC, useState } from 'react';

interface CollapseProps {
  title: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
}

const Collapse: FC<CollapseProps> = ({
  title,
  children,
  open,
}: CollapseProps) => {
  const [isChecked, setIsChecked] = useState(open);
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus group border border-base-300 bg-base-100 rounded-box"
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <div
        className={`collapse-title text-xl font-bold ${
          isChecked ? 'bg-info' : 'bg-primary'
        }`}
      >
        {title}
      </div>
      <div
        className={`collapse-content flex flex-col gap-4 ${
          isChecked ? 'bg-info' : 'bg-primary'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

Collapse.defaultProps = {
  open: false,
};

export default Collapse;
