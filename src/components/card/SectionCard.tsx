import { motion } from 'framer-motion';
import { zoomIn } from '../../helper/Motion';
import Children from '../../interfaces/Children';
import Parallex from '../animation/Parallex';
import Squares from '../animation/Squares';

const SectionCard = ({ children }: Children) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    variants={zoomIn(0.04, 0.7)}
    viewport={{ once: true, amount: 0.5 }}
    className="flex flex-col items-center justify-center text-slate-400 parallex overflow-hidden"
  >
    <div className="rounded-xl bg-secondary shadow-2xl min-w-[21.4em] sm:min-w-[minmax(80%,53em)] min-h-[30em] py-6 px-12">
      {children}
    </div>
    <Parallex />
    <Squares />
  </motion.div>
);

export default SectionCard;
