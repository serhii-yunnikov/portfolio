import React from 'react';
import { Divider, List } from '@mui/material';
import Typography from '@mui/material/Typography';
import { BlockContainer } from '../About/Styles';
import { contacts } from './constants';
import ContacstItem from './ContactsItem';


const Contacts: React.FC = () => {
  return (
    <BlockContainer id="contacts">
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>
        Contacts.
      </Typography>
      <Divider orientation="horizontal" />
      <List sx={{ maxWidth: 320 }}>
        {contacts.map((contact, index) => (
          <ContacstItem
            key={index}
            icon={<contact.icon />}
            label={contact.label}
            href={contact.href}
          />
        ))}
      </List>
    </BlockContainer>
  );
};

export default Contacts;
