import { motion } from 'framer-motion';
import './moviedetail.scss';
import useAverage from '../../hooks/useAverage';
import Cast from '../Cast/Cast';

const MovieDetail = ({
  backdrop_path, genres, overview, credits, release_date, original_name, title, vote_average,
  poster_path, runtime, number_of_episodes,
}) => {
  const background = `https://image.tmdb.org/t/p/original//${backdrop_path}`;
  const average = useAverage({ vote_average });

  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className='section-detail' style={{ backgroundImage: `url(${background})` }}>
        <div className='items-container d-flex justify-content-center'>
          <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ type: 'linear', duration: 1 }}>
            <img className='img-size' src={`https://image.tmdb.org/t/p/w500//${poster_path}`} />
          </motion.div>
          <div className='info'>
            <div className='data-text'>
              <h1>{title}</h1>
              <h1>{original_name}</h1>
              <p>⭐{average} | {release_date} Episodes: {number_of_episodes || runtime} | {genres?.map(genr => genr.name).join(',')} </p>
              <p className='fw-bold'>{overview}</p>
            </div>
              {!overview && <h1 className='mt-5'> Oh no! This movie/ does not have any overview </h1>}
          </div>
        </div>
      </motion.section>
      <section className='container'>
        <Cast {...credits} />
      </section>
    </>
  );
};

export default MovieDetail;
