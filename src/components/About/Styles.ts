import { Box, Typography, styled } from '@mui/material';

const AboutContainer = styled(Box)(({theme}) => ({
  height: '100vh',
  margin: '0 20px 0 20px',
  //paddingTop: '80px',
  paddingTop: theme.spacing(5),
  transition: 'all 1',
  color: '#1d1d1f',
}));

const Title = styled(Typography)(({theme}) => ({
  fontSize: 'h1',

  [theme.breakpoints.down('md')]: {fontSize: 'h2'},
  [theme.breakpoints.down('sm')]: {fontSize: 'h3'}
}));

export {AboutContainer, Title};
