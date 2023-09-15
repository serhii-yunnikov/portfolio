import { styled } from "@material-ui/core";
import { Expertise } from "../types/Expertise";
import Button from "@mui/material/Button";

const ModButton = styled(Button)({
  margin: '0',
  padding: '0',
  outlineColor: 'rgb(199, 208, 221)',
  outlineStyle: 'none',
  textAlign: 'left',
  display: 'inline-flex',
  height: '24px',
  fontSize: '13px',
  justifyContent: 'center',
  gap: '5px',
  lineHeight: '19px',
  transition: '0.3s ease-out',
  backgroundColor: '#E6E6E6',
  opacity: '0.8',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  borderRadius: '12px',
  '& .MuiButton-startIcon': {
    margin: '0',
    '& .imageIcon': {
      height: '16px',
      width: '16px',
      objectFit: 'contain'
    }
  },
  '&:hover': {
    backgroundColor: '#E6E6E6',
  }
});

export const ExpertiseIconSmall: React.FC<Expertise> = ({ src, title }) => {
  const imageSrc = `/src/assets/icons/${src}.svg`;

  return (
    <ModButton
      // variant="contained"
      variant="outlined"
      size="small"
      startIcon={
        <img className="imageIcon" src={imageSrc} alt={title} />
      }
      href="#file-upload"
    >
      {title}
    </ModButton>
  );
};
