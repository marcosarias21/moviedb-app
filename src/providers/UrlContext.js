import { createContext, useState } from 'react';

const urlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [movieCategory, setMovieCategory] = useState('popular');

  const data = { movieCategory, setMovieCategory };

  return (<urlContext.Provider value={data}>{children}</urlContext.Provider>);
};

export default urlContext;
