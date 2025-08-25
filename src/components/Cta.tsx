import Link from 'next/link';

export default function Cta() {
  return (
    <section className="w-full bg-green-100/70">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-semibold text-gray-800 text-center md:text-left">
            → Start sending the best quotes, today!
          </h3>
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors shadow-lg">
            Sign Up Free →
          </Link>
        </div>
      </div>
    </section>
  );
}
