import { motion } from 'framer-motion';
import { fadeIn } from '../../../../helper/Motion';

const Experience = () => (
  <div className="flex flex-row my-8 items-stretch justify-around">
    <motion.div
      variants={fadeIn('left', 'tween', 0.3, 1)}
      className="flex flex-col"
    >
      <span className="text-2xl sm:text-3xl font-bold text-animate">30+</span>
      Years
      <br /> experience
    </motion.div>
    <motion.div
      variants={fadeIn('left', 'tween', 0.5, 1)}
      className="flex flex-col"
    >
      <span className="text-2xl sm:text-3xl font-bold text-animate">200+</span>
      Mutual Fund
      <br /> Portfolios
    </motion.div>
    <motion.div
      variants={fadeIn('left', 'tween', 0.7, 1)}
      className="flex flex-col"
    >
      <span className="text-2xl sm:text-3xl font-bold text-animate">50+</span>
      Stock Market
      <br /> Portfolios
    </motion.div>
  </div>
);

export default Experience;
