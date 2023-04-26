import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 35px;

  h1 {
    margin-bottom: 30px;
  }
`;

export const LinkTo = styled(Link)`
  padding: 15px 35px;
  background-color: #5736a3;
  border-radius: 10px;
  outline: none;

  font-size: 20px;
  color: #fff;
  transition: all 300ms ease;

  cursor: pointer;

  color: #fff;
  text-decoration: none;

  :hover {
    padding: 15px 40px;
  }
`;
