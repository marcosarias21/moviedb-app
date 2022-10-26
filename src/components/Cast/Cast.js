import useCast from '../../hooks/useCast';
import ContainerAnimated from '../ContainerAnimated/ContainerAnimated';

const Cast = ({ cast }) => {
  const data = useCast([cast]);
  console.log(data);
  return (
    <div className='row'>
      {data?.map(person => (
        <ContainerAnimated className='col-sm-12 col-md-6 col-lg-3 my-5' key={person.cast_id}>
          <div>
            <img src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}/>
            {!person.profile_path && <h2 className='text-danger'> Image not found </h2>}
          </div>
          <div>
            {person?.name}
          </div>
        </ContainerAnimated>
      ))}
    </div>
  );
};

export default Cast;
