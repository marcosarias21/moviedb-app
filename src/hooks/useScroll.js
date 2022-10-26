import { useEffect, useState } from 'react';

const useScroll = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    return () => {
      window.addEventListener('scroll', changeColor);
    };
  }, []);
  return show;
};
export default useScroll;
