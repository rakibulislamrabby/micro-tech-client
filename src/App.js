import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddReview from './components/Dashboard/AddReview';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Navbar from './components/HomeComponents/Navbar';
import NotFound from './components/Shared/NotFound';
import Login from './pages/Authentication/Login';
import RequireAuth from './pages/Authentication/RequireAuth';
import SignUp from './pages/Authentication/SignUp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import MyPortfolio from './pages/MyPortfolio';
import Purchase from './pages/Purchase';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>} ></Route>
          <Route path='review' element={<AddReview></AddReview>} ></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>} ></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
