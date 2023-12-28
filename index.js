import { useCallback, useEffect, useRef } from "react";

export default function useInfiniteScroll(
  currentPage,
  setCurrentPage,
  hasMore = false,
  callBackAPI,
  results = []
) {
  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (observer?.current) observer?.current?.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries?.[0]?.isIntersecting && hasMore) {
          setCurrentPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer?.current?.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [results, hasMore]
  );

  useEffect(() => {
    callBackAPI && callBackAPI(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return { lastElementRef };
}
