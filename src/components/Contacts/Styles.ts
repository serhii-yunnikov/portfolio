import { ListItemDecorator } from "@mui/joy";
import { Box, ListItem, styled } from "@mui/material";

const ContactsItem = styled(ListItem)({
  display: 'flex',
  maxWidth: '360px',
  gap: '32px'
});

const IconContainer = styled(ListItemDecorator)(({theme}) => ({
  marginRight: theme.spacing(1.8),
}));

const Label = styled(Box)(({theme}) => ({
  display: 'flex',
  marginLeft: theme.spacing(1.8),
}));

export {
  IconContainer,
  ContactsItem,
  Label
};
