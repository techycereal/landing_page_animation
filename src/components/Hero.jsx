import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/animation_1.json'; // Replace with your globe animation JSON file
import Header from './Header';

const Hero = () => {
  return (
    <>
      <Header/>
      <div id='hero' className="bg-blue-600 text-white h-[70vh] flex items-center px-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">Global Internet Services</h1>
          <p className="text-xl mb-6">
            Connecting you to the world with high-speed internet. Experience the best online service wherever you are.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
      </div>
    </>
  );
};

export default Hero;
