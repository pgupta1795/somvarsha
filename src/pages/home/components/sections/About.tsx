import SectionCard from '../../../../components/card/SectionCard';
import Constants from '../../../../helper/Constants';
import AboutMe from '../about/AboutMe';
import Experience from '../about/Experience';
import SocialMedia from '../about/SocialMedia';
import UserImage from '../about/UserImage';
import SectionContainer from '../container/SectionContainer';

const About = () => (
  <SectionContainer id={Constants.ABOUT.id} name={Constants.ABOUT.name}>
    <SectionCard>
      <div className="text-center">
        <UserImage />
        <AboutMe />
        <Experience />
      </div>
      <SocialMedia />
    </SectionCard>
  </SectionContainer>
);

export default About;
