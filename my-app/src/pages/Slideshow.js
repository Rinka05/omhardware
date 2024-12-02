
import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  const images = [
    "images/slider1.jpeg",
    "images/slider2.jpeg",
    "images/slider3.jpeg",
    "images/slider4.jpeg",
    "images/slider5.jpeg",
    "images/slider6.jpeg",
    "images/slider7.jpeg",
    "images/slider8.jpeg",
    "images/slider9.jpeg",
    "images/slider10.jpeg",
    "images/slider11.jpeg",
    "images/slider12.jpeg",
    "images/slider13.jpeg",
    "images/slider14.jpeg",
    "images/slider15.jpeg",
    "images/slider16.webp",
    "images/slider17.webp",
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