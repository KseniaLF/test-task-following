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

const getInitialValue = (id) => {
  const followData = JSON.parse(localStorage.getItem("follow"));

  if (followData && followData.includes(id)) {
    return true;
  } else {
    return false;
  }
};

const getInitialFollovers = (follovers, isFollow) => {
  if (isFollow) {
    return follovers + 1;
  } else return follovers;
};

export const Card = ({ user }) => {
  const [isFollow, setIsFollow] = useState(getInitialValue(user.id));

  const [followers, setFollowers] = useState(
    getInitialFollovers(user.followers, isFollow)
  );
  const formattedNumber = followers.toLocaleString();

  const handleToggle = () => {
    setIsFollow(!isFollow);

    if (!isFollow) {
      setFollowers((prev) => prev + 1);
    } else {
      setFollowers((prev) => prev - 1);
    }

    const userId = user.id;
    const followData = JSON.parse(localStorage.getItem("follow"));

    if (followData) {
      if (followData.includes(userId)) {
        const filteredFollow = followData.filter((item) => item !== userId);
        localStorage.setItem(`follow`, JSON.stringify(filteredFollow));
      } else
        localStorage.setItem(`follow`, JSON.stringify([...followData, userId]));
    } else localStorage.setItem(`follow`, JSON.stringify([userId]));
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
