import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

const App = () => {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='detail/:id' element={<Detail />} />
    </Routes>
   </>
  );
};

export default App;
