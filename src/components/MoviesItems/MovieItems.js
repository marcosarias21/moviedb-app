import { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgContext from '../../providers/ImgHeroContext';
import ContainerAnimated from '../ContainerAnimated/ContainerAnimated';
import './moviepopular.scss';

const MovieItems = ({
  id, title, poster_path, release_date, vote_average, backdrop_path, name, first_air_date,
}) => {
  const { setImage } = useContext(imgContext);
  const img = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  return (
    <ContainerAnimated key={id} className="my-2 ms-1 pb-5 row" onMouseEnter={() => setImage(backdrop_path)}>
        <div className='card-movies mx-3 col-sm-12 col-md-12 col-lg-4'>
            <Link to={`detail/${id}`}>
              <img className='img-size' src={img} alt={img}/>
            </Link>
          <ContainerAnimated transition={{ delay: 0.3 }} className='text-center'>
            <h5 className="fw-bold"> {title || name}  </h5>
            <span>⭐{vote_average} |  📅{release_date || first_air_date } </span>
          </ContainerAnimated>
        </div>
    </ContainerAnimated>
  );
};

export default MovieItems;
