import { useContext, useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import MovieItems from '../../components/MoviesItems/MovieItems';
import Hero from '../../components/Hero/Hero';
import useFetch from '../../hooks/useFetch';
import urlContext from '../../providers/UrlContext';
import imgContext from '../../providers/ImgHeroContext';
import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import dataContext from '../../providers/DataGlobalContext';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Home = () => {
  const { movieCategory, section } = useContext(urlContext);
  const { dataMovie, setDataMovie, searchData } = useContext(dataContext);
  const { image } = useContext(imgContext);
  const [page, setPage] = useState(2);
  const { data } = useFetch(`https://api.themoviedb.org/3/${movieCategory}?api_key=${API_KEY}&language=en-US`);
  const dataPage = useFetch(`https://api.themoviedb.org/3/${movieCategory}?api_key=${API_KEY}&language=en-US&page=${page}`);
  const dataSearch = useFetch(`https://api.themoviedb.org/3/search/${section}?api_key=${API_KEY}&language=en-US&query=${searchData}&include_adult=false`);
  useEffect(() => {
    if (data) {
      setDataMovie(data.results);
    }
  }, [data]);
  const handleLoad = () => {
    setPage(page + 1);
    setDataMovie([...dataMovie, ...dataPage.data.results]);
  };
  return (
    <Layout>
      <Hero image={image} />
      <SearchBar dataSearch={dataSearch} dataMovie={dataMovie}/>
      <Container>
        {
          dataMovie?.map((movie, index) => (
          <MovieItems key={index} {...movie}
         />
          ))
        }
      </Container>
      <Container className='mb-3'>
        <button onClick={handleLoad} className='btn btn-success'> Load More </button>
      </Container>
    </Layout>
  );
};

export default Home;
