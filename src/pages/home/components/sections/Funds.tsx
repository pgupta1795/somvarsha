import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import fund from '../../../../assets/svg/mutualfund.svg';
import stock from '../../../../assets/svg/saving.svg';
import sip from '../../../../assets/svg/sip.svg';
import tax from '../../../../assets/svg/taxsaving.svg';
import SectionCard from '../../../../components/card/SectionCard';
import Constants from '../../../../helper/Constants';
import { slideIn } from '../../../../helper/Motion';
import SectionContainer from '../container/SectionContainer';
import FundType from '../funds/FundType';

const Funds = () => {
  const navigate = useNavigate();

  return (
    <SectionContainer id={Constants.FUNDS.id} name={Constants.FUNDS.name}>
      <SectionCard>
        <motion.div
          variants={slideIn('down', 'tween', 0.4, 1)}
          className="text-center text-4xl sm:mt-20 max-sm:my-10 text-slate-400 tracking-widest mb-8"
        >
          Make a investment in ...
        </motion.div>
        <motion.div
          variants={slideIn('up', 'tween', 0.6, 1)}
          className="grid max-md:grid-cols-2 grid-cols-4 text-center md:justify-around sm:gap-10 items-stretch min-h-[inherit] uppercase tracking-widest md:min-h-[10em]"
        >
          <FundType
            name="Mutual Funds"
            imgSrc={fund}
            onClick={() => {
              navigate('/funds');
            }}
          />
          <FundType
            name="SIP"
            imgSrc={sip}
            onClick={() => {
              navigate('/funds');
            }}
          />
          <FundType
            name="Tax Savings"
            imgSrc={tax}
            onClick={() => {
              navigate('/funds');
            }}
          />
          <FundType
            name="Stocks"
            imgSrc={stock}
            onClick={() => {
              navigate('/stocks');
            }}
          />
        </motion.div>
      </SectionCard>
    </SectionContainer>
  );
};

export default Funds;
