import { Divider, ListItemButton } from '@mui/material';
import { ContactsItem, IconContainer, Label } from './Styles';

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
    <ContactsItem>
      <ListItemButton selected href={href}>
        <IconContainer>
          {icon}
        </IconContainer>
        <Divider orientation="vertical" flexItem />
        <Label>{label}</Label>
      </ListItemButton>
    </ContactsItem>
  );
};

export default ContacstItem;
