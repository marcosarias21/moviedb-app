import { useContext } from 'react';
import dataContext from '../../providers/DataGlobalContext';
import Container from '../Container/Container';

const SearchBar = ({ dataSearch, dataMovie, section }) => {
  const { setDataMovie, setSearchData } = useContext(dataContext);
  const handleChange = (e) => {
    setSearchData(e.target.value);
    setDataMovie(dataSearch.data.results);
  };
  return (
    <Container>
       <form className="my-5 w-50" role="search">
        <input className="form-control me-2" onChange={handleChange} placeholder={`Search ${section} ${section === 'tv' ? 'shows' : ''}...`}aria-label="Search" />
        {dataMovie.length === 0 && <h5 className='text-danger'> The series/movie was not found </h5>}
      </form>
    </Container>
  );
};

export default SearchBar;
