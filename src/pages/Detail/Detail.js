import React, { useContext, useEffect, useState } from 'react';
import { MovieDetail } from '../../components/MovieDetail';
import useFetch from '../../hooks/useFetch';
import urlContext from '../../providers/UrlContext';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Detail = () => {
  const { idMovie } = useContext(urlContext);
  const [detailMovieData, setDetailMovieData] = useState({});
  const { data } = useFetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}&language=en-US`);

  useEffect(() => {
    setDetailMovieData(data);
  }, [data]);

  return (
    <MovieDetail {...detailMovieData}/>
  );
};

export default Detail;
