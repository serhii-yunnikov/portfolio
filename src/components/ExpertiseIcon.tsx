import { Button } from "@material-ui/core";
import Icon from "@mui/material/Icon";

const react = '../assets/icons/react.svg';

export const ExpertiseIcon: React.FC = () => {
  return (
    <Button
      // sx={{ width: '60px', height: '60px' }}
      startIcon={
        <Icon>
          <img src={react} height={60} width={60}/>
        </Icon>
      }
    />
  );
};
