import { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgContext from '../../providers/ImgHeroContext';
import './movieitems.scss';
import { Spinner } from '../Spinner';
import { ContainerAnimated } from '../ContainerAnimated';

const MovieItems = ({
  id, poster_path, backdrop_path, dataPage,
}) => {
  console.log(dataPage);
  const { setImage } = useContext(imgContext);
  const img = `https://image.tmdb.org/t/p/w400/${poster_path}`;
  return (
        <ContainerAnimated className='card-movies m-2 ol-sm-12 col-md-12 col-lg-1' onMouseEnter={() => setImage(backdrop_path)}>
            <Link to={`detail/${id}`}>
              {dataPage ? <div className='text-center'><Spinner /></div> : <img className='img-size' src={img} alt={img}/> }
            </Link>
        </ContainerAnimated>
  );
};

export default MovieItems;
