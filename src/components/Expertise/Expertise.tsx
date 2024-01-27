import { Box, Typography } from "@mui/material";
import { expertiseItems } from "../../api/api";
import { ExpertiseCard } from "./ExpertiseCard";

export const Expertise: React.FC = () => {
  return (
    <section className="section" id="expertise">
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>
        Expertise.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <ExpertiseCard technologies={expertiseItems} />
      </Box>
    </section>
  );
};
