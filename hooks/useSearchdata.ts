// hooks/useFetchAndSearch.ts
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/helperRedux/helperRedux';
import { handlePuchValue } from '@/slice/slices';

const useFetchAndSearch = (initialParams: Record<string, string>) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.redSlice.arrRouteFly);

  const [params, setParams] = useState(initialParams);
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const queryString = new URLSearchParams(params).toString();
      try {
        const res = await fetch(`http://localhost:3000/api/SearchMainPageFly?${queryString}`);
        const result = await res.json();
        setData(result);
        dispatch(handlePuchValue(result));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params, dispatch]);

  const updateParams = (key: string, value: string) => {
    setParams((prevParams) => ({
      ...prevParams,
      [key]: value,
    }));
  };

  const performSearch = () => {
    const queryString = new URLSearchParams(params).toString();
    const newUrl = queryString ? `/FindFly/FlightList_result?${queryString}` : "/FindFly";
    router.push(newUrl);
  };

  return {
    params,
    data,
    selector,
    updateParams,
    performSearch,
  };
};

export default useFetchAndSearch;
