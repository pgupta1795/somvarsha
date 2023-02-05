import { ArrowDropDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Constants from '../../../helper/Constants';
import NavLink from '../../basic/NavLink';
import Title from '../../brand/Title';
import NavSearch from '../search/NavSearch';
import ToggleMenu from './ToggleMenu';

const DesktopMenu = () => (
  <section className="mx-auto p-4 flex justify-between items-stretch my-auto gap-x-4">
    <Title />
    <div className="mx-auto my-auto grow hidden md:block" />
    <div className=" flex gap-x-8">
      <div>
        <NavSearch />
      </div>
      <ToggleMenu />
      <nav className="hidden md:block space-x-8 text-lg tracking-[3px]">
        <span>
          <NavLink
            name={Constants.FUNDS.name}
            id={Constants.FUNDS.id}
            className="text-secondary p-2 hover:text-primary hover:bg-secondary hover:rounded-lg hover:shadow-lg hover:button--flex hover:w-fit transition-all"
          />
          <span className="group relative">
            <Link
              to={`#${Constants.FUNDS.id}`}
              className="text-secondary p-2 hover:text-primary hover:bg-secondary hover:rounded-lg hover:shadow-lg hover:button--flex hover:w-fit transition-all"
            >
              <ArrowDropDown />
            </Link>
            <ul className="menu w-56 bg-secondary text-primary p-2 rounded-box hidden group-hover:flex absolute -right-1 top-[calc(100%_+_.5em)]">
              <li>
                <Link
                  replace
                  to="/funds/root"
                  className="hover:bg-primary hover:text-secondary transition-all duration-75"
                >
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link
                  replace
                  to="/stocks"
                  className="hover:bg-primary hover:text-secondary transition-all duration-75"
                >
                  Stocks
                </Link>
              </li>
            </ul>
          </span>
        </span>
        <NavLink
          name={Constants.SERVICES.name}
          id={Constants.SERVICES.id}
          className="text-secondary p-2 hover:text-primary hover:bg-secondary hover:rounded-lg hover:shadow-lg hover:button--flex hover:w-fit transition-all"
        />
        <NavLink
          name={Constants.ABOUT.name}
          id={Constants.ABOUT.id}
          className="text-secondary p-2 hover:text-primary hover:bg-secondary hover:rounded-lg hover:shadow-lg hover:button--flex hover:w-fit transition-all"
        />
        <NavLink
          name={Constants.CONTACT.name}
          id={Constants.CONTACT.id}
          className="text-secondary p-2 hover:text-primary hover:bg-secondary hover:rounded-lg hover:shadow-lg hover:button--flex hover:w-fit transition-all"
        />
      </nav>
    </div>
  </section>
);

export default DesktopMenu;
