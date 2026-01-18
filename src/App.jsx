import React, { useState } from 'react'
import Navbar from './components/Navbar'
import "./index.css";
import Home from './components/Home';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './components/Login';
import Log from './components/Log';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Signup_Login from './components/Signup_Login';
import Payment from './components/Payment';
import Paymentscreen from './components/Paymentscreen';

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  const [items_in_cart, setItems_in_cart] = useState([]);
  const [user,setUser]=useState(null);
  
  console.log(items_in_cart)
  return (

    <div className='bg-red'>
    
      {showLogin?<Signup_Login user={user} setUser={setUser} setShowLogin={setShowLogin}/>:<></>}
      
     <Navbar setShowLogin={setShowLogin} user={user}/>

     <Routes>
      <Route path='/' element={<Home items_in_cart={items_in_cart} setItems_in_cart={setItems_in_cart} user={user}/>}></Route>
      <Route path='/main' element={<Main />}></Route>
      <Route path='/login' element={<Log/>}></Route>
      <Route path='/menu' element={<Menu />}></Route>
      <Route path='/cart' element={<Cart items_in_cart={items_in_cart} setItems_in_cart={setItems_in_cart}/>}></Route>
      <Route path='/payment' element={<Payment items_in_cart={items_in_cart} setItems_in_cart={setItems_in_cart}/>}></Route>
      <Route path='/paymentscreen' element={<Paymentscreen items_in_cart={items_in_cart}/>}></Route>
      <Route path='/contact'></Route>
       
     </Routes>
     {/* <Main/>
     <Menu/>
    <Footer/> */}
    </div>
  )
}

export default App
