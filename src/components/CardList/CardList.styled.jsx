import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
`;
export const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const LoadWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0;
`;
export const LoadMore = styled.button`
  padding: 15px 35px;
  background-color: #5736a3;
  color: #fff;
  border-radius: 10px;
  outline: none;

  font-size: 20px;
  transition: all 300ms ease;

  cursor: pointer;

  :hover {
    padding: 15px 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  button {
    margin-right: 10px;
    padding: 5px 10px;

    background-color: #5736a3b9;
    border-radius: 5px;
    outline: none;

    font-size: 20px;
    color: #fff;
    transition: all 300ms ease;

    cursor: pointer;

    color: #fff;
    text-decoration: none;

    :hover {
      background-color: #5736a3;
      /* padding: 15px 40px; */
    }
  }
`;
