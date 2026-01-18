import React from 'react'
import cross_icon from '../assets/frontend_assets/cross_icon.png'
import { users } from '../assets/frontend_assets/assets.js'
import { useNavigate } from 'react-router-dom';
const Login = ({setIslogin,user,setShowpopup,showpopup}) => {
  const [username,setUsername]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  console.log("users",user)
  const navigate=useNavigate()
   function signup(){
       const newuser={
        id:users.length+1,
        name:username,
        email:email,
        password:password
       }
       users.push(newuser);
       console.log(users)
       console.log(newuser)
   }
  return (
  
    <div class="bg-white/50 fixed inset-0 z-50">
      <div class="bg-white w-90 h-110 absolute top-45 left-140  rounded-lg">
        <div class="flex justify-between mt-7 ml-8 mr-8">
            <h1 class="text-xl font-bold">Signup</h1>
            <button onClick={()=>setShowpopup(false)} ><img class="text-black" src={cross_icon} alt="" /></button>
        </div>
        <div className="flex flex-col gap-5 mt-10 ml-8">
            <input className="border-1 rounded-sm border-gray-500 h-10 w-75 pl-3"  type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input className="border-1 rounded-sm border-gray-500 h-10 w-75 pl-3 " type="email" placeholder='email@.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className="border-1 rounded-sm border-gray-500 h-10 w-75 pl-3" type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="ml-8">
            <button onClick={()=>signup()} className="h-11 mt-6 w-75 rounded-sm bg-red-500 text-white">Create Account</button>
        </div>
        <div class="flex gap-3 mt-3 ml-8 mr-8">
          <input type="checkbox" />
          <h1>By continuing:I agree terms and condition</h1>
        </div>
        <div class="flex gap-1 mt-1 ml-10">
          <h1>Already have an Account?</h1>
          <button onClick={()=>setIslogin(true)}><span class="text-red-500">Login here</span>
</button>
        </div>
      </div>
    </div>
  )
}

export default Login
