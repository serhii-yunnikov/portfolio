import { Box, styled } from '@mui/material';

const AboutContainer = styled(Box)(({theme}) => ({
  height: '100vh',
  margin: '0 20px 0 20px',
  paddingTop: theme.spacing(10),
  transition: 'all 1',
  color: '#1d1d1f',
}));

const PictureContainer = styled(Box)({
  float: 'right',
  width: '200px'
});

export {
  AboutContainer,
  PictureContainer,
};
