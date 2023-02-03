import { motion } from 'framer-motion';
import user from '../../../../assets/img/user.png';
import { slideIn } from '../../../../helper/Motion';

const UserImage = () => (
  <motion.div
    variants={slideIn('down', 'tween', 0.7, 1)}
    className="sm:w-48 sm:h-48 overflow-hidden rounded-full transition-all ease-out mr-auto ml-auto"
  >
    <img src={user} alt="about" loading="lazy" />
  </motion.div>
);

export default UserImage;
