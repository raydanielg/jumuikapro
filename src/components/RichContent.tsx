import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

export default function RichContent() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 text-sm font-semibold text-gray-800 z-10">
                <div className="flex text-yellow-400">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar className="text-yellow-200" />
                </div>
                <span>BY EXPERTS</span>
              </div>
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/images/giraffe-wild_23-2151708974.jpg" 
                  alt="Giraffe in the wild"
                  layout="fill"
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-green-500 p-2 rounded-full z-10">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-gray-700">Sample Itinerary Snippet</h4>
              <p className="text-sm text-gray-500 mt-2">Morning: Arrive at Tarangire National Park for a game drive. Enjoy the diverse wildlife and stunning landscapes. Lunch: Picnic lunch at a scenic spot inside the park.</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:pt-8">
            <h3 className="text-8xl font-bold text-green-500/20 tracking-widest leading-none select-none">Rich Content</h3>
            <h4 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">
              Build Breathtaking Itineraries in Minutes.
            </h4>
            <p className="mt-4 text-gray-600 text-lg">
              Access Jumuika's extensive library of expert-vetted destinations, accommodations, and activities. Every entry is complete with professional photos and compelling descriptions, saving you hours of research. Impress your clients and close sales faster with stunning, content-rich proposals.
            </p>
            <Link href="/features" className="inline-flex items-center gap-2 text-green-600 font-semibold mt-6 group">
              Learn more about our content library
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                <Image src="/images/images/amazing-shot-blue-nile-waterfall-ethiopia_181624-29509.jpg" layout="fill" className="object-cover" alt="Deadvlei - Namibia" />
                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Deadvlei - Namibia</div>
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                <Image src="/images/images/tree-field-against-sky_1048944-11584170.jpg" layout="fill" className="object-cover" alt="Kruger - South Africa" />
                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Kruger - South Africa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
