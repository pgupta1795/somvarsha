import { motion } from 'framer-motion';
import Constants from '../../../../helper/Constants';
import { fadeIn } from '../../../../helper/Motion';

const Description = () => (
  <motion.p
    variants={fadeIn('left', 'tween', 0.7, 1)}
    className="max-w-md text-xl mt-4 text-center sm:text-left text-slate-400 leading-10"
  >
    {Constants.DETAILS.description}
  </motion.p>
);

export default Description;
