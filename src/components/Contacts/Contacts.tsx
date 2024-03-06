import React from 'react';
import { Divider, List } from '@mui/material';
import Typography from '@mui/material/Typography';
import { BlockContainer } from '../About/Styles';
import { contacts } from './constants';
import ContacstItem from './ContactsItem';


const Contacts: React.FC = () => {
  return (
    <BlockContainer id="contacts" sx={{height: '400px'}}>
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>
        Contacts.
      </Typography>
      <Divider orientation="horizontal" />
      <List>
        {contacts.map((contact) => {
          const {icon, label, href} = contact;
          return (
            <ContacstItem
              key={label}
              icon={React.createElement(icon)}
              label={label}
              href={href}
            />
        )})}
      </List>
    </BlockContainer>
  );
};

export default Contacts;
