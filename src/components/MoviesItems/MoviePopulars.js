import { motion } from 'framer-motion';

/* eslint-disable camelcase */
const MoviePopulars = ({
  id, title, poster_path,
}) => {
  const img = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  return (
    <motion.div whileHover={{ scale: 1.1, boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.51)' }} className="m-5">
      <div>
        <img src={img}/>
        <p className="fw-bold"> {title} </p>
        <span>  </span>
      </div>
    </motion.div>
  );
};

export default MoviePopulars;
