import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { AllParkinglocations } from './components/allParkinglocations/AllParkinglocations';
import { Outlets } from './components/outlets/Outlets';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/login/Login';
import { Registration } from './components/registration/Registration';
import { Bookingslot } from './components/bookingSlot/Bookingslot';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='hrBorder'>
       
        <Routes>
          <Route path='/' element={<AllParkinglocations/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
          <Route path='/outlet/:name' element={<Outlets/>}></Route>
          <Route path='/booking/:name/:id' element={<Bookingslot/>}></Route>
        </Routes>
      </div>
    
     
    </div>
  );
}

export default App;
