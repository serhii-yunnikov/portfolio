import {
  Typography,
  Toolbar,
  Avatar,
  AppBar,
  Tooltip,
} from "@mui/material";
import avatar from '../assets/images/ava.jpeg';
import Button from "@material-ui/core/Button";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Expertise',
    href: '#expertise',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contacts',
    href: '#contacts',
  }
];

export const Header: React.FC = () => {

  return (
    <AppBar
      sx={{
        zIndex: '3',
        opacity: 0.9,
        height: 55,
        borderRadius: '16px',
        backgroundColor: '#fbfbfdcc',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        border: '1px solid rgba(255, 255, 255, 0.24)',
        transition: 'background 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)',
        transitionProperty: 'background, backdrop-filter, -webkit-backdrop-filter',
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
          {/* <div className="avatar"> */}
            <Tooltip title="Serhii" arrow>
              <Avatar
                alt="Serhii"
                src={avatar}
                sx={{
                  width: 40,
                  '&:hover': {
                    transform: 'translate(-60px, 40px) scale(3)',
                    transition: 'transform 2s ease-out',
                  }
                }}
              />
            </Tooltip>
          {/* </div> */}
    
      </Toolbar>
    </AppBar>
  );
};
