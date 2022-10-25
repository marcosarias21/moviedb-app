const useAverage = ({ vote_average }) => {
  const average = new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(vote_average / 10);

  return (average);
};

export default useAverage;
