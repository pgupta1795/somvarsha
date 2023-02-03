import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import FunctionsIcon from '@mui/icons-material/Functions';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Insurance from '../../../../assets/img/insurance.jpg';
import MF from '../../../../assets/img/mf.jpg';
import Stock from '../../../../assets/img/stock.jpg';
import BulletDescription from '../../../../components/BulletDescription';
import ImageCard from '../../../../components/card/ImageCard';
import Constants from '../../../../helper/Constants';
import SectionContainer from '../container/SectionContainer';

const Services = () => (
  <SectionContainer id={Constants.SERVICES.id} name={Constants.SERVICES.name}>
    <ul className="list-none mx-auto mt-12 flex flex-col sm:flex-row items-stretch gap-8">
      <ImageCard
        heading="Mutual Funds"
        icon={<FunctionsIcon />}
        imageSrc={MF}
        subheading="Consultancy & Investment"
        description={<BulletDescription content={Constants.contentMF} />}
      />
      <ImageCard
        heading="Stock Market"
        icon={<CandlestickChartIcon />}
        imageSrc={Stock}
        subheading="Consultancy & Investment"
        description={<BulletDescription content={Constants.contentStocks} />}
      />
      <ImageCard
        heading="Life Insurance"
        icon={<HealthAndSafetyIcon />}
        imageSrc={Insurance}
        subheading="Insurances, Policies & Tax Planning"
        description={<BulletDescription content={Constants.contentInsurance} />}
      />
    </ul>
  </SectionContainer>
);

export default Services;
