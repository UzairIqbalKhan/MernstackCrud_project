
import './App.css';
import AddUsers from './Components/AddUsers.';
import AllUser from './Components/AllUser';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';


import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>

      <BrowserRouter>
      <NavBar/>
        <Routes>
      <Route path='/Add' element={<AddUsers/>}/>
      <Route path='/All' element={<AllUser/>}/>
      <Route path='/Edit/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
       
      </>
    </div>
  );
}

export default App;
