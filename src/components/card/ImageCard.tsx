import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeIn } from '../../helper/Motion';

interface ImageCardInterface {
  heading: string;
  subheading: string;
  imageSrc: string;
  icon: ReactNode;
  description: ReactNode;
}

const ImageCard = ({
  heading,
  subheading,
  imageSrc,
  icon,
  description,
}: ImageCardInterface) => (
  <li className="text-slate-50 self-center sm:self-stretch w-2/3 sm:w-5/6 dark:border-gray-100 bg-secondary rounded-3xl shadow-sm hover:shadow-2xl group hover:scale-110 transition duration-500 ease-in-out delay-250 relative overflow-hidden cursor-pointer">
    <div className="flex flex-col items-center group-hover:blur-sm">
      <motion.img
        variants={fadeIn('up', 'tween', 0.7, 1)}
        src={imageSrc}
        loading="lazy"
        alt="Explorer"
        className="w-full mb-6 rounded-t-3xl"
      />
      <h3 className="text-xl font-bold tracking-[3px] uppercase text-center group-hover:text-indigo-700 text-slate-400">
        {heading}
      </h3>
      <p className="sm:text-lg tracking-[3px] text-2xl text-center mt-2 text-slate-500 dark:text-slate-400 group-hover:text-indigo-700">
        {subheading}
      </p>
      <motion.p
        variants={fadeIn('down', 'tween', 0.7, 1)}
        className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400"
      >
        {icon}
      </motion.p>
    </div>
    <div className="opacity-0 absolute group-hover:opacity-100 bottom-5 left-0 delay-200 transition ease-in-out translate-y-48 group-hover:translate-y-0">
      {description}
    </div>
  </li>
);

export default ImageCard;
