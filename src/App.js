import './App.css';
import Login from './components/Login'
import Navbar from './components/navBar'
import Products from './components/Products'
import Cart from './components/Cart'
import Logout from './components/Logout'
import {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  // const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);//set Token to returned value or null(If user isn't connected)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
    </Router>
    
  );
}

// export default function App() {
//   return (
//       <Router>
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<PokeList/>}/>
//           <Route path="/pokedex" element={<Pokedex/>} />
//         </Routes>
//       </Router>
//   );
// }