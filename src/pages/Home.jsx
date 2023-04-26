import { Button, HomeWrapper } from "../components/Home/Home.styled";

import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to our Twitter Users site!</h1>

      <div>
        <Button type="button">
          <Link to="/tweets">Find Twitter users you may know 💜</Link>
        </Button>
      </div>

      <Lottie
        path="https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json"
        loop={true}
        autoplay={true}
        style={{ width: 600 }}
      />
    </HomeWrapper>
  );
};

export default Home;
