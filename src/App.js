import './App.css';
import Login from './components/Login'
import Navbar from './components/navBar'
import Products from './components/Products'
import {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);//set Token to returned value or null(If user isn't connected)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
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