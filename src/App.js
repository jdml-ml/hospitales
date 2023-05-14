import './App.css';
import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import Main from './components/Main/Main'
import Search from './components/Search/Search';

function App() {

  
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/search' element={<Search />}></Route>
        </Routes>
        
      </Router>
  );
}


export default App;