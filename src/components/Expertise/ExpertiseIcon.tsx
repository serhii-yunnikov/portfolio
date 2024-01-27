import { Button, Tooltip, styled } from "@material-ui/core";
import { Expertise } from "../../types/Expertise";

const ModButton = styled(Button)({
  width: '90px',
  height: '90px',
  transition: '0.3s ease-out',
  backgroundColor: '#E6E6E6',
  opacity: '0.8',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  borderRadius: '12px',
  boxShadow: '0 10px 15px rgb(0 0 0 / 20%)',
  lineHeight: '15px',
  fontSize: '12px',
  fontWeight: 'bold',
  '& .MuiButton-label': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '5px',
  },
  '& .MuiButton-startIcon': {
    margin: '0',
    '& .imageIcon': {
      height: '50px',
      width: '50px',
      objectFit: 'contain'
    }
  },
  '&:hover': {
    transform: 'scale(1.2)',
    backgroundColor: '#E6E6E6',
  }
});

export const ExpertiseIcon: React.FC<Expertise> = ({ src, title }) => {
  const imageSrc = `/src/assets/icons/${src}.svg`;

  return (
    <Tooltip
      title={title}
      placement="top"
      arrow
    >
      <ModButton
        startIcon={
          <img className="imageIcon" src={imageSrc} alt={title} />
        }
      >
        {title}
      </ModButton>
    </Tooltip>
  );
};
