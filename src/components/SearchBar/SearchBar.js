import { useContext } from 'react';
import { Container } from '../Container';
import dataContext from '../../providers/DataGlobalContext';
import './searchbar.scss';

const SearchBar = ({ section }) => {
  const { setSearchData, dataMovie } = useContext(dataContext);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchData(e.target.value);
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
