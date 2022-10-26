import useCast from '../../hooks/useCast';

const Cast = ({ cast }) => {
  const data = useCast([cast]);
  return (
    <div>
      {data?.map(person => (<h1 key={person.cast_id}>{person?.name}</h1>))}
    </div>
  );
};

export default Cast;
