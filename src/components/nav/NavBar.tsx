import { motion } from 'framer-motion';
import { headerVariants } from '../../helper/Motion';
import DesktopMenu from './menu/DesktopMenu';
import MobileMenu from './menu/MobileMenu';

const NavBar = () => (
  <motion.header
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="relative top-0 z-50 font-Merriweather bg-primary text-secondary h-[var(--height-toolbar)] pt-2"
  >
    <DesktopMenu />
    <MobileMenu />
  </motion.header>
);

export default NavBar;
