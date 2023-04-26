import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "../../constants/Layout.styled";
import { Loader } from "../Loader";
import { Header, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <span>
          <span role="img" aria-label="computer icon">
            💜
          </span>{" "}
          FollowMe
        </span>

        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
