import { HomeWrapper, LinkTo } from "../components/Home/Home.styled";

import Lottie from "lottie-react";

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to our Twitter Users site!</h1>

      <div>
        <LinkTo to="/tweets">Find Twitter users 💜</LinkTo>
      </div>

      <Lottie
        path="https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json"
        loop={true}
        autoplay={true}
        style={{ width: 500 }}
      />
    </HomeWrapper>
  );
};

export default Home;
