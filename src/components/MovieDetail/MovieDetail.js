import React from 'react';
import { motion } from 'framer-motion';
import './moviedetail.scss';

const MovieDetail = ({
  backdrop_path, belong_to_collection, genres, original_language, overview, production_companies,
  production_countries, release_date, status, original_name,
  title, vote_average, vote_count, poster_path, runtime, number_of_episodes,
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
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className='section-detail' style={bgSection}>
      <div className='items-container d-flex justify-content-center'>
        <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ type: 'linear', duration: 1 }} className='img-box-size'>
          <img className='img-size' src={`https://image.tmdb.org/t/p/w500//${poster_path}`} />
        </motion.div>
        <div className='info ps-5 py-1'>
          <h1>{title}</h1>
          {
            !title && <h1>{original_name}</h1>
          }
          {
            runtime
            && <span className='mt-5 pe-2'>⭐{average} | {release_date} | Duration: {runtime } | {gen} </span>
          }
          {
          number_of_episodes
          && <span className='mt-5 pe-2'>⭐{average} | {release_date} Episodes: {number_of_episodes} | {gen} </span>
          }
          <p className='mt-5 fw-bold'>{overview}</p>
            {!overview && <h1 className='mt-5'> Oh no! This movie/ does not have any overview </h1>}
        </div>
      </div>
    </motion.section>
  );
};

export default MovieDetail;
