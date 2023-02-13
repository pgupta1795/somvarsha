import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const data = [
  {
    name: 'NIFTY50',
    value: 17854.05,
    percent: 1.38,
    difference: +243.65,
  },
  {
    name: 'SENSEX',
    value: 17854.05,
    percent: 1.38,
    difference: +243.65,
  },
  {
    name: 'Nifty Bank',
    value: 17854.05,
    percent: 1.38,
    difference: +243.65,
  },
  {
    name: 'Nifty IT',
    value: 17854.05,
    percent: 1.38,
    difference: +243.65,
  },
  {
    name: 'S&P BSE SmallCap',
    value: 17854.05,
    percent: -1.38,
    difference: -243.65,
  },
];

const Indexes = () => (
  <div className="stat bg-secondary text-card rounded-lg overflow-y-hidden overflow-x-hidden m-auto mb-6 my-1 p-0 cursor-cell">
    <motion.div
      whileHover={{
        translateX: -50,
      }}
      animate={{ translateX: ['-80%', '100%'] }}
      transition={{
        ease: 'linear',
        duration: 20,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="flex justify-start gap-x-1 w-full"
    >
      {data.map((d) => (
        <div key={d.name} className="stat py-2">
          <div className="stat-figure text-secondary">
            {d.difference > 0 ? (
              <ArrowUpward style={{ color: '#55D889' }} />
            ) : (
              <ArrowDownward style={{ color: '#F03B24' }} />
            )}
          </div>
          <div className="stat-title">{d.name}</div>
          <div className="stat-value">{d.value}</div>
          <div
            className={`${
              d.difference > 0 ? 'text-success' : 'text-error'
            } stat-desc flex flex-row justify-between font-extrabold`}
          >
            <span>{d.percent}%</span>
            <span>{d.difference}</span>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

export default Indexes;
