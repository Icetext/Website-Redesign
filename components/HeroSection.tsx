
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 px-6" 
      style={{ backgroundImage: "url('/images/hero/hero-background.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          A Permanent Home for Great Businesses
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          Berkshire Hathaway and its subsidiaries engage in diverse business activities including insurance, freight rail transportation, utility and energy, manufacturing, services and retailing.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          >
            Our Businesses
          </a>
          <a
            href="#"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300"
          >
            Investor Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
