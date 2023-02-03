import { motion } from 'framer-motion';
import { ReactComponent as IMG } from '../../../../assets/svg/hero.svg';
import { fadeIn } from '../../../../helper/Motion';

const HeroImage = () => (
  <motion.div
    variants={fadeIn('right', 'tween', 0.7, 1)}
    className="w-4/12 relative"
  >
    <IMG />
  </motion.div>
);

export default HeroImage;
