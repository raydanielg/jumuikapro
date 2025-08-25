'use client';

import Link from 'next/link';

export default function EfficientFeature() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h3 className="text-8xl font-bold text-green-500/20 tracking-widest leading-none select-none">Be Efficient</h3>
            <h4 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">
              Spend less time and money.
            </h4>
            <p className="mt-4 text-gray-600 text-lg">
              Streamline your entire sales process, from quote creation to client management. Jumuika's collaborative tools empower your team to work together seamlessly, while our transparent pricing saves you from the costly licenses and hidden fees common with other platforms. Invest in efficiency, not just software.
            </p>
            <Link href="/features" className="inline-flex items-center gap-2 text-green-600 font-semibold mt-6 group">
              Learn more about the features
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right Column */}
          <div className="relative h-[350px] flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-dashed border-green-300 rounded-3xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute top-1/2 left-0 w-1/2 h-1/2">
                <svg className="w-full h-full text-green-300" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 C50,0 50,0 100,50" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
                </svg>
              </div>
              <div className="relative z-10 animate-bounce-slow">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg border-4 border-white" style={{ transform: 'rotateX(60deg) rotateZ(-30deg)' }}>
                  1
                </div>
              </div>
              <div className="absolute bottom-1/4 w-32 h-8 bg-gray-200 rounded-full" style={{ transform: 'perspective(100px) rotateX(60deg)' }}>
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>
               <div className="absolute bottom-8 right-8 bg-green-500 p-2 rounded-full z-10 transform rotate-45">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
