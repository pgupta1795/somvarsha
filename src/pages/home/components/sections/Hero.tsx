import { motion } from 'framer-motion';
import NavLink from '../../../../components/basic/NavLink';
import Phone from '../../../../components/brand/Phone';
import SectionCard from '../../../../components/card/SectionCard';
import Constants from '../../../../helper/Constants';
import { slideIn } from '../../../../helper/Motion';
import Description from '../hero/Description';
import HeroImage from '../hero/HeroImage';
import Introduction from '../hero/Introduction';

const Hero = () => (
  <section id="hero" className="p-6 gap-x-4 mb-8 overflow-hidden relative">
    <SectionCard>
      <div className="flex flex-col-reverse justify-center sm:flex-row items-center gap-x-4 scroll-mt-40">
        <article className="flex flex-col gap-8 w-full tracking-[3px]">
          <Introduction />
          <Description />
          <motion.div variants={slideIn('up', 'tween', 0.3, 1)}>
            <NavLink
              name={Constants.CONTACT.name}
              id={Constants.CONTACT.id}
              className="text-black inline-flex items-center bg-primary p-4 rounded-lg font-medium hover:opacity-50 hover:shadow-lg button--flex tracking-wide w-fit"
            />
          </motion.div>
        </article>
        <div className="justify-items-end self-end">
          <div className="absolute right-0 top-12 max-sm:hidden block">
            <HeroImage />
          </div>
          <Phone />
        </div>
      </div>
    </SectionCard>
  </section>
);

export default Hero;
