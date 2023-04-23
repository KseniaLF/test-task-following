import { useState } from "react";
import {
  BorderLine,
  Button,
  CardHeader,
  CardWrapper,
  Info,
  Stats,
  UserImg,
  UserWrapper,
} from "./Card.styled";

import user from "../../images/boy.png";

export const Card = () => {
  const [isFollow, setIsFollow] = useState(false);
  const [followers, setFollowers] = useState(100500);

  const handleToggle = () => {
    setIsFollow(!isFollow);

    if (!isFollow) {
      setFollowers((prev) => prev + 1);
    } else {
      setFollowers((prev) => prev - 1);
    }
  };

  return (
    <CardWrapper>
      <CardHeader>
        <span></span>
      </CardHeader>

      <UserWrapper>
        <BorderLine />

        <UserImg>
          <img src={user} alt="" />
        </UserImg>
      </UserWrapper>

      <Info>
        <Stats>
          <p>777 tweets</p>
          <p>{followers} Followers</p>
        </Stats>
        <Button type="button" onClick={handleToggle} primary={isFollow}>
          {isFollow ? "Following" : "Follow"}
        </Button>
      </Info>
    </CardWrapper>
  );
};
