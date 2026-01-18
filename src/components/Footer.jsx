import React from 'react'
import play_store from '../assets/frontend_assets/play_store.png'
import app_store from '../assets/frontend_assets/app_store.png'
import facebook_icon from '../assets/frontend_assets/facebook_icon.png'
import twitter_icon from '../assets/frontend_assets/twitter_icon.png'
import linkedin_icon from '../assets/frontend_assets/linkedin_icon.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div class="mt-20">
                <div class="w-190 ml-100">
                    <h1 class="text-5xl ">For Better Experience Download Foodie App</h1>
                </div>
                <div class="ml-130 mt-7 flex gap-3">
                    <img src={play_store} alt="" />
                    <img src={app_store} alt="" />
                </div>
                <div class="flex flex-col bg-gray-700 mt-10 h-100">
                    <div class="h-15"></div>
                    <div class="flex justify-between ml-30 mr-50">
                        <div class="w-140">
                            <h1 class="text-red-500
                 font-bold text-3xl">FOODIE</h1>
                            <p class="text-white mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dolorum rerum! Et ab maxime ratione possimus quos enim velit similique molestiae ipsam natus minima amet accusamus, iure eaque, consectetur ullam?</p>
                            <div class="flex mt-5 gap-4">
                                <img src={facebook_icon} alt="" />
                                <img src={twitter_icon} alt="" />
                                <img src={linkedin_icon} alt="" />
                            </div>
                        </div>
                        <div class="flex flex-col text-white">
                            <h1 class="text-3xl">Company</h1>
                            <Link class="mt-5" to="/">Home</Link>
                            <Link to="/">About us</Link>
                            <Link to="/">Delivery</Link>
                            <Link to="/">Privacy Policy</Link>

                        </div>
                        <div class="text-white flex flex-col">
                            <h1 class="text-3xl">Get in touch</h1>
                            <h1 class="mt-5">+91 3765349845</h1>
                            <h1>contact@someone</h1>
                        </div>
                    </div>
                    <div class="h-0.5 ml-38 w-300 bg-white mt-20"></div>
                    <div class="text-white ml-140 mt-5">
                        <h1>Copyright 2025 Foodie.com-All rights reserved</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
