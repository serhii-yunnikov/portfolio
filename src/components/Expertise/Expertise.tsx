import { Typography } from "@mui/material";
import { expertiseItems } from "../../api/api";
import { ExpertiseCard } from "./ExpertiseCard";
import { BlockContainer } from "../About/Styles";
import { ExpertiseContainer } from "./Styles";

export const Expertise: React.FC = () => {
  return (
    <BlockContainer id="expertise">
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>
        Expertise.
      </Typography>
      <ExpertiseContainer>
        <ExpertiseCard technologies={expertiseItems} />
      </ExpertiseContainer>
    </BlockContainer>
  );
};
