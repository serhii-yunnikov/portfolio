import {
  Typography,
  Button,
} from '@mui/material';
import avatar from '/images/ava.jpeg';
import { navLinks } from './constants';
import { HeaderBar, Menu, MyAvatar } from './Styles';

const Header: React.FC = () => {

  return (
    <HeaderBar>
      <Menu>
        <Typography
          variant='h4'
          justifyContent='center'
          gap='40px'
        >
          {navLinks.map((link) => {
            return (
              <Button
                key={link.label}
                href={link.href}
              >
                {link.label}
              </Button>
            );
          })}
        </Typography>
          <MyAvatar
            alt='Serhii'
            src={avatar}
          />
      </Menu>
    </HeaderBar>
  );
};

export default Header;
