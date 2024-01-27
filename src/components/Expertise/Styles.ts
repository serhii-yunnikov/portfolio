import { Box, Grid, styled } from '@mui/material';

const ExpertiseContainer = styled(Box)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const CardBlock = styled(Grid)({
  display: 'flex',
  padding: '24px'
});

export {
  ExpertiseContainer,
  CardBlock
};
