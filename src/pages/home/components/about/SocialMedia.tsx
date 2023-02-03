import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import IconContainer from '../../../../components/icons/IconContainer';

const SocialMedia = () => (
  <ul className="flex items-center rounded-t-none rounded-b-2xl p-4 gap-1 justify-center">
    <IconContainer>
      <FacebookOutlined style={{ fill: 'white' }} />
    </IconContainer>
    <IconContainer>
      <Twitter style={{ fill: 'white' }} />
    </IconContainer>
    <IconContainer>
      <LinkedIn style={{ fill: 'white' }} />
    </IconContainer>
    <IconContainer>
      <Instagram style={{ fill: 'white' }} />
    </IconContainer>
  </ul>
);

export default SocialMedia;
