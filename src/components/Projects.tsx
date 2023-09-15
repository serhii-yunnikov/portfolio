import { Carroussel } from "./Carroussel";
import { v4 as uuidv4 } from "uuid";
import { CardType } from '../types/CardType';
import CardItem from "./CardItem";

const cards: CardType[] = [
  {
    key: uuidv4(),
    content: <CardItem />
  },
  {
    key: uuidv4(),
    content: <CardItem />
  },
  {
    key: uuidv4(),
    content: <CardItem />
  },
  {
    key: uuidv4(),
    content: <CardItem />
  },
  {
    key: uuidv4(),
    content: <CardItem />
  },
  {
    key: uuidv4(),
    content: <CardItem />
  },
  {
    key: uuidv4(),
    content: <CardItem />
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="section" id="projects">
      <Carroussel
        cards={cards}
        height="500px"
        width="800px"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </section>
  );
};
