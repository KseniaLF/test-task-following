import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { fetchContacts } from "../../fetch/fetch";
import {
  ListWrapper,
  LoadMore,
  LoadWrapper,
  MainWrapper,
} from "./CardList.styled";
import { Loader } from "../Loader";
import { BackLink } from "../BackLink/BackLink";

export const CardList = () => {
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const maxPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await fetchContacts(page);

        if (page === 1) {
          setUsersData(data);
        } else {
          setUsersData((prev) => [...prev, ...data]);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
      <BackLink />

      <MainWrapper>
        <ListWrapper>
          {usersData.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </ListWrapper>

        <LoadWrapper>
          {isLoading && <Loader />}

          {!isLoading && page !== maxPage && (
            <LoadMore type="button" onClick={() => setPage((prev) => prev + 1)}>
              Load more
            </LoadMore>
          )}
        </LoadWrapper>
      </MainWrapper>
    </>
  );
};
