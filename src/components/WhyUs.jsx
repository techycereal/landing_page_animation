import connectAnimation from '../animations/connect_animation.json'; // Replace with your second animation JSON file
import priceAnimation from '../animations/price.json'; // Replace with your price icon JSON file
import rocketAnimation from '../animations/rocket.json'; // Replace with your rocket icon JSON file
import hourAnimation from '../animations/24hour.json'; // Replace with your hour icon JSON file
import React from 'react';
import Lottie from 'lottie-react';
const WhyUs = () => {
    return (<div id='why-us' className="bg-gray-100 text-gray-900 py-20 px-10 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center w-full md:w-3/4">
          {/* Left Section: Animation */}
          <div className="w-full md:w-1/2">
            <Lottie animationData={connectAnimation} loop={true} autoplay={true} />
          </div>

          {/* Right Section: Why Us Text */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10">
            <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="list-none pl-0 space-y-6">
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8">
                  <Lottie animationData={rocketAnimation} loop={true} autoplay={true} />
                </div>
                <p className="text-lg">Reliable and fast internet services that keep you connected globally.</p>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8">
                  <Lottie animationData={hourAnimation} loop={true} autoplay={true} />
                </div>
                <p className="text-lg">24/7 customer support for all your internet needs.</p>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-8 h-8">
                  <Lottie animationData={priceAnimation} loop={true} autoplay={true} />
                </div>
                <p className="text-lg">Affordable pricing without compromising on quality.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>)
}

export default WhyUs