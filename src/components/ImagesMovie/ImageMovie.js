/* eslint-disable no-shadow */
import { motion } from 'framer-motion';
import useCast from '../../hooks/useCast';
import './imagemovie.scss';

const ImageMovie = ({ backdrops }) => {
  const data = useCast([backdrops]);
  return (
      <div className="row mb-5">
        <h2 className='text-center'> Images </h2>
        {data?.map((backdrop, i) => (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: (i) => ({
              opacity: 1,
              transition: {
                delay: i * 0.2,
              },
            }),
          }}
          key={i}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={i}
          className="mb-2 col-sm-12 col-md-6 col-lg-4">
          <img className='img-media-q' src={`https://image.tmdb.org/t/p/w400//${backdrop.file_path}`}/>
        </motion.div>))}
      </div>
  );
};

export default ImageMovie;
