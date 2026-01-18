import React, { useEffect } from 'react'
import Navbar from './Navbar'
import cross_icon from '../assets/frontend_assets/cross_icon.png'
import { useNavigate } from 'react-router-dom';
const Cart = ({items_in_cart,setItems_in_cart}) => {
  console.log("cart ",items_in_cart)
    const cartitems=[
        {
        id:1,
        item_image:'cross_icon',
        item_title:'food',
        item_price:'2',
        item_quantity:'2',
        item_total:'4'
        },
        {
    id: 2,
    item_image: 'cross_icon',
    item_title: 'snack',
    item_price: '3',
    item_quantity: '1',
    item_total: '3'
  }
        
]
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
function remove(item){
  setItems_in_cart(prev => prev.filter(items => items.id !== item.id));
}
  return (
    <div>
      
      <div class="ml-40 mt-20 mr-40">
      <table className="w-full text-left border-collapse">
  <thead>
    <tr className="text-gray-600 border-b">
      <th className="py-2 px-4">Item</th>
      <th className="py-2 px-4">Title</th>
      <th className="py-2 px-4">Price</th>
      <th className="py-2 px-4">Quantity</th>
      <th className="py-2 px-4">Total</th>
      <th className="">Remove</th>
    </tr>
  </thead>
  <tbody class="">
    {items_in_cart.map((item) => (
      <tr key={item.id} className="  hover:bg-gray-50 ">
        
        <td className="border-b py-2 px-4">
          <img src={item.image} alt="" className="w-12 h-12 object-cover rounded " />
        </td>
        <td className=" border-b py-2 px-4">{item.name}</td>
        <td className="border-b py-2 px-4">${item.price}</td>
        <td className="border-b py-2 px-4">{item.quantity}</td>
        <td className="border-b py-2 px-4">${item.price*item.quantity}</td>
        <td className="border-b w-20">
          <button onClick={() => {
  remove(item)
}}>
  <img src={cross_icon} alt="Remove" className="w-5 h-5 cursor-pointer" />
</button>
          
        </td>
      </tr>
    
    ))}
  </tbody>
</table>
        <div class="flex mt-20 "> 
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
            <button onClick={()=>navigation('/payment')} class="h-10 bg-red-500 w-50 rounded mt-5 text-white">Proceed to checkout</button>
          </div>
         </div>
         <div>
          <div class="flex flex-col ml-50">
            <h1>If you have a promo code, Enter it here</h1>
            <div class="flex ">
              <input class="pl-2 bg-gray-200 h-10 rounded-sm w-80" type="text" placeholder='promo code' />
              <button class="bg-black text-white w-40 rounded-sm">Submit</button>
            </div>
          </div>
          </div></div>
      </div>
    </div>
  )
}

export default Cart
