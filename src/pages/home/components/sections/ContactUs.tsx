import SectionCard from '../../../../components/card/SectionCard';
import Constants from '../../../../helper/Constants';
import Details from '../contact/Details';
import Form from '../contact/Form';
import SectionContainer from '../container/SectionContainer';

const ContactUs = () => (
  <SectionContainer id={Constants.CONTACT.id} name={Constants.CONTACT.name}>
    <SectionCard>
      <div className="grid gap-x-12 gap-y-12 ml-6 mr-6 mt-6 sm:grid-cols-2">
        <Details />
        <Form />
      </div>
    </SectionCard>
  </SectionContainer>
);

export default ContactUs;
