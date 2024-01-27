import { Expertise } from "../../types/Expertise";
import { AnimatedBlock } from "./AnimatedBlock";
import { ExpertiseIcon } from "./ExpertiseIcon";
import { Grid } from "@mui/material";
import { CardBlock } from "./Styles";

type Props = {
  technologies: Expertise[]
};

export const ExpertiseCard: React.FC<Props> = ({ technologies }) => {
  return (
    <Grid container sx={{ padding: '30px' }}>
      {technologies.map(item => (
        <CardBlock
          key={item.title}
          item
          md={2}
          sm={2}
          lg={2}
          justifyContent="center"
          alignItems="center"
        >
          <AnimatedBlock>
            <ExpertiseIcon
              src={item.src}
              title={item.title}
            />
          </AnimatedBlock>
        </CardBlock>
      ))}
    </Grid>
  );
};
