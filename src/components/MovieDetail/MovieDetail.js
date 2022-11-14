import { useState } from 'react';
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
  console.log(credits);
  if (!images) return null;
  const background = `https://image.tmdb.org/t/p/original//${backdrop_path}`;
  const [isOpen, setIsOpen] = useState(false);
  const average = useAverage(vote_average);

  return (
    <>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className='section-detail container d-flex align-items-center'
       style={{ backgroundImage: `url(${background})` }}>
        <div className='row justify-content-center box-content'>
          <motion.div className='d-none d-sm-block d-sm-none d-md-block col-md-6 col-lg-5' initial={{ opacity: 0, x: -500 }} animate={{ x: 0, opacity: 1 }} transition={{ type: 'linear', duration: 1.5 }}>
            <img className='img-size' src={`https://image.tmdb.org/t/p/w500//${poster_path}`} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -300 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='data-text col-md-6 col-lg-5'>
            <h1>{title || original_name}</h1>
            <p>⭐{average} | {release_date} Episodes: {number_of_episodes || runtime} | {genres?.map(genr => genr.name).join(',')}</p>
            {overview ? <p>{overview}</p> : <h1 className='mt-5 text-danger'> Oh no! This serie does not have overview </h1>}
            <h5 className='mt-4 mb-3'>Crew</h5>
            <motion.div initial={{ opacity: 0, y: -100 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }} className='d-flex'>
              { credits?.crew?.slice(0, 3).map(person => (
              <div className='me-3' key={person.job}>
                <h6>{person.name}</h6>
                <p>{person.job}</p>
              </div>))}
              {credits?.crew.length === 0
              && <h5 className='text-danger'> Error! This serie does not have any Crew </h5>}
            </motion.div>
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} type="button" onClick={() => setIsOpen(true)} className="btn btn-outline-light p-3" data-bs-toggle="modal" data-bs-target="#exampleModal"> Play Trailer! </motion.button>
            <ModalTrailer {...videos} isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        </div>
      </motion.section>
      <section className='container'>
        <Cast {...credits} />
        <ImageMovie {...images} />
      </section>
    </>
  );
};

export default MovieDetail;
