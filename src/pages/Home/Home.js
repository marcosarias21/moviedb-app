import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MoviePopulars } from '../../components/MoviesItems';
import useFetch from '../../hooks/useFetch';
import urlContext from '../../providers/UrlContext';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Home = () => {
  const { movieCategory, idMovie } = useContext(urlContext);
  const [dataMoviePopular, setDataMoviePopular] = useState([]);
  const [newData, setNewData] = useState([]);
  const [page, setPage] = useState(2);
  const { data } = useFetch(`https://api.themoviedb.org/3/movie/${movieCategory}?api_key=${API_KEY}&language=en-US`);
  const dataPage = useFetch(`https://api.themoviedb.org/3/movie/${movieCategory}?api_key=${API_KEY}&language=en-US&page=${page}`);

  useEffect(() => {
    if (data) {
      setDataMoviePopular(data.results);
    }
  }, [data]);

  const handleLoad = () => {
    setPage(page + 1);
    setNewData(dataPage.data.results);
  };
  useEffect(() => {
    setDataMoviePopular([...dataMoviePopular, ...newData]);
  }, [page]);

  return (
    <>
      <motion.section initial={{ x: 0, opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className='d-flex justify-content-center flex-wrap'>
        {
          dataMoviePopular?.map((dataMovie, index) => (
          <MoviePopulars key={index} {...dataMovie}
          idMovie={idMovie}/>
          ))
        }
      </motion.section>
      <section>
        <div className='d-flex justify-content-center my-5'>
          <button onClick={handleLoad} className='btn btn-primary'> Load More </button>
        </div>
      </section>
    </>
  );
};

export default Home;
