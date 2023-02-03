import { Email, LocationOn, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Constants from '../../../../helper/Constants';
import { staggerChildren } from '../../../../helper/Motion';
import ContactDisplay from './ContactDisplay';

const Details = () => (
  <motion.div
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="tracking-[3px] leading-8"
  >
    <ContactDisplay name="Phone No." icon={<Phone />} href="##">
      {Constants.DETAILS.phone}
    </ContactDisplay>
    <ContactDisplay
      name="Email"
      icon={<Email />}
      href={`mailto:${Constants.DETAILS.email}`}
    >
      {Constants.DETAILS.email}
    </ContactDisplay>
    <ContactDisplay name="Location" icon={<LocationOn />} href="##">
      {Constants.DETAILS.address}
    </ContactDisplay>
  </motion.div>
);

export default Details;
