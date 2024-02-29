import LottiePlayer from './LottiePlayer';
import animation from '../../assets/animations/animation_1.json';
import ReactTyped from 'react-typed';
import { Divider, Typography } from '@mui/material';
import { aboutTextStyle, lottieStyle, text } from './constants';
import { BlockContainer, PictureContainer } from './Styles';

const About: React.FC = () => {
  return (
    <BlockContainer id="about">
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>About.</Typography>
      <Divider orientation="horizontal" />
      <PictureContainer>
        <LottiePlayer animationData={animation} style={lottieStyle} />
      </PictureContainer>
      <Typography align="justify" sx={{ typography: { sm: 'h6', md: 'h5', lg: 'h4' } }}>
      <ReactTyped strings={[text]} typeSpeed={20} style={aboutTextStyle} />
      </Typography>
    </BlockContainer>
  );
};

export default About;
