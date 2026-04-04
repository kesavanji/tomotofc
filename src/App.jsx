import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Food } from './components/Food';
import { Cart } from './components/Cart';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/food' element={<Food cart={cart} setCart={setCart}/> } ></Route>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/> } ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
