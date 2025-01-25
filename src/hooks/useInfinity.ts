import { useState, useEffect, useRef } from 'react';

import {
  blogPostMetaDataInterface,
  blogPostListInterface,
} from '@gdg/types/UserInterface';

const useInfinity = (
  category: string,
  fetchData: (
    category: string,
    page: number,
    size: number
  ) => Promise<blogPostListInterface>
) => {
  const [page, setPage] = useState<number>(0);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<blogPostMetaDataInterface[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isPending) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDataAsync = async () => {
    if (!hasNext) return;

    setIsPending(true);
    try {
      const newData = await fetchData(category, page, 4);
      setData((prevData) => [...prevData, ...newData.data]);
      setHasNext(newData.hasNext);
    } catch (error) {
      setIsError(true);
      setError(error as Error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchDataAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { observerRef, data, isPending, hasNext, isError, error };
};

export default useInfinity;
