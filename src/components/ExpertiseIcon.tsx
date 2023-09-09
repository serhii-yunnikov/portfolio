import { Button, Tooltip, styled } from "@material-ui/core";
// import reactSvg from '../assets/icons/react.svg';
import { Expertise } from "../types/Expertise";


const ModButton = styled(Button) ({
  width: '60px',
  height: '60px',
  transition: '0.3s ease-out',
  backgroundColor: '#E6E6E6',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  borderRadius: '12px',
  boxShadow: '0 10px 15px rgb(0 0 0 / 20%)',
  '& .MuiButton-startIcon': {
    margin: '0',
    '& .imageIcon': {
      height: '50px',
      width: '50px',
      objectFit: 'contain'
    }
  },
  '&:hover': {
    transform: 'scale(1.3)'
  }
});

export const ExpertiseIcon: React.FC<Expertise> = ({ src, title }) => {

  return (
    <Tooltip
      title={title}
      placement="top"
      arrow
    >
      <ModButton
        startIcon={
          <img className="imageIcon" src={`../assets/icons/${src}.svg`} />
        }
      />
    </Tooltip>
  );
};
