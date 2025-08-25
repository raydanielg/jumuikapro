import Image from 'next/image';
import Link from 'next/link';

export default function QuoteFeature() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-lg text-gray-600">Helping safari companies grow their business.</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          Improve your sales, get more bookings.
        </h2>
        <div className="mt-4 mx-auto w-24 h-1.5 bg-green-500"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 mt-16 md:mt-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-8xl font-bold text-green-500/20 tracking-widest leading-none select-none">Easy</h3>
            <h4 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">
              Create your first quote in a few minutes.
            </h4>
            <p className="mt-4 text-gray-600 text-lg">
              Designed with user-friendliness in mind. Jumuika will guide you all the way, making quote creation a breeze.
            </p>
            <Link href="/features" className="inline-flex items-center gap-2 text-green-600 font-semibold mt-6 group">
              Learn more about the features
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="relative h-[450px] flex items-center justify-center group">
            <div className="absolute inset-10 border-2 border-dashed border-green-400 rounded-3xl"></div>
            <div className="relative w-[70%] h-[70%] transform transition-transform duration-500 group-hover:scale-105">
              <div className="absolute -top-10 -left-10 w-full h-full transform -rotate-12 transition-transform duration-500 group-hover:-rotate-15">
                <Image
                  src="/images/images/jungle-safari-with-animals-explorers-jeep-car-driving_1172922-2449.jpg"
                  alt="Safari Itinerary Mockup 1"
                  layout="fill"
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute top-10 left-10 w-full h-full transform rotate-6 transition-transform duration-500 group-hover:rotate-10">
                <Image
                  src="/images/images/crossroad-car-safari-scene_23-2151822338.jpg"
                  alt="Safari Itinerary Mockup 2"
                  layout="fill"
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
