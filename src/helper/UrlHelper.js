import { useEffect, useState } from 'react';

const UrlHelper = (urlSection) => {
  const [urlType, setUrlType] = useState({ type: '' });
  useEffect(() => {
    if (urlSection === '/') {
      setUrlType({
        type: 'popular',
      });
    } else if (urlSection === '/now') {
      setUrlType({
        type: 'top_rated',
      });
    }
  }, [urlSection]);

  return urlType;
};

export default UrlHelper;
