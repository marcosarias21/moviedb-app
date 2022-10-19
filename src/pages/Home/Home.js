import { useContext, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import MovieItems from '../../components/MoviesItems/MovieItems';
import urlContext from '../../providers/UrlContext';
import Hero from '../../components/Hero/Hero';
import imgContext from '../../providers/ImgHeroContext';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Home = () => {
  const { movieCategory, section } = useContext(urlContext);
  console.log(section);
  const { image } = useContext(imgContext);
  const [dataMoviePopular, setDataMoviePopular] = useState([]);
  const [page, setPage] = useState(2);
  const { data } = useFetch(`https://api.themoviedb.org/3/${movieCategory}?api_key=${API_KEY}&language=en-US`);
  console.log(data);
  const dataPage = useFetch(`https://api.themoviedb.org/3/${movieCategory}?api_key=${API_KEY}&language=en-US&page=${page}`);
  useEffect(() => {
    if (data) {
      setDataMoviePopular(data.results);
    }
  }, [data]);
  const handleLoad = () => {
    setPage(page + 1);
    setDataMoviePopular([...dataMoviePopular, ...dataPage.data.results]);
  };

  return (
    <>
      <Hero image={image} />
      <div className='d-flex justify-content-center flex-wrap'>
        {
          dataMoviePopular?.map((dataMovie, index) => (
          <MovieItems key={index} {...dataMovie}
         />
          ))
        }
      </div>
      <div className='d-flex justify-content-center my-5'>
        <button onClick={handleLoad} className='btn btn-primary'> Load More </button>
      </div>
    </>
  );
};

export default Home;
