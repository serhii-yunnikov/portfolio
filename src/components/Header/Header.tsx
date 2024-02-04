import {
  Typography,
  Toolbar,
  Avatar,
  AppBar
} from "@mui/material";
import avatar from '../../assets/images/ava.jpeg';
import Button from "@material-ui/core/Button";
import { navLinks } from "./constants";

// type NavLink = {
//   label: string;
//   href: string;
// };

// const navLinks: NavLink[] = [
//   {
//     label: 'About',
//     href: '#about',
//   },
//   {
//     label: 'Expertise',
//     href: '#expertise',
//   },
//   {
//     label: 'Projects',
//     href: '#projects',
//   },
//   {
//     label: 'Contacts',
//     href: '#contacts',
//   }
// ];

export const Header: React.FC = () => {

  return (
    <AppBar
      sx={{
        zIndex: '3',
        height: 55,
        borderRadius: '16px',
        backgroundColor: '#ffffff7d',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.24)',
        transition: 'background 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)',
        transitionProperty: 'background, backdrop-filter, -webkit-backdrop-filter',
        boxShadow: '0 10px 15px rgb(0 0 0 / 20%)'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '300px',
        }}
      >
        <Typography
          variant="h4"
          display="flex"
          justifyContent="center"
          gap="40px"
        >
          {navLinks.map((link) => {
            // const isActive = pathname === link.href;

            return (
              <Button
                key={link.label}
                href={link.href}
                // className={isActive ? "active" : ""}
              >
                {link.label}
              </Button>
            );
          })}
        </Typography>
          <Avatar
            alt="Serhii"
            src={avatar}
            sx={{
              width: 40,
              transition: 'transform 1s ease',
              '&:hover': {
                transform: 'translate(-20px, 30px) scale(3)'
              }
            }}
          />
      </Toolbar>
    </AppBar>
  );
};
