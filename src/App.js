import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/HomeComponents/Navbar';
import Login from './pages/Authentication/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
