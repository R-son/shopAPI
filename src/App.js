import './App.css';
import Login from './components/Login'
import Navbar from './components/navBar'
import Products from './components/Products'
import Cart from './components/Cart'
import Logout from './components/Logout'
import Checkout from './components/Scammed'
import ProductPage from './components/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/Cart';

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/products/:productId" element={<ProductPage />} />
        </Routes>
      </CartProvider>
    </Router>
    
  );
}