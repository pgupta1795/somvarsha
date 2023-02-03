import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { footerVariants } from '../../../../helper/Motion';

export interface ContactDisplayProps {
  name: string;
  icon: ReactNode;
  href: string;
  children: string | number;
}

const ContactDisplay = ({
  name,
  icon,
  href,
  children,
}: ContactDisplayProps) => (
  <div className="flex mb-8 gap-x-2">
    {icon}
    <motion.div variants={footerVariants(0.4)}>
      <h3>{name}</h3>
      <a
        href={href}
        className="font-extrabold underline underline-offset-4 font-mono"
      >
        {children}
      </a>
    </motion.div>
  </div>
);

export default ContactDisplay;
