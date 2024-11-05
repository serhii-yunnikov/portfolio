
import { Tooltip } from "@mui/material";
import { Expertise } from "../../types/Expertise";
import { ModButton } from "./Styles";

export const ExpertiseIcon: React.FC<Expertise> = ({ src, title }) => {
  const imageSrc = `src/assets/icons/${src}.svg`;

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
