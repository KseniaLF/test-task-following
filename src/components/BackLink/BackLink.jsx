import { Link } from "react-router-dom";
import styled from "styled-components";

const Back = styled(Link)`
  text-decoration: none;
  padding: 10px 50px;

  border-radius: 5px;
  outline: none;

  font-size: 20px;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;

  transition: all 300ms ease;
  cursor: pointer;

  :hover {
    letter-spacing: 4px;
  }
`;
export const BackLink = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Back to="/">{"<"} Back </Back>
    </div>
  );
};
