import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets'; 

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [
    assets.heroimage1,
    assets.heroimage2,
    assets.heroimage3
  ];

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300);
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full sm:w-1/2 overflow-hidden">
      <img 
        className={`w-full h-auto object-cover transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`} 
        src={images[currentIndex]} 
        alt="Slideshow" 
      />
      
      <button 
        onClick={prevImage} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-gray-700 bg-opacity-50 rounded-full hover:bg-opacity-80"
      >
        &#10094;
      </button>
      
      <button 
        onClick={nextImage} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 bg-gray-700 bg-opacity-50 rounded-full hover:bg-opacity-80"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
