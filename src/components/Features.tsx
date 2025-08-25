"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

const images = [
  '/images/images/crossroad-car-safari-scene_23-2151822322.jpg',
  '/images/images/group-elephants-big-green-tree-wilderness_181624-16897.jpg',
  '/images/images/africa-tanzania-serengeti-tourists-photograph-pride-lions_135785-160.jpg',
  '/images/images/couple-taking-bus-tour-feeding-playing-with-giraffe-safari-open-park-zoo_46370-2833.jpg',
  '/images/images/aerial-view-beautiful-hotel-water-ocean-sunset_159067-588.jpg',
];

export default function Features() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[450px]">
            {images.map((src, index) => (
              <div
                key={index}
                className="absolute w-full h-full transition-all duration-700 ease-in-out rounded-3xl overflow-hidden shadow-2xl shadow-green-200/60 border-8 border-white"
                style={{
                  transform: `translateY(${(index - current) * 15}px) scale(${1 - (current - index) * 0.05})`,
                  zIndex: images.length - Math.abs(index - current),
                  opacity: Math.abs(index - current) > 2 ? 0 : 1,
                  transformOrigin: 'center bottom',
                }}
              >
                <Image
                  src={src}
                  alt={`Safari feature ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
          <div className="text-gray-700">
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              The Ultimate Toolkit for <br />
              <span className="font-bold text-gray-800">Tour Operators & Agents.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg">
              Jumuika empowers you to create stunning itineraries, manage bookings effortlessly, and communicate seamlessly with clients. Spend less time on admin and more time creating unforgettable safari experiences.
            </p>
            <Link href="/operators" className="inline-flex items-center gap-2 text-green-600 font-semibold mt-6 group">
              Learn more about our tools
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-24 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <FiCheck className="text-green-500" size={20} />
            <p>Optimize your <span className="font-bold">sales process</span></p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FiCheck className="text-green-500" size={20} />
            <p>Inspire and <span className="font-bold">blow away</span> clients</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FiCheck className="text-green-500" size={20} />
            <p>Create trust, <span className="font-bold">follow up faster</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
