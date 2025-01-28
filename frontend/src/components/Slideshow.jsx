import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets'; 

const Slideshow = () => {
  // Set initial image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the slideshow
  const images = [
    assets.heroimage1, // Replace with actual images in your assets
    assets.heroimage2,
    assets.heroimage3
   
  ];

  // Next image handler
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous image handler
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
    <div className="relative w-full sm:w-1/2">
      <img className="w-full h-auto object-cover" src={images[currentIndex]} alt="Slideshow" />
      
      {/* Left navigation button */}
      <button 
        onClick={prevImage} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      
      {/* Right navigation button */}
      <button 
        onClick={nextImage} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
