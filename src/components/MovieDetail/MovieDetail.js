import React from 'react';
import './moviedetail.scss';

const MovieDetail = ({
  backdrop_path, belong_to_collection, genres, original_language, overview, production_companies,
  production_countries, release_date, status, title, vote_average, vote_count, poster_path, runtime,
}) => {
  const bgSection = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original//${backdrop_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const average = new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(vote_average / 10);

  const gen = genres?.map(genr => genr.name).join(',');
  return (
    <section className='section-detail' style={bgSection}>
      <div className='container items-container d-flex justify-content-center'>
        <div className='img-box-size'>
          <img className='img-size' src={`https://image.tmdb.org/t/p/w500//${poster_path}`} />
        </div>
        <div className='info ps-5 py-1'>
          <h1>{title}</h1>
          <span className='mt-5 pe-2'>⭐{average} | {release_date} | Duration: {runtime} | {gen} </span>
          <p className='mt-5 fw-bold'>{overview}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
