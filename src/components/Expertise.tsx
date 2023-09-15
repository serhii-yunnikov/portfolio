import { Box } from "@mui/material";
import { leftExpertise, rightExpertise } from "../api/api";
import { ExpertiseCard } from "./ExpertiseCard";

export const Expertise: React.FC = () => {
  return (
    <section className="section" id="expertise">
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <ExpertiseCard technologies={leftExpertise} />
        <ExpertiseCard technologies={rightExpertise} />
      </Box>
    </section>
  );
};
