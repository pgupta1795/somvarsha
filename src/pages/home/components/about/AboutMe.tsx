import { motion } from 'framer-motion';
import { slideIn } from '../../../../helper/Motion';

const AboutMe = () => (
  <>
    <motion.h2
      variants={slideIn('down', 'tween', 0.7, 1)}
      className="text-4xl max-sm:text-3xl pb-4 mt-9 mb-2 mx-0 border-b-2 border-b-primary"
    >
      Mutual Funds Distributor
    </motion.h2>
    <motion.h3
      variants={slideIn('down', 'tween', 0.5, 1)}
      className="uppercase font-light tracking-[3px] s sm:tracking-[5px] pb-4 mt-5 mb-2  border-b-2 border-b-primary text-xl"
    >
      Tax Planner, Wealth Manager & LIC Agent
    </motion.h3>
    <motion.h5
      variants={slideIn('down', 'tween', 0.3, 1)}
      className="text-lg text-gray-300 pb-4 mt-5 mb-2 tracking-[3px]"
    >
      Extensive Knowledge and Years of experience working in Wealth Management
    </motion.h5>
  </>
);

export default AboutMe;
