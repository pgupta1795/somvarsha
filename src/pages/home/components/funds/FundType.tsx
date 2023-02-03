import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FundTypeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  imgSrc: string;
}

const FundType = ({ name, imgSrc, ...rest }: FundTypeProps) => (
  <div
    className="max-md:self-center flex flex-col p-4 items-center hover:border-primary hover:border-2 hover:rounded-lg hover:bg-black ease-in hover:transition-all hover:-translate-y-1 hover:scale-110"
    role="button"
    {...rest}
  >
    <img className="w-12 h-12" src={imgSrc} alt={name} loading="lazy" />
    <div className="first-letter:text-primary first-letter:font-semibold first-letter:text-2xl">
      {name}
    </div>
  </div>
);

export default FundType;
