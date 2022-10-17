import { createContext, useState } from 'react';

const imgContext = createContext();

export const ImgProvider = ({ children }) => {
  const [image, setImage] = useState();

  const data = { image, setImage };

  return (<imgContext.Provider value={data}> {children} </imgContext.Provider>);
};

export default imgContext;
