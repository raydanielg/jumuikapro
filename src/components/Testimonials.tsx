'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    quote: "We've seen over a 40% increase in conversion rates to sales.",
    text: "We use Jumuika for 90% of our inquiries, and it has been a game-changer for our business since we switched to using it. The system is fast, professional, and highly efficient.",
    author: "Wayne Barnes, Co-founder",
    company: "The Kruger Safari Co",
    location: "South Africa",
    avatar: "/images/images/avatar.jpg"
  },
  {
    quote: "Jumuika has revolutionized our workflow.",
    text: "The ability to create stunning itineraries in minutes has freed up so much time for our team. Our clients are consistently impressed with the quality of our proposals.",
    author: "Jane Doe, Director",
    company: "Serengeti Adventures",
    location: "Tanzania",
    avatar: "/images/images/avatar.jpg"
  },
  {
    quote: "The best investment we've made in our business.",
    text: "The content library is a huge asset, and the support from the Jumuika team has been outstanding. I can't recommend it enough to other tour operators.",
    author: "John Smith, Owner",
    company: "Maasai Mara Explorers",
    location: "Kenya",
    avatar: "/images/images/avatar.jpg"
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute top-10 left-0 w-full whitespace-nowrap text-green-500/10 text-8xl font-bold tracking-widest leading-none select-none opacity-50">
        <div className="animate-marquee">
          <span>ClientTestimonials</span><span>ClientTestimonials</span><span>ClientTestimonials</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center z-10">
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full border border-gray-200">
            <span className="text-4xl text-green-400">“</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{testimonials[current].quote}</h3>
          <p className="mt-4 text-gray-600">{testimonials[current].text}</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Image src={testimonials[current].avatar} alt={testimonials[current].author} width={50} height={50} className="rounded-full" />
            <div>
              <p className="font-semibold text-gray-800">{testimonials[current].author}</p>
              <p className="text-sm text-gray-500">{testimonials[current].company} - {testimonials[current].location}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${current === index ? 'bg-green-500' : 'bg-gray-300 hover:bg-green-300'}`}
            />
          ))}
        </div>

        <div className="mt-12">
          <Link href="/testimonials" className="inline-block px-8 py-3 border border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors">
            Read All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
