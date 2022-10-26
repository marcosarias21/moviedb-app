import { useEffect, useState } from 'react';

const useCast = ([cast]) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(cast?.splice(0, 5));
  }, [cast]);
  return (data);
};

export default useCast;
