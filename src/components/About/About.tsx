import LottiePlayer from '../LottiePlayer';
import animation from '../../assets/animations/animation_1.json';
import ReactTyped from 'react-typed';
import { Box, Typography } from '@mui/material';
import { text } from './constants';


export const About: React.FC = () => {
  return (
    <section className="section section__about" id="about">
      <Box>
        <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>
          About.
        </Typography>
        <Box sx={{ float: "right", width: '200px'}}>
          <LottiePlayer animationData={animation} style={{ width: '100%', height: '100%' }} />
        </Box>
        <Typography align="justify" sx={{ typography: { sm: 'h6', md: 'h5', lg: 'h4' } }}>
          <ReactTyped strings={[text]} typeSpeed={20} style={{ color: 'rgb(134, 134, 139)' }} />
        </Typography>
      </Box>
    </section>
  );
};
