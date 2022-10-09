import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MoviePopulars } from '../../components/MoviesItems';
import useFetch from '../../hooks/useFetch';
import urlContext from '../../providers/UrlContext';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Home = () => {
  const { global } = useContext(urlContext);
  const [dataMoviePopular, setDataMoviePopular] = useState([]);
  const { data } = useFetch(`https://api.themoviedb.org/3/movie/${global}?api_key=${API_KEY}&language=en-US`);
  useEffect(() => {
    if (data) {
      const { results } = data;
      setDataMoviePopular(results);
    }
  }, [data]);

  return (
    <motion.section key={global} initial={{ x: 0, opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className='d-flex justify-content-center flex-wrap'>
      {
        dataMoviePopular?.map(dataMovie => (<MoviePopulars key={dataMovie.id} {...dataMovie} />))
      }
    </motion.section>
  );
};

export default Home;
