import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetail } from '../../components/MovieDetail';
import useFetch from '../../hooks/useFetch';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Detail = () => {
  const { id } = useParams();
  const [detailMovieData, setDetailMovieData] = useState({});
  const { data } = useFetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,videos,images&api_key=${API_KEY}&language=en-US`);
  console.log(data);
  useEffect(() => {
    setDetailMovieData(data);
  }, [data]);

  return (
    <MovieDetail {...detailMovieData}/>
  );
};

export default Detail;
