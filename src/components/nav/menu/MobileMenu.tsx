import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isMenuOpen } from '../../../features/menu/mobileMenuSlice';
import Constants from '../../../helper/Constants';
import { mobileMenuItems } from '../../../helper/Motion';
import NavLink from '../../basic/NavLink';

const MobileMenu = () => {
  const isOpen = useSelector(isMenuOpen);

  return (
    <section
      id="mobile-menu"
      className="rounded-xl animate-open-menu top-68 right-0 justify-content items-center relative z-1 hidden w-1/2 max-sm:w-full max-sm:h-full origin-top flex-col bg-secondary text-5xl text-primary min-h-[15em]"
    >
      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        variants={mobileMenuItems}
        className="flex min-h-screen flex-col items-center py-8"
        aria-label="mobile"
      >
        <Link
          replace
          to="/funds/root"
          className="bg-primary rounded-lg text-secondary transition-all duration-75 w-full py-4 text-center px-2 mb-2 no-underline"
        >
          Mutual Funds
        </Link>
        <Link
          replace
          to="/stocks"
          className="bg-primary rounded-lg text-secondary transition-all duration-75 w-full py-4 text-center px-2 mt-2"
        >
          Stocks
        </Link>
        <NavLink
          name={Constants.FUNDS.name}
          id={Constants.FUNDS.id}
          className="w-full py-6 text-center hover:opacity-90 hover:scale-110 hover:text-secondary"
        />
        <NavLink
          name={Constants.SERVICES.name}
          id={Constants.SERVICES.id}
          className="w-full py-6 text-center hover:opacity-90 hover:scale-110 hover:text-secondary"
        />
        <NavLink
          name={Constants.ABOUT.name}
          id={Constants.ABOUT.id}
          className="w-full py-6 text-center hover:opacity-90 hover:scale-110 hover:text-secondary"
        />
        <NavLink
          name={Constants.CONTACT.name}
          id={Constants.CONTACT.id}
          className="w-full py-6 text-center hover:opacity-90 hover:scale-110 hover:text-secondary"
        />
      </motion.nav>
    </section>
  );
};

export default MobileMenu;
