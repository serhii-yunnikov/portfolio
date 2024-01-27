import { v4 as uuidv4 } from "uuid";
import { CardType } from '../../types/CardType';
import CardItem from "./CardItem";
import { projects } from "../../api/api";
import { Carroussel } from "./Carroussel";
import { Grid, Typography } from "@mui/material";


const cards: CardType[] = projects.map(item => ({
  key: uuidv4(),
  content: <CardItem {...item} />
}));

export const Projects: React.FC = () => {
  return (
    <section className="section" id="projects">
      <Typography sx={{ typography: { sm: 'h3', md: 'h2', lg: 'h1' } }}>
        Projects.
      </Typography>
      <Grid container sx={{ width: '70%', margin: 'auto' }}>
        <Carroussel
          cards={cards}
          height="500px"
          width="100%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </Grid>
    </section>
  );
};
