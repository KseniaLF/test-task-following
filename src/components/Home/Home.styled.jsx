import styled from "styled-components";

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  text-align: center;
  align-items: center;
  margin-top: 100px;

  h1 {
    margin-bottom: 30px;
  }
`;
export const Button = styled.button`
  padding: 15px 35px;
  background-color: #5736a3;
  border-radius: 10px;
  outline: none;

  font-size: 20px;
  transition: all 300ms ease;

  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
  }

  :hover {
    padding: 15px 40px;
  }
`;
