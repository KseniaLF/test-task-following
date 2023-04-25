import styled from "styled-components";

import headerCard from "../../images/card-header.png";

export const CardWrapper = styled.li`
  width: 380px;
  height: 460px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  span {
    outline: none;
    display: block;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 36px;
`;

export const UserWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const UserImg = styled.span`
  border-radius: 50%;

  position: absolute;
  height: 100px;
  background-color: #5736a3;

  top: -50px;
  left: 37%;
  @media (max-width: 450px) {
    left: 35%;
  }

  width: 80px;
  height: 80px;

  border: 10px solid #ebd8ff;

  ::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }

  img {
    border-radius: 50%;
  }
`;

export const CardHeader = styled.div`
  padding: 20px 40px 0 40px;

  span {
    width: 100%;
    height: 168px;

    background-image: url(${headerCard});
    background-size: contain;
    background-position: center;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Button = styled.button`
  width: 196px;
  border: none;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  padding: 14px 28px;

  font-size: 18px;
  text-transform: uppercase;

  background: ${({ primary }) => (primary ? "#5CD3A8" : "#EBD8FF")};
`;
