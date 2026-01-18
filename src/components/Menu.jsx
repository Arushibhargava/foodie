import React, { useState } from 'react'
import { menu_list } from '../assets/frontend_assets/assets'
import { food_list } from '../assets/frontend_assets/assets'
import rating_starts from '../assets/frontend_assets/rating_starts.png'
import add_icon_white from '../assets/frontend_assets/add_icon_white.png'

const Menu = ({items_in_cart, setItems_in_cart,user}) => {
  const [selectedcatergory,setSelectedcatergory]=useState("ALL")
  const filteritems=selectedcatergory==="ALL"?food_list:food_list.filter((item)=>item.category===selectedcatergory)
  console.log("items in cart ",items_in_cart)
  console.log(user)
  function addtocart(food){
    const itemexist=items_in_cart.find((item)=>item.food_id===food._id);
    console.log(food)
    console.log(food._id)
    if(itemexist){
      console.log("this called")
      itemexist.quantity+=1;
    }else{
    const newitems={
      id:items_in_cart.length+1,
      user_id:user.id,
      food_id:food._id,
      name:food.name,
      price:food.price,
      image:food.image,
      quantity:1
    }
    console.log(newitems)
    setItems_in_cart([...items_in_cart,newitems]);
    console.log(items_in_cart)
  }
}  
  
  return (
    <div>
      <div class="ml-27 mt-7 mr-15">
        <div>
            <h1 class="text-3xl font-semibold">Explore our Menu</h1>
            <p class="text-gray-700 w-200 mt-3">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        </div>
        <div class="grid grid-cols-8 gap-2  mt-10">
          {menu_list.map((item,index)=>
          <button class="flex flex-col justify-center" key={index} onClick={()=>setSelectedcatergory(item.menu_name)} >
  <img class="h-30 w-30" src={item.menu_image} alt="" />
            <h1 class="text-gray-700 ml-10 mt-3">{item.menu_name}</h1>
          </button>
         
          )}
        </div>
        <div class="mt-10 w-330 bg-gray-500 h-1"></div>
        <div class="mt-10">
          <h1 class="text-black text-3xl font-semibold">Top Dishes near you</h1>
          <div class="grid grid-cols-4 mt-5 gap-10">
            {filteritems.map((food)=>
              <div class="flex mt-7 mb-7 rounded-xl flex flex-col shadow relative" key={food._id}>
                <div>
                  <img class="rounded-xl"src={food.image} alt="" />
                 <button  onClick={()=>addtocart(food)}> <img class="absolute top-46 left-60 " src={add_icon_white} alt="" /></button>
                </div>
                <div class="flex ml-3 mt-3 justify-between items-center">
                  <h1 class="text-xl">{food.name}</h1>
                  <img class="mr-2 h-6" src={rating_starts} alt="" />
                </div>
                <div>
                  <p class="ml-3">{food.description}</p>
                </div>
                <div>
                  <h1 class="text-orange-600 text-2xl font-semibold mb-5 ml-3">${food.price}</h1>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
