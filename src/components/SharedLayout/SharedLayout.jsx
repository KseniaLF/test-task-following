import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { Container } from "../../constants/Layout.styled";
import { Loader } from "../Loader";
import { Header, StyledLink, Logo } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💜
          </span>{" "}
          <Link to="/"> FollowMe</Link>
        </Logo>

        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
