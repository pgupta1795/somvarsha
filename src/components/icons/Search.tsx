import { FC } from 'react';

const Search: FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg viewBox="0 0 24 24" version="1.1" className="w-8 h-8 md:w-5 md:h-5">
    <title>Search</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Search">
        <rect
          id="Rectangle"
          fillRule="nonzero"
          x="0"
          y="0"
          width="24"
          height="24"
        />
        <circle
          id="Oval"
          stroke="var(--secondary-color)"
          strokeWidth="2"
          strokeLinecap="round"
          cx="11"
          cy="11"
          r="7"
        />
        <line
          x1="16"
          y1="17"
          x2="19"
          y2="20"
          id="Path"
          stroke="var(--secondary-color)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </g>
  </svg>
);

export default Search;
