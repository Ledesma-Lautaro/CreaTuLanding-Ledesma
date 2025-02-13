import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-br from-cyan-500 to-orange-500 rounded-lg shadow-2xl overflow-hidden my-12 mx-4 md:mx-8 lg:mx-16">
      <div className="absolute inset-0 bg-[url('/images/sun-tornado.svg')] opacity-20 bg-cover"></div>
      <div className="relative z-10 text-center p-8 md:p-12 lg:p-16">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-100 to-pink-100 bg-clip-text text-transparent">          Buy Amazing Clothes
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Discover the latest trends and elevate your style with our exclusive
          collection.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100  transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
