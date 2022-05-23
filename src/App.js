import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Home/Main/Main';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import HeaderMenu from './pages/Shared/HeaderMenu/HeaderMenu';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <HeaderMenu/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/product/:id' element={<Inventory/>}/>
        <Route path='/manageProduct' element={<ManageProducts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
