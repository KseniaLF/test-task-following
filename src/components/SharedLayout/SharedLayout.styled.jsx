import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  nav {
    display: flex;
    gap: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 6px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    color: white;
    background-color: #5736a3;
  }
`;
