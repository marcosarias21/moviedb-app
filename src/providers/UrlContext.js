import { createContext, useState } from 'react';

const urlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [movieCategory, setMovieCategory] = useState('popular');
  const [idMovie, setIdMovie] = useState(1);

  const data = {
    movieCategory, setMovieCategory, idMovie, setIdMovie,
  };

  return (<urlContext.Provider value={data}>{children}</urlContext.Provider>);
};

export default urlContext;
