import React, { useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import basket_icon from '../assets/frontend_assets/basket_icon.png'
import search_icon from '../assets/frontend_assets/search_icon.png'
import profile_icon from '../assets/frontend_assets/profile_icon.png'
const Navbar = ({setShowLogin,user}) => {
  const navigate=useNavigate();
  const [visiblelogin, setVisiblelogin] = React.useState(true);
  
  useEffect(() => {
    if (user != null) {
      setVisiblelogin(false);
    }
  }, [user]);
  return (
    <div>
      <nav>
        <div class="flex items-center justify-between p-5 ml-22 mr-22">
            <div>
               <button onClick={()=>navigate('/')}>
                 <h1 class="text-red-500
                 font-bold text-3xl">FOODIE</h1>
               </button>
            </div>
            <div>
            
                <ul class="test-grey-500 flex 
                
                gap-8">
                    <Link to="/main">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">contact us</Link>
                    
                </ul>
            </div>
            <div class="flex gap-5">
             
             <button onClick={()=>navigate('/cart')}> <img src={basket_icon} alt="" /></button>
             
             
              <img src={search_icon} alt="" />
               {visiblelogin?<button onClick={()=>setShowLogin(true)}> SignUp</button>: <img src={profile_icon} alt="" />}
            
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
