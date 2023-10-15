import {Routes,Route,BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Desktopnav from './Components/Navbar/Desktopnav';
import Mobilenav from './Components/Navbar/Mobilenav';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import SingleProduct from './pages/SingleProduct';
import Success from './Components/Success';
import Cancel from './Components/Cancel';
import Login from './Components/Loguser/Login';
import SignUp from './Components/Loguser/SignUp';
import Logout from './Components/Loguser/Logout';
import FotgetPassword from './Components/Loguser/ForgetPassword';
import ResetPassword from './Components/Loguser/ResetPassword';
import PaymentForm from './Components/PaymentGateway/PaymentGeteway';
import Error from './pages/Error';


function App() {
  return (
    <>
     <BrowserRouter>
     <Desktopnav/>
     <Mobilenav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutauth' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgetpassword" element={<FotgetPassword/>}/>
          <Route path="/resetpassword/:id/:token" element={<ResetPassword/>}/>
          <Route path="/payment" element={<PaymentForm/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
     
  );
}

export default App;
