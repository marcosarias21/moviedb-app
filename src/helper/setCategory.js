import { useContext } from 'react';
import urlContext from '../providers/UrlContext';

const setCategory = (movieCategory) => {
  const { section, setSection } = useContext(urlContext);
  if (movieCategory === 'movie/popular') {
    setSection('movie');
  } else if (movieCategory === 'movie/top_rated') {
    setSection('movie');
  } else if (movieCategory === 'tv/popular') {
    setSection('tv');
  }
  return section;
};

export default setCategory;
