import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const getData = async () => {
    setDataFetch({
      data: null,
      loading: true,
      error: null,
    });
    const { data } = await axios(url);
    setDataFetch({
      data,
      loading: false,
      error: null,
    });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return dataFetch;
};

export default useFetch;
