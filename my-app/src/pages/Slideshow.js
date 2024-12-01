
import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  const images = [
    "images/banner.jpeg",
    "images/slider1.jpeg",
    "images/cf2.jpg",
    "images/cf3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="slider-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slider-image"
      />
    </div>
  );
};

export default Slideshow;