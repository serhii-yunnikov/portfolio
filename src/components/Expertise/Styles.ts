import {
  Box,
  Button,
  Grid,
  styled,
} from '@mui/material';

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

const ModButton = styled(Button)(({theme}) => ({
    flexDirection: 'column',
    width: '90px',
    height: '90px',
    transition: '0.3s ease-out',
    backgroundColor: theme.palette.background.grey,
    opacity: '0.8',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    borderRadius: '0.85rem',
    boxShadow: '0 10px 15px rgb(0 0 0 / 20%)',
    lineHeight: '15px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '5px',
    },
    '& .MuiButton-startIcon': {
      margin: '0',
      '& .imageIcon': {
        height: '50px',
        width: '50px',
        objectFit: 'contain'
      }
    },
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: theme.palette.background.grey,
    }
  }));

export {
  ExpertiseContainer,
  CardBlock,
  ModButton
};
