import { createContext, useState } from 'react';

const urlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [movieCategory, setMovieCategory] = useState('movie/popular');
  const [section, setSection] = useState('movie');

  const data = {
    movieCategory, setMovieCategory, section, setSection,
  };

  return (<urlContext.Provider value={data}>{children}</urlContext.Provider>);
};

export default urlContext;
