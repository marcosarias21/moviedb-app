import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetail } from '../../components/MovieDetail';
import useFetch from '../../hooks/useFetch';
import urlContext from '../../providers/UrlContext';
import { Layout } from '../../components/Layout';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

const Detail = () => {
  const { id } = useParams();
  const { section } = useContext(urlContext);
  const [detailMovieData, setDetailMovieData] = useState({});
  const { data } = useFetch(`https://api.themoviedb.org/3/${section}/${id}?append_to_response=credits,videos,images&api_key=${API_KEY}`);
  console.log(data);
  useEffect(() => {
    setDetailMovieData(data);
  }, [data]);

  return (
    <Layout>
      <MovieDetail {...detailMovieData}/>
    </Layout>
  );
};

export default Detail;
