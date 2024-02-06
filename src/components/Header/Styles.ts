import { AppBar, Avatar, Toolbar, styled } from '@mui/material';

const HeaderBar = styled(AppBar)({
  zIndex: '3',
  height: '55px',
  borderRadius: '1rem',
  backgroundColor: '#ffffff7d',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  border: '1px solid rgba(255, 255, 255, 0.24)',
  transition: 'background 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)',
  transitionProperty: 'background, backdrop-filter, -webkit-backdrop-filter',
  boxShadow: '0 10px 15px rgb(0 0 0 / 20%)',
});

const MyAvatar = styled(Avatar)({
  width: '40px',
  transition: 'transform 1s ease',
  '&:hover': {
    transform: 'translate(-20px, 30px) scale(3)'
  }
});

const Menu = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '300px',
});

export { HeaderBar, MyAvatar, Menu };
