import { ExpertiseIcon } from "./ExpertiseIcon";
import { Box, Grid } from "@mui/material";
import { Expertise } from "../types/Expertise";

type Props = {
  technologies: Expertise[]
};

export const ExpertiseCard: React.FC<Props> = ({ technologies }) => {
  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: 'rgb(2,0,36)',
    }}>
        <Grid container spacing={2}>
          {technologies.map(item => (
            <Grid item md={6} sm={6} lg={6} display="flex" justifyContent="center" alignItems="center">
              <ExpertiseIcon
                key={item.title}
                src={item.src}
                title={item.title}
              />
            </Grid>
          ))}
        </Grid>
    </Box>
  );
};
