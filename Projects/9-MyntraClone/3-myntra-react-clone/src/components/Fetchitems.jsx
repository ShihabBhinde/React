import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning p UseEffect");
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        Fetch Done : {fetchStatus.fetchDone}
        Currently Fetching : {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItems;
