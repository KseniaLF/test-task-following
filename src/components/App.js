import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Home from "../pages/Home";
import Tweets from "../pages/Tweets";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/tweets" element={<Tweets />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
