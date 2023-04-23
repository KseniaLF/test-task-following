import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { fetchContacts } from "../../fetch/fetch";
import { ListWrapper } from "./CardList.styled";

export const CardList = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchContacts();
        console.log(data);
        setUsersData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ListWrapper>
      {usersData.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </ListWrapper>
  );
};
