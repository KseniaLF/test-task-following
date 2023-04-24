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
  const value = JSON.parse(localStorage.getItem("folow"));

  // console.log(value && value[id]);
  // console.log(value[id]);
  if (value && value[id]) {
    // console.log(value.id);
    return true;
  } else {
    // if (value) {
    //   delete value[id];
    //   localStorage.setItem("folow", JSON.stringify(value));
    // }
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
    const value = JSON.parse(localStorage.getItem("folow"));
    localStorage.setItem(
      `folow`,
      JSON.stringify({ ...value, [userId]: !isFollow })
    );
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
