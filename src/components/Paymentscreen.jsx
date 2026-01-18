import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Paymentscreen = ({items_in_cart}) => {
  const [cost,setCost]=React.useState(0);
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
        
      <div class="flex gap-50 ml-40 mt-30">
        <div class="flex flex-col gap-4">
            <h1 class="text-xl">Pay with card</h1>
             <div class="flex flex-col text-xl ">
                <h1 class="text-gray-400 mb-1">Email</h1>
            <input class="h-10 border pl-2" type="email" placeholder='Email Address'/>
             </div>
            <div>
                   <h1 class="text-gray-400 mb-1">Card Information</h1>
                <input class="h-10 border pl-2" type="text" placeholder='1234 1234 1234 1234'/>
                <div class="flex">
                <input class="h-10 border w-80 pl-2" type="text" placeholder='MM/YY' />
                <input class="h-10 border w-80 pl-2 " type="text" placeholder='CVC' />
            </div>
            </div>
            
            <div class="flex flex-col text-xl ">
                <h1 class="text-gray-400 mb-1">Cardholder Name</h1>
            <input class="h-10 border pl-2" type="email" placeholder='Full name on card'/>
             </div>
             <div class="flex flex-col text-xl ">
                <h1 class="text-gray-400 mb-1">Country or region</h1>
            <option class="h-10 border pl-2"></option>
            
             </div>
             <div class="mt-5">
              <button class="bg-blue-500 w-160 h-10 text-white text-xl"> Pay</button>
             </div>
        </div>
        <div>
            <div class="flex flex-col w-100 ">
          <h1 class="text-xl">Items</h1>
          <div class="mt-10">
            <h1>To Pay</h1>
            <h1 class="text-2xl">${cost}</h1>

          </div>
          {items_in_cart.map((item)=>(
            <div key={item.id}class="flex justify-between mt-10">
            <div class="flex flex-col">
            <h1>{item.name}</h1>
            <h2 class="text-gray-500">QTY{item.quantity}</h2>
            </div>
            <div>
              <h1>${item.quantity*item.price}</h1>
              <h2 class="text-gray-500">${item.price}</h2>

            </div>
          </div>
            ))}
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Paymentscreen
