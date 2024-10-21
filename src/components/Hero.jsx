import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/animation_1.json';
import Header from './Header';
import './responsive.css'
const Hero = () => {
  return (
    <>
      <Header />
      <div id='hero' className="bg-blue-600 text-white h-screen flex items-center justify-center px-4 md:px-10 lg:px-20">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto md:mx-0 text-center md:text-left flex-shrink-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 break-words">
            Global Internet Services
          </h1>
          <p className="text-md md:text-xl lg:text-2xl mb-6 break-words">
            Connecting you to the world with high-speed internet. Experience the best online service wherever you are.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold md:w-fit">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 hidden md:block">
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
      </div>
    </>
  );
};

export default Hero;