import React from 'react';
import { MoviePopulars } from '../../components/MoviesItems';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  console.log(API_KEY);
  const { data } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  console.log(data);
  return (
    <MoviePopulars />
  );
};

export default Home;
