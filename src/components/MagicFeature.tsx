'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiChevronDown } from 'react-icons/fi';

const accommodations = [
  { name: 'Kruger Park Lodge', image: '/images/images/amazing-shot-blue-nile-waterfall-ethiopia_181624-29509.jpg' },
  { name: 'Kruger Adventure Lodge', image: '/images/images/tree-field-against-sky_1048944-11584170.jpg' },
  { name: 'Kruger Cliffs', image: '/images/images/aerial-view-beautiful-hotel-water-ocean-sunset_159067-588.jpg' },
  { name: 'Pestana Kruger Lodge', image: '/images/images/group-elephants-big-green-tree-wilderness_181624-16897.jpg' },
];

export default function MagicFeature() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="relative h-[450px] flex items-center justify-center">
            <div className="absolute inset-8 border-2 border-dashed border-green-300 rounded-3xl"></div>
            <div className="relative w-[80%] h-[90%] bg-green-50/70 rounded-3xl shadow-lg p-6 flex flex-col justify-between">
              <div className="bg-white rounded-xl shadow-md p-3 flex items-start gap-3 text-sm">
                <FiCheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Your last sent quote was opened 5 times</p>
                  <ul className="list-disc list-inside text-gray-500 mt-1 text-xs">
                    <li>Last opened 2 days ago</li>
                    <li>First opened 32 days ago</li>
                  </ul>
                </div>
              </div>
              <div className="flex-grow flex items-center justify-center">
                 <svg viewBox="0 0 200 300" className="h-[80%] w-auto text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M125.4,299.5c-2.2,0-4.3-0.9-5.9-2.5l-20.3-20.3c-3.3-3.3-3.3-8.6,0-11.8c3.3-3.3,8.6-3.3,11.8,0l18.3,18.3l-1.9-103.5c-0.2-11.5-9.7-20.6-21.2-20.6h-1.8c-11.8,0-21.3,9.5-21.3,21.3v23.2c0,4.7-3.8,8.5-8.5,8.5s-8.5-3.8-8.5-8.5v-23.2c0-21.2,17.2-38.3,38.3-38.3h1.8c20.9,0,37.9,16.6,38.3,37.4l1.9,103.5l18.3-18.3c3.3-3.3,8.6-3.3,11.8,0c3.3,3.3,3.3,8.6,0,11.8l-20.3,20.3C129.7,298.6,127.6,299.5,125.4,299.5z"/>
                  <path d="M89.7,276.5c-2.2,0-4.3-0.9-5.9-2.5L63.5,253.7c-3.3-3.3-3.3-8.6,0-11.8c3.3-3.3,8.6-3.3,11.8,0l18.3,18.3V156.7c0-11.8,9.5-21.3,21.3-21.3h1.8c11.5,0,20.8,9.1,21.2,20.6l1.9,103.5c0.1,4.7-3.7,8.6-8.4,8.7c-4.7,0.1-8.6-3.7-8.7-8.4l-1.9-101.5c-0.2-4.7-4-8.4-8.7-8.4h-1.8c-4.7,0-8.5,3.8-8.5,8.5v103.5l18.3-18.3c3.3-3.3,8.6-3.3,11.8,0c3.3,3.3,3.3,8.6,0,11.8l-20.3,20.3C94,275.6,91.9,276.5,89.7,276.5z"/>
                  <path d="M138.8,160.2c-23.5,0-42.5-19-42.5-42.5V96.4c0-23.5,19-42.5,42.5-42.5c12.5,0,24.1,5.4,32.2,14.4c-3.3-1.4-6.9-2.2-10.7-2.2c-16.5,0-29.8,13.4-29.8,29.8v21.2c0,16.5,13.4,29.8,29.8,29.8c3.8,0,7.4-0.7,10.7-2.2C162.9,154.8,151.3,160.2,138.8,160.2z"/>
                  <path d="M138.8,143.2c-14.6,0-26.5-11.9-26.5-26.5V95.4c0-14.6,11.9-26.5,26.5-26.5c14.6,0,26.5,11.9,26.5,26.5v21.2C165.3,131.3,153.4,143.2,138.8,143.2z M138.8,75.4c-11.3,0-20.5,9.2-20.5,20.5v21.2c0,11.3,9.2,20.5,20.5,20.5c11.3,0,20.5-9.2,20.5-20.5V95.9C159.3,84.6,150.1,75.4,138.8,75.4z"/>
                  <path d="M138.6,68.9c-2.3,0-4.1-1.8-4.1-4.1V28.3c0-15.5-12.6-28.1-28.1-28.1S78.2,12.8,78.2,28.3v10.6c0,2.3-1.8,4.1-4.1,4.1s-4.1-1.8-4.1-4.1V28.3C69.9,10.5,83.4,0,100.2,0c18,0,32.6,14.6,32.6,32.6v32.2C132.8,67.1,131,68.9,128.7,68.9h-0.1C126.4,68.9,124.6,67.1,124.6,64.8z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <h3 className="text-8xl font-bold text-green-500/20 tracking-widest leading-none select-none">Magic & Fun</h3>
            <h4 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">
              Let Jumuika do the work.
            </h4>
            <p className="mt-4 text-gray-600 text-lg">
              Jumuika is smart and helps you every step of the way. With suggestions and auto-generated content, it learns your preferences and is truly flexible. Like magic, but you are in full control.
            </p>
            <Link href="/features" className="inline-flex items-center gap-2 text-green-600 font-semibold mt-6 group">
              Learn more about the features
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Itinerary Builder Mockup */}
        <div className="mt-12 md:-mt-16 lg:-mt-24 relative z-10">
          <div className="bg-white rounded-xl shadow-2xl shadow-gray-300/50 border p-2 max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 font-medium">
                    <th className="p-2 w-1/4">Days</th>
                    <th className="p-2 w-1/2">Accommodation</th>
                    <th className="p-2 w-1/4">Main Destination</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2 font-semibold">Day 1 <span className="font-normal text-gray-400 block">Sep 18</span></td>
                    <td className="p-2">
                      <div className="relative group">
                        <div className="w-full border rounded-md px-3 py-1.5 flex items-center justify-between bg-white shadow-sm">
                          <span>Kruger</span>
                          <FiChevronDown className="text-gray-400" />
                        </div>
                        <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg mt-1 z-20 opacity-100 visible transition-all duration-300">
                          {accommodations.map((item, index) => (
                            <div key={index} className={`px-3 py-2 flex items-center gap-3 cursor-pointer hover:bg-green-50 ${index === 1 ? 'bg-green-100' : ''}`}>
                              <Image src={item.image} alt={item.name} width={40} height={40} className="rounded-md object-cover w-10 h-10" />
                              <span className="font-medium text-gray-800">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-gray-400">Please select accommodation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
