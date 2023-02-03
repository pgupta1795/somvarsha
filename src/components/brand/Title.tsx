import NavLink from '../basic/NavLink';
import Logo from './Logo';

const Title = () => (
  <div className="flex flex-row text-2xl font-medium font-poppins tracking-wider gap-4">
    <h1>
      <NavLink
        name={
          <div className="w-44">
            <Logo />
          </div>
        }
        id="hero"
        className="hover:font-bold"
      />
    </h1>
  </div>
);

export default Title;
