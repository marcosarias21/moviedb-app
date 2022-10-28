import useCast from '../../hooks/useCast';
import './imagemovie.scss';

const ImageMovie = ({ backdrops }) => {
  const data = useCast([backdrops]);
  return (
      <div className="row gx-0">
        <h2 className='text-center'> Images </h2>
        {data?.map((backdrop) => (
        <div key={backdrop.file_path} className="mb-4 col-sm-12 col-md-6 col-lg-4">
          <img className='img-media-q' src={`https://image.tmdb.org/t/p/w400//${backdrop.file_path}`}/>
        </div>))}
      </div>
  );
};

export default ImageMovie;
