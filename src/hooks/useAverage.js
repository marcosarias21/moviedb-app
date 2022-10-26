import { useEffect, useState } from 'react';

const useAverage = ({ vote_average }) => {
  const [average, setAverage] = useState('');
  useEffect(() => {
    setAverage(new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(vote_average / 10));
  }, [vote_average]);
  return average;
};

export default useAverage;
