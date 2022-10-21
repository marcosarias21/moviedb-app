import { useContext, useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import MovieItems from '../../components/MoviesItems/MovieItems';
import Hero from '../../components/Hero/Hero';
import useFetch from '../../hooks/useFetch';
import urlContext from '../../providers/UrlContext';
import imgContext from '../../providers/ImgHeroContext';
import Container from '../../components/Container/Container';

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
    <Layout>
      <Hero image={image} />
      <Container>
        {
          dataMoviePopular?.map((dataMovie, index) => (
          <MovieItems key={index} {...dataMovie}
         />
          ))
        }
      </Container>
      <Container>
        <button onClick={handleLoad} className='btn btn-primary'> Load More </button>
      </Container>
    </Layout>
  );
};

export default Home;
