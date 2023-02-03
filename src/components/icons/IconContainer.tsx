import Children from '../../interfaces/Children';

const IconContainer = ({ children }: Children) => (
  <li className="list-none bg-secondary w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all ease-in-out hover:bg-primary hover:shadow-sm hover:shadow-black">
    {children}
  </li>
);

export default IconContainer;
