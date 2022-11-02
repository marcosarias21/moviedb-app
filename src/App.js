import { AnimateSharedLayout } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

const App = () => {
  const location = useLocation();
  return (
   <>
    <Wrapper>
      <AnimateSharedLayout>
        <Navbar/>
          <Routes location={location} key={location.key}>
              <Route path='/' element={<Home />} />
              <Route path='/toprated' element={<Home />} />
              <Route path='/tv' element={<Home />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/tv/detail/:id' element={<Detail />} />
              <Route path='/toprated/detail/:id' element={<Detail />} />
          </Routes>
          <Footer />
      </AnimateSharedLayout>
    </Wrapper>
   </>
  );
};

export default App;
