import './App.css';
import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import Main from './components/Main/Main'
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import SearchPacientes from './components/SearchPacientes/SearchPacientes';

function App() {

  
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/Login' element={<Login />}></Route>
           
          {/* <Route exact path='/services' element={<Services />}></Route> */}
          <Route exact path='/Search' element={<Search />}></Route>
          <Route exact path='/SearchPacientes' element={<SearchPacientes />}></Route>
        </Routes>
        
      </Router>
  );
}


export default App;