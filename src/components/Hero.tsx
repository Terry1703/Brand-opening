import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % totalSlides) + 1);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const slideContent = [
    {
      subtitle: 'OUR VERSION',
      title: 'DESIGN',
      description: 'Our hobby is a modern and convenient design, the key to successful communication with the client.'
    },
    {
      subtitle: 'OUR PROCESS',
      title: 'CREATE',
      description: 'We transform ideas into exceptional experiences through meticulous attention to detail.'
    },
    {
      subtitle: 'OUR MISSION',
      title: 'INNOVATE',
      description: 'Pushing boundaries with cutting-edge solutions that elevate brands to new heights.'
    }
  ];

  const currentContent = slideContent[currentSlide - 1];

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-black to-gray-900">
      {/* Background Circles */}
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-rose-600/30 blur-3xl"></div>
      <div className="absolute right-10 bottom-10 w-48 h-48 rounded-full bg-rose-700/40 blur-2xl"></div>
      
      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mt-24 md:mt-0 z-10">
          <p className="text-gray-400 mb-2 tracking-wider">{currentContent.subtitle}</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">{currentContent.title}</h1>
          <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
            {currentContent.description}
          </p>
          
          <button className="group flex items-center space-x-2 border border-gray-700 rounded-full py-3 px-6 hover:bg-rose-600 hover:border-rose-600 transition-all duration-300">
            <span>See More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        {/* Image or 3D Element */}
        <div className="relative md:w-1/2 h-[50vh] md:h-[70vh] flex justify-center items-center">
          <div className="absolute right-0 top-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-rose-600 opacity-90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1601254339364-b478cf97e06d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jdG9wdXMlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="Classic sculpture" 
            className="absolute z-20 h-full object-cover mix-blend-lighten filter brightness-110 saturate-150"
          />
        </div>
      </div>
      
      {/* Slide Indicator */}
      <div className="absolute bottom-12 left-6 md:left-16 flex items-center space-x-3 z-10">
        <span className="text-sm text-gray-400">0{currentSlide}</span>
        <div className="relative w-32 h-px bg-gray-700">
          <div 
            className="absolute top-0 left-0 h-px bg-rose-600 transition-all duration-500"
            style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-400">0{totalSlides}</span>
      </div>
    </div>
  );
};

export default Hero;