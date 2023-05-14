import './App.css';
import { BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import Main from './components/Main/Main'
import PatientInfo from './components/Search/PatientInfo';

function App() {

  
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/search' element={<PatientInfo />}></Route>
        </Routes>
        
      </Router>
  );
}


export default App;