import React from 'react'
import mainimage from '../assets/frontend_assets/mainimage.jpeg'

const Main = ({items_in_cart}) => {
  console.log("main ",items_in_cart)
  return (
    <div>
      <div>
        <div class="relative w-full flex justify-center mt-10">
            <div class="w-330 h-140  ">
                <img class="object-cover h-full w-full rounded-lg"src={mainimage} alt="" />
            </div>
            <div class="absolute top-45 left-70 text-white w-130 space-y-7">
                <h1 class="text-5xl">ORDER YOUR FAVOURITE FOOD HERE</h1>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div class="h-10 w-33 rounded-3xl bg-white flex justify-center">
                          <h1 class="text-gray-600 text-lg mt-1">View menu</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
