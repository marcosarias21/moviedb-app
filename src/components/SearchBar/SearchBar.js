import { useContext } from 'react';
import { Container } from '../Container';
import dataContext from '../../providers/DataGlobalContext';

const SearchBar = ({ dataSearch, dataMovie, section }) => {
  const { setDataMovie, setSearchData } = useContext(dataContext);
  const handleChange = (e) => {
    setSearchData(e.target.value);
    setDataMovie(dataSearch.data.results);
  };
  return (
    <Container>
       <form className="w-100" role="search">
        <input className="form-control me-2" onChange={handleChange} placeholder={`Search ${section} ${section === 'tv' ? 'shows' : ''}...`}aria-label="Search" />
        {dataMovie?.length === 0 && <h5 className='text-danger'> The { section === 'tv' ? 'series' : 'movie' } was not found </h5>}
      </form>
    </Container>
  );
};

export default SearchBar;
