import { Box, Button, CardHeader, Container, styled } from "@mui/material";

const CardContainer = styled(Box)({
  width: '350px',
  height: 'fit-content',
  WebkitBackdropFilter: 'blur(30px)',
  backgroundColor: '#E6E6E6',
  borderRadius: '10px',
  '&:hover': {
    transition: 'scale 0.4s ease-out',
  },
});

const ImageContainer = styled(Container)({
  width: '100%',
  height: '200px',
  '& img': {
    objectFit: 'contain',
    width: '100%',
    height: '100%'
  }
});

const Header = styled(CardHeader)({
  '& a': {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  '& a:hover': {
    transform: 'scale(1.3)',
    transition: 'transform 0.4s ease-out',
  },
});

const ModButton = styled(Button)({
  display: 'inline-flex',
  padding: '5px',
  textAlign: 'left',
  height: '24px',
  fontSize: '13px',
  justifyContent: 'center',
  gap: '3px',
  lineHeight: '19px',
  transition: '0.3s ease-out',
  opacity: '0.8',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  borderRadius: '12px',
  '& .MuiButton-startIcon': {
    margin: '0',
    height: '16px',
    width: '16px',
    objectFit: 'contain'
  },
});

export {ModButton, CardContainer, ImageContainer, Header};
