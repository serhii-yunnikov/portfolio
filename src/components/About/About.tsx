import LottiePlayer from './LottiePlayer';
import animation from '../../assets/animations/animation_1.json';
import ReactTyped from 'react-typed';
import { Typography } from '@mui/material';
import { aboutTextStyle, lottieStyle, text } from './constants';
import { AboutContainer, PictureContainer } from './Styles';

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>About</Typography>
      <PictureContainer>
        <LottiePlayer animationData={animation} style={lottieStyle} />
      </PictureContainer>
      <Typography align="justify" sx={{ typography: { sm: 'h6', md: 'h5', lg: 'h4' } }}>
      <ReactTyped strings={[text]} typeSpeed={20} style={aboutTextStyle} />
      </Typography>
    </AboutContainer>
  );
};
