import { motion } from 'framer-motion';
import './moviedetail.scss';
import useAverage from '../../hooks/useAverage';
import Cast from '../Cast/Cast';
import ImageMovie from '../ImagesMovie/ImageMovie';

const MovieDetail = ({
  backdrop_path, genres, overview, credits, release_date, original_name, title, vote_average,
  poster_path, runtime, number_of_episodes, images,
}) => {
  const background = `https://image.tmdb.org/t/p/original//${backdrop_path}`;
  const average = useAverage({ vote_average });

  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className='section-detail container d-flex align-items-center' style={{ backgroundImage: `url(${background})` }}>
       <div className='row justify-content-center box-content'>
          <motion.div className='col-md-6 col-lg-5' initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ type: 'linear', duration: 1 }}>
            <img className='img-size' src={`https://image.tmdb.org/t/p/w500//${poster_path}`} />
          </motion.div>
          <div className='data-text col-md-6 col-lg-5'>
            <h1>{title}</h1>
            <h1>{original_name}</h1>
            <p>⭐{average} | {release_date} Episodes: {number_of_episodes || runtime} | {genres?.map(genr => genr.name).join(',')} </p>
            <p className='fw-bold'>{overview}</p>
            {!overview && <h1 className='mt-5'> Oh no! This movie/ does not have any overview </h1>}
            <p>{ }</p>
          </div>
      </div>
      </motion.section>
      <section className='container'>
        <Cast {...credits} />
      </section>
      <section className='container'>
        <ImageMovie {...images} />
      </section>
    </>
  );
};

export default MovieDetail;
