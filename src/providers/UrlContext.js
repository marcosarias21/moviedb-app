import { createContext, useState } from 'react';

const urlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [urlSection, setUrlSection] = useState('/');
  const [global, setGlobal] = useState({});

  const data = {
    urlSection, setUrlSection, global, setGlobal,
  };

  return (<urlContext.Provider value={data}>{children}</urlContext.Provider>);
};

export default urlContext;
