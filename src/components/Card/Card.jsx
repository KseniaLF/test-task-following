import { useState } from "react";
import {
  Button,
  CardHeader,
  CardWrapper,
  Info,
  Stats,
  UserImg,
  UserWrapper,
} from "./Card.styled";

export const Card = ({ user }) => {
  const [isFollow, setIsFollow] = useState(false);

  const [followers, setFollowers] = useState(user.followers);
  const formattedNumber = followers.toLocaleString();

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
        <UserImg>
          <img src={user.avatar} alt="user" />
        </UserImg>
      </UserWrapper>

      <Info>
        <Stats>
          <p>{user.tweets} tweets</p>
          <p>{formattedNumber} Followers</p>
        </Stats>
        <Button
          type="button"
          onClick={handleToggle}
          primary={isFollow}
          title={user.user}
        >
          {isFollow ? "Following" : "Follow"}
        </Button>
      </Info>
    </CardWrapper>
  );
};
