import { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgContext from '../../providers/ImgHeroContext';
import './movieitems.scss';
import { ContainerAnimated } from '../ContainerAnimated';

const MovieItems = ({ id, poster_path, backdrop_path }) => {
  const { setImage } = useContext(imgContext);
  const img = `https://image.tmdb.org/t/p/w400/${poster_path}`;
  return (
        <ContainerAnimated className='card-movies m-2 col-5 col-sm-4 col-md-2 col-lg-1' onMouseEnter={() => setImage(backdrop_path)}>
            <Link to={`detail/${id}`}>
              <img className='img-size' src={img} alt={img}/>
            </Link>
        </ContainerAnimated>
  );
};

export default MovieItems;
