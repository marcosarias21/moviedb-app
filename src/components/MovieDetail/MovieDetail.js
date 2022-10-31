import { motion } from 'framer-motion';
import './moviedetail.scss';
import useAverage from '../../hooks/useAverage';
import Cast from '../Cast/Cast';
import ModalTrailer from '../ModalTrailer/ModalTrailer';
import ImageMovie from '../ImagesMovie/ImageMovie';

const MovieDetail = ({
  backdrop_path, genres, overview, credits, release_date, original_name, title, vote_average,
  poster_path, runtime, number_of_episodes, images, videos,
}) => {
  const background = `https://image.tmdb.org/t/p/original//${backdrop_path}`;
  if (!images) return null;
  const average = useAverage({ vote_average });
  console.log(videos);

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
          <p>{overview}</p>
          {!overview && <h1 className='mt-5'> Oh no! This movie/ does not have any overview </h1>}
          <h5 className='mt-4 mb-3'> Crew </h5>
          <div className='d-flex'>
            { credits?.crew?.slice(0, 3).map(person => (
            <div className='me-3' key={person.job}>
              <h6>{person.name}</h6>
              <p>{person.job}</p>
            </div>))}
          </div>
          <button type="button" className="btn btn-success p-3" data-bs-toggle="modal" data-bs-target="#exampleModal"> Play Trailer! </button>
          <ModalTrailer {...videos} />
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
