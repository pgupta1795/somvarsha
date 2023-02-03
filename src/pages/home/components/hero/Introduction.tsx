import { motion } from 'framer-motion';
import Constants from '../../../../helper/Constants';
import { fadeIn } from '../../../../helper/Motion';

const Introduction = () => (
  <h2 className="max-w-md text-3xl font-bold text-center sm:text-5xl sm:text-left leading-10 text-slate-400 ">
    <motion.p variants={fadeIn('left', 'tween', 0.1, 1)}>
      Hello<span className="text-primary">,</span> I am
    </motion.p>
    <br />
    <motion.span
      variants={fadeIn('left', 'tween', 0.3, 1)}
      className="text-animate text-5xl pt-4 uppercase"
    >
      {Constants.DETAILS.name}
    </motion.span>
    <br />
    <br />
    <motion.span
      variants={fadeIn('left', 'tween', 0.5, 1)}
      className="text-4xl"
    >
      {Constants.DETAILS.designation}
    </motion.span>
    <motion.span
      variants={fadeIn('left', 'tween', 0.5, 1)}
      className="text-primary"
    >
      ...
    </motion.span>
  </h2>
);

export default Introduction;
