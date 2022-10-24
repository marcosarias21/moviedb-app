import { motion } from 'framer-motion';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import imgContext from '../../providers/ImgHeroContext';
import './moviepopular.scss';

const MovieItems = ({
  id, title, poster_path, release_date, vote_average, backdrop_path,
}) => {
  const { setImage } = useContext(imgContext);
  const img = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  return (
    <>
      <motion.div key={id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.1 }} className="my-2 pb-5" onMouseEnter={() => setImage(backdrop_path)}>
        <div className='card-movies mx-3'>
          <NavLink to={`detail/${id}`}>
            <img className='img-size' src={img} alt={img}/>
          </NavLink>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <h5 className="fw-bold"> {title} </h5>
            <span>⭐{vote_average} |  📅{release_date} </span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default MovieItems;
