import { Carroussel } from './components/Carroussel';
import CardItem from './components/CardItem';
import { v4 as uuidv4 } from "uuid";
import { CardType } from './types/CardType';

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

function App() {
  return (
    <Carroussel
      cards={cards}
      height="500px"
      width="90%"
      margin="0 auto"
      offset={2}
      showArrows={false}
    />
  )
}

export default App;
