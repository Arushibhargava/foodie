import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Payment = ({items_in_cart}) => {
  const [subtotal,setSubtotal]=React.useState(0);
const [deliveryfee,setDeliveryfee]=React.useState(5);
const [ttotal,setTtotal]=React.useState(0);
useEffect(()=>{
  calculatetotal();
})
navigation=useNavigate();
function calculatetotal(){
   let total=0;
  for(let i=0;i<items_in_cart.length;i++){
   
    total+=parseInt(items_in_cart[i].price*items_in_cart[i].quantity);
    
  }
  setSubtotal(total);
  setTtotal(total+deliveryfee);
}
  return (
    <div>
        
      <div class="flex gap-50 ml-60 mt-30">
        <div class="flex flex-col gap-4">
            <h1 class="text-3xl font-bold">Delivery Information</h1>
            <div class="flex gap-8">
                <input class="h-10 border w-60 pl-2" type="text" placeholder='First name' />
                <input class="h-10 border w-60  pl-2" type="text" placeholder='Last name' />
            </div>
            <input class="h-10 border pl-2" type="email" placeholder='Email Address'/>
            <input class="h-10 border pl-2" type="text" placeholder='Street'/>
            <div class="flex gap-8">
                <input class="h-10 border w-60 pl-2" type="text" placeholder='City' />
                <input class="h-10 border w-60 pl-2 " type="text" placeholder='State' />
            </div>
             <div class="flex gap-8">
                <input class="h-10 border w-60 pl-2" type="text" placeholder='Pincode' />
                <input class="h-10 border w-60 pl-2" type="text" placeholder='Country' />
            </div>
            <input class="h-10  border pl-2" type="tel" placeholder='Phone Number'/>
        </div>
        <div>
            <div class="flex flex-col w-100 ">
          <h1 class="text-3xl font-bold">Cart Totals</h1>
          <div class="flex mt-5 justify-between">
            <h1 class="text-xl text-gray-500">Subtotal</h1>
            <p class="text-xl text-gray-500">${subtotal}</p>
          </div>
          
          <div class="h-0.5 mt-2 w-100 bg-gray-300"></div>
           <div class="flex mt-2 justify-between">
            <h1 class="text-xl text-gray-500">Delivery Fee</h1>
            <p class="text-xl text-gray-500">${deliveryfee}</p>
          </div>
          <div class="h-0.5 mt-2 w-100 bg-gray-300"></div>
           <div class="flex mt-2 justify-between">
            <h1 class="text-xl text-gray-500">Total</h1>
            <p class="text-xl text-gray-500">${ttotal}</p>
          </div>
          <div>
            <button onClick={()=>navigation('/paymentscreen')}class="h-10 bg-red-500 w-50 rounded mt-5 text-white">Proceed to checkout</button>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
