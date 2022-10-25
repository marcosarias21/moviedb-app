import React from 'react';
import { motion } from 'framer-motion';
import './moviedetail.scss';

const MovieDetail = ({
  backdrop_path, belong_to_collection, genres, original_language, overview, production_companies,
  production_countries, release_date, status, original_name,
  title, vote_average, vote_count, poster_path, runtime, number_of_episodes,
}) => {
  const background = `https://image.tmdb.org/t/p/original//${backdrop_path}`;

  const average = new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(vote_average / 10);
  const gen = genres?.map(genr => genr.name).join(',');

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className='section-detail' style={{ backgroundImage: `url(${background})` }}>
      <div className='items-container d-flex justify-content-center'>
        <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ type: 'linear', duration: 1 }}>
          <img className='img-size' src={`https://image.tmdb.org/t/p/w500//${poster_path}`} />
        </motion.div>
        <div className='info'>
          <div className='data-text'>
            <h1>{title}</h1>
            {
              !title && <h1>{original_name}</h1>
            }
            {
              runtime
              && <span className='span-style'>⭐{average} | {release_date} | Duration: {runtime } | {gen} </span>
            }
            {
            number_of_episodes
            && <span className='span-style'>⭐{average} | {release_date} Episodes: {number_of_episodes} | {gen} </span>
            }
          </div>
          <p className='fw-bold'>{overview}</p>
            {!overview && <h1 className='mt-5'> Oh no! This movie/ does not have any overview </h1>}
        </div>
      </div>
    </motion.section>
  );
};

export default MovieDetail;
