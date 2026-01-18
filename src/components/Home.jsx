import React from 'react'
import Main from './Main'
import Menu from './Menu'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom';
import Log from './Log';
const Home = ({items_in_cart,setItems_in_cart,user}) => {
  return (
    <div>
     
        
      <Main />
        <Menu items_in_cart={items_in_cart} setItems_in_cart={setItems_in_cart} user={user} />
        <Footer/>
    </div>
  )
}

export default Home
