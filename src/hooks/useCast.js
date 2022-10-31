import { useEffect, useState } from 'react';

const useCast = ([cast]) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(cast?.slice(0, 8));
  }, [cast]);
  return (data);
};

export default useCast;
