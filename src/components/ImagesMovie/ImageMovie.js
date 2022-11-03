import { motion } from 'framer-motion';
import useCast from '../../hooks/useCast';
import './imagemovie.scss';

const ImageMovie = ({ backdrops }) => {
  const data = useCast([backdrops]);
  return (
      <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="row gx-0 mb-5">
        <h2 className='text-center'> Images </h2>
        {data?.map((backdrop) => (
        <div key={backdrop.file_path} className="mb-2 col-sm-12 col-md-6 col-lg-4">
          <img className='img-media-q' src={`https://image.tmdb.org/t/p/w400//${backdrop.file_path}`}/>
        </div>))}
      </motion.div>
  );
};

export default ImageMovie;
