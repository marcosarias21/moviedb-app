import { useEffect } from 'react';

const useScroll = (show, setShow) => {
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
  }, [show]);
  return show;
};
export default useScroll;
