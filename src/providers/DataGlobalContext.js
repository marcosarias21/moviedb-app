import { createContext, useState } from 'react';

const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataMovie, setDataMovie] = useState([]);
  const [searchData, setSearchData] = useState('');

  const data = {
    dataMovie, setDataMovie, searchData, setSearchData,
  };

  return (<dataContext.Provider value={data}> {children} </dataContext.Provider>);
};
export default dataContext;
