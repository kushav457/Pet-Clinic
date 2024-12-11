import { useState, useEffect } from "react";
import { heroContent } from "../../constants/data";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentContentIndex((prev) => (prev + 1) % heroContent.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 min-h-[80vh]">
      <div className="flex flex-col justify-center  gap-4 pt-20 md:pt-0 px-4 sm:px-6 md:px-16">
        <h1 
          className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight transition-opacity duration-1000 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {heroContent[currentContentIndex].content}
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10  ">
          <button className="bg-[#003566] text-white text-nowrap text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 rounded-md hover:bg-[#002b52] transition-colors duration-300">
            Our Services
          </button>
          <Link to="/contact" className="bg-[#f0f1f3] text-[#003566] text-nowrap text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 rounded-md border-2 border-[#003566] hover:bg-[#003566] hover:text-white transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <img 
          src={heroContent[currentContentIndex].image} 
          className={`p-10  md:h-[600px] md:w-[700px]  object-contain  transition-opacity duration-1000 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          alt="hero-image" 
        />
      </div>
    </div>
  );
};

export default Hero;
