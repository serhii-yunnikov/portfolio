import React from 'react';
import { ListItem, ListItemButton } from '@mui/material';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

interface Props {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const ContacstItem: React.FC<Props> = ({
  icon,
  label,
  href
}) => {
  return (
    <ListItem>
      <ListItemButton selected href={href}>
        <ListItemDecorator>
          {icon}
        </ListItemDecorator>
        {label}
      </ListItemButton>
    </ListItem>
  );
};

export default ContacstItem;
