import './App.css';
import useFetch from './hooks/useFetch';

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const App = () => {
  const { data } = useFetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`);
  console.log(data);
  return (
   <>
   </>
  );
};

export default App;
