import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/story1.jpg";
import image2 from "../assets/images/Pentest.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/web.jpg";

const slidesData = [
  {
    image: image1,
    title: "Risk Analysis & Control",
    subtitle: "Risk identification and mitigation services",
  },
  {
    image: image2,
    title: "Penetration Testing Services",
    subtitle: "Penetarating through your systems and websites safely to identify Vulnerabilities",
  },
  {
    image: image3,
    title: "Software Development",
    subtitle: "Building modern, secure, future-ready software solutions",
  },
  {
    image: image4,
    title: "Full-Stack Web Development",
    subtitle: "Modern, scalable,fast and responsive website solutions",
  },
  
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const delay = 6000;

  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, delay);

    return () => clearInterval(intervalRef.current);
  }, []);

  
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, delay);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slidesData.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slidesData.length - 1 : prev - 1
    );
    resetInterval();
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden group">
      
    
      <div
        className="flex h-full transition-transform duration-[900ms] ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative overflow-hidden"
          >
           
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-100 transition-transform duration-[6000ms] ease-linear"
            />

            
            <div className="absolute inset-0 bg-black/30"></div>

          
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-15">
              <h1 className="text-3xl md:text-3xl font-bold mb-4 animate-fadeUp">
                {slide.title}
              </h1>

              <p className="max-w-1xl text-sm md:text-lg opacity-90 animate-fadeUp delay-200">
                {slide.subtitle}
              </p>

              <Link
                to="/booking"
                className="mt-6 inline-block px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white hover:scale-105 transition animate-fadeUp delay-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        ›
      </button>

  
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              resetInterval();
            }}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-blue-600 scale-125"
                : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;