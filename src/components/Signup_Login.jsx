import React from 'react'
import Login from './Login'
import Log from './Log'
const Signup_Login = ({user,setUser,setShowLogin}) => {
    const [islogin,setIslogin]=React.useState(false);
    const [showpopup,setShowpopup]=React.useState(true);
    
    if(!showpopup){
        return null;
    }
    console.log("this callledddd ")
  return (
   <div> {islogin? <Log user={user} setUser={setUser} setIslogin={setIslogin} setShowpopup={setShowpopup} showpopup={showpopup}/> : <Login user={user} setIslogin={setIslogin}  setShowpopup={setShowpopup} showpopup={showpopup}/>}</div>
  )
}

export default Signup_Login
