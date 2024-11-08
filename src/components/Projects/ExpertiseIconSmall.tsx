import { Expertise } from "../../types/Expertise";
import { ModButton } from "./Styles";



const ExpertiseIconSmall: React.FC<Expertise> = ({ src, title }) => {
  const imageSrc = `${import.meta.env.BASE_URL}icons/${src}.svg`;

  return (
    <ModButton
      variant="outlined"
      size="small"
      startIcon={
        <img src={imageSrc} alt={title} />
      }
      href="#file-upload"
    >
      {title}
    </ModButton>
  );
};

export default ExpertiseIconSmall;
