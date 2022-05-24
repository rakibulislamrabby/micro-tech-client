import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './components/Dashboard/AddProduct';
import AddReview from './components/Dashboard/AddReview';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import ManageProduct from './components/Dashboard/ManageProduct';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Payment from './components/Dashboard/Payment';
import Blogs from './components/HomeComponents/Blogs';
import Navbar from './components/HomeComponents/Navbar';
import NotFound from './components/Shared/NotFound';
import Login from './pages/Authentication/Login';
import RequireAdmin from './pages/Authentication/RequireAdmin';
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
          <Route path='payment/:id' element={<Payment></Payment>} ></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} ></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>} ></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>} ></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>} ></Route>
        </Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
