import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useFetch from '../../hooks/useFetch';
import MovieItems from '../../components/MoviesItems/MovieItems';
import urlContext from '../../providers/UrlContext';
import Hero from '../../components/Hero/Hero';
import imgContext from '../../providers/ImgHeroContext';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Home = () => {
  const { movieCategory } = useContext(urlContext);
  const { image } = useContext(imgContext);
  const [dataMoviePopular, setDataMoviePopular] = useState([]);
  const [page, setPage] = useState(2);
  const { data } = useFetch(`https://api.themoviedb.org/3/${movieCategory}?api_key=${API_KEY}&language=en-US`);
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
    <motion.section initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
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
    </motion.section>
  );
};

export default Home;
