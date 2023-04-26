import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { fetchContactById, fetchContacts } from "../../fetch/fetch";
import {
  Wrapper,
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
  const [filter, setFilter] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const maxPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setShowLoadMore(true);

        if (!filter) {
          const data = await fetchContacts(page);

          if (page === 1) {
            setUsersData(data);
          } else {
            setUsersData((prev) => [...prev, ...data]);
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [filter, page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (filter) {
          const followData = JSON.parse(localStorage.getItem("follow"));

          const length = followData.length;
          if (length) {
            if (length <= page * 3) {
              setShowLoadMore(false);
            } else {
              setShowLoadMore(true);
            }
          }

          const threeElems = followData.slice(
            (page - 1) * 3,
            (page - 1) * 3 + 3
          );

          for (let i = 0; i < 3; i++) {
            if (threeElems[i]) {
              const data = await fetchContactById(threeElems[i]);

              if (i === 0 && page === 1) {
                setUsersData([data]);
              } else {
                setUsersData((prev) => [...prev, data]);
              }
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [filter, page]);

  const handleFollow = () => {
    setPage(1);
    setFilter("follow");
  };

  const handleAll = () => {
    setPage(1);
    setFilter(false);
  };

  return (
    <>
      <Wrapper>
        <BackLink />
        <div>
          {" "}
          <button type="button" onClick={handleAll}>
            show all
          </button>
          <button type="button" onClick={handleFollow}>
            show following
          </button>
        </div>
      </Wrapper>

      <MainWrapper>
        <ListWrapper>
          {usersData.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </ListWrapper>

        <LoadWrapper>
          {isLoading && <Loader />}

          {!isLoading && page !== maxPage && showLoadMore && (
            <LoadMore type="button" onClick={() => setPage((prev) => prev + 1)}>
              Load more
            </LoadMore>
          )}
        </LoadWrapper>
      </MainWrapper>
    </>
  );
};
