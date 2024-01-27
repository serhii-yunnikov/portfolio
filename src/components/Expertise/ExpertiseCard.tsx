import { Expertise } from "../../types/Expertise";
import { AnimatedBlock } from "./AnimatedBlock";
import { ExpertiseIcon } from "./ExpertiseIcon";
import { Box, Grid } from "@mui/material";

type Props = {
  technologies: Expertise[]
};

export const ExpertiseCard: React.FC<Props> = ({ technologies }) => {
  return (
    <Box sx={{
      display: 'flex',
    }}>
      <Grid container spacing={3} sx={{ padding: '30px' }}>
        {technologies.map(item => (
          <Grid
            key={item.title}
            item
            md={2}
            sm={2}
            lg={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <AnimatedBlock>
              <ExpertiseIcon
                src={item.src}
                title={item.title}
              />
            </AnimatedBlock>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
