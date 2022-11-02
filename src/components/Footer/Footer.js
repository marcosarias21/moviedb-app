import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer-content pt-4 pb-2'>
      <div className='container'>
        <div className='d-flex justify-content-around'>
          <p> Powered by <a target='blank' href='https://www.themoviedb.org/documentation/api'> TMDb API </a></p>
          <p> Made by: <a target='blank' href='https://github.com/marcosarias21'> Marcos Arias  </a> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
