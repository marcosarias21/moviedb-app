import { AnimateSharedLayout } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

const App = () => {
  const location = useLocation();
  return (
   <>
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
    </AnimateSharedLayout>
   </>
  );
};

export default App;
