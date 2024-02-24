import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://localhost:5173/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log("items fetched", items);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
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
