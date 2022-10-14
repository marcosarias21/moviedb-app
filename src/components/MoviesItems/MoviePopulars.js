import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

/* eslint-disable camelcase */
const MoviePopulars = ({
  id, title, poster_path, release_date, vote_average,
}) => {
  const img = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  return (
    <motion.div key={id} className="m-5">
      <div>
        <NavLink to={`detail/${id}`}>
          <img src={img} alt={img}/>
        </NavLink>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <p className="fw-bold"> {title} </p>
          <span>⭐{vote_average} |  📅{release_date} </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoviePopulars;
