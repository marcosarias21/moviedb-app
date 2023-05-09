import { useContext, useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import useFetch from '../../hooks/useFetch';
import urlContext from '../../providers/UrlContext';
import imgContext from '../../providers/ImgHeroContext';
import dataContext from '../../providers/DataGlobalContext';
import { Hero } from '../../components/Hero';
import { Container } from '../../components/Container';
import { SearchBar } from '../../components/SearchBar';
import { MovieItems } from '../../components/MoviesItems';
import { Spinner } from '../../components/Spinner';
import { ContainerAnimated } from '../../components/ContainerAnimated';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Home = () => {
  const { movieCategory, section } = useContext(urlContext);
  const { dataMovie, setDataMovie, searchData } = useContext(dataContext);
  const { image } = useContext(imgContext);
  const [page, setPage] = useState(2);
  const { data, loading } = useFetch(`https://api.themoviedb.org/3/${movieCategory}?api_key=${API_KEY}&language=en-US`);
  const dataPage = useFetch(`https://api.themoviedb.org/3/${movieCategory}?api_key=${API_KEY}&language=en-US&page=${page}`);
  const dataSearch = useFetch(`https://api.themoviedb.org/3/search/${section}?api_key=${API_KEY}&language=en-US&query=${searchData}&include_adult=false`);

  const handleLoad = () => {
    setPage(page + 1);
    setDataMovie([...dataMovie, ...dataPage.data.results]);
  };

  useEffect(() => {
    if (data) {
      setDataMovie(data.results);
    }
  }, [data]);
  return (
    <Layout>
      <Hero image={image} />
      <SearchBar dataSearch={dataSearch} dataMovie={dataMovie} section={section}/>
      <section className='container-fluid'>
        <div className="row justify-content-center">

          { loading ? <Spinner />
            : dataMovie?.map((movie, index) => (
            <MovieItems dataPage={dataPage.loading} loading={loading} key={index} {...movie}
          />
            ))
          }
        </div>
      </section>
      <Container className='mb-3'>
        <button onClick={handleLoad} disabled={searchData && true} className='btn btn-outline-light'> Load More </button>
      </Container>
    </Layout>
  );
};

export default Home;
