import './App.css';
import Fromsaga from './Component/Fromsaga';
import Tabel from './Component/Tabel';
import Hookform from './Component2/Hookform';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
  <Link to="/">Fromsaga</Link>
  <Link to="/Tabel">Tabel</Link>
  <Link to="/Hookfrom">Hookform</Link>

    <div className="App">
      <Routes>
      
      <Route path="/" element={<Fromsaga/>} />
         <Route path="/Tabel" element={<Tabel/>} />
         <Route path="/Fromsaga/:id" element={<Fromsaga/>}/>
         <Route path="/Hookfrom" element={<Hookform/>}/>
              
      </Routes>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;
