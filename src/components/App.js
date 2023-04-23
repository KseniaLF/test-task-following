import { Container } from "../constants/Layout.styled";
import { CardList } from "./CardList/CardList";

const App = () => {
  return (
    <Container>
      <header>
        <h1>Follow me</h1>
      </header>
      <div>
        <CardList />
      </div>
    </Container>
  );
};

export default App;
