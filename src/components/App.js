import { Container } from "../constants/Layout.styled";
import { Card } from "./Card/Card";

const App = () => {
  return (
    <Container>
      <header>
        <h1>Follow me</h1>
      </header>
      <div>
        <Card />
      </div>
    </Container>
  );
};

export default App;
