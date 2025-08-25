'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const backgroundImages = [
  '/images/images/aerial-view-beautiful-hotel-water-ocean-sunset_159067-588.jpg',
  '/images/images/africa-tanzania-serengeti-tourists-photograph-pride-lions_135785-160.jpg',
  '/images/images/amazing-shot-blue-nile-waterfall-ethiopia_181624-29509.jpg',
  '/images/images/group-elephants-big-green-tree-wilderness_181624-16897.jpg'
];

export default function Hero() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-white">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <div 
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt="Safari experience"
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to Jumuika
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Experience the ultimate safari adventure with luxury accommodations and unforgettable experiences.
        </p>
        
        <div className="flex flex-row gap-2 w-full max-w-xs mx-auto">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-1.5 px-2 rounded-md transition duration-300 text-sm whitespace-nowrap">
            Sign Up Free
          </button>
          <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-1.5 px-2 rounded-md transition duration-300 text-sm border border-white/30 whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-4 border-white rounded-full flex justify-center p-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
