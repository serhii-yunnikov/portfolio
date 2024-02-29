import { Divider, Typography } from "@mui/material";
import { expertiseItems } from "../../api/api";
import { ExpertiseCard } from "./ExpertiseCard";
import { BlockContainer } from "../About/Styles";
import { ExpertiseContainer } from "./Styles";

const Expertise: React.FC = () => {
  return (
    <BlockContainer id="expertise">
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>
        Expertise.
      </Typography>
      <Divider orientation="horizontal" />
      <ExpertiseContainer>
        <ExpertiseCard technologies={expertiseItems} />
      </ExpertiseContainer>
    </BlockContainer>
  );
};

export default Expertise;
