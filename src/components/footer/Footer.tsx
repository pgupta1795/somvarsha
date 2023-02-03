import {
  AlternateEmail,
  FacebookOutlined,
  WhatsApp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Constants from '../../helper/Constants';
import { footerVariants, staggerChildren } from '../../helper/Motion';
import Parallex from '../animation/Parallex';
import NavLink from '../basic/NavLink';

const Footer = () => (
  <motion.footer
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="py-10 bg-secondary parallex dark:text-slate-400 bottom-0 w-full"
  >
    <div className="container grid sm:grid-cols-3 gap-x-4 gap-y-8 sm:gap-y-14 mx-6 sm:mx-auto max-w-4xl items-start">
      <motion.div variants={footerVariants(0.2)} className="text-sm sm:pl-16">
        <h1 className="mb-1 text-2xl">Praveen Gupta</h1>
        LIC Agent, Tax Planner & Wealth Manager
      </motion.div>

      <motion.ul
        variants={footerVariants(0.3)}
        className="flex flex-row gap-x-6"
      >
        <li>
          <NavLink name={Constants.FUNDS.name} id={Constants.FUNDS.id} />
        </li>
        <li>
          <NavLink name={Constants.SERVICES.name} id={Constants.SERVICES.id} />
        </li>
        <li>
          <NavLink name={Constants.ABOUT.name} id={Constants.ABOUT.id} />
        </li>
        <li>
          <NavLink name={Constants.CONTACT.name} id={Constants.CONTACT.id} />
        </li>
      </motion.ul>

      <motion.div variants={footerVariants(0.5)}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="text-2xl mr-6"
          title="Facebook"
          rel="noreferrer"
        >
          <FacebookOutlined />
        </a>

        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          className="text-2xl mr-6"
          title="Whatsapp"
          rel="noreferrer"
        >
          <WhatsApp />
        </a>

        <a
          href="mailto:"
          className="text-2xl mr-6"
          target="_blank"
          title="Email"
          rel="noreferrer"
        >
          <AlternateEmail />
        </a>
      </motion.div>
    </div>
    <motion.p
      variants={footerVariants(0.7)}
      className="sm:text-center mt-12 mx-6"
    >
      &#169; SomVarsha. All rights reserved
    </motion.p>
    <Parallex />
  </motion.footer>
);

export default Footer;
