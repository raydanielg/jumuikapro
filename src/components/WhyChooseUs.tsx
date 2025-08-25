export default function WhyChooseUs() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Kwa Nini Utuchague
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border bg-white/80 backdrop-blur p-6">
            <div className="font-semibold">Uzoefu</div>
            <p className="text-sm text-gray-600 mt-2">
              Timu yenye uzoefu mkubwa wa kujenga mifumo imara.
            </p>
          </div>
          <div className="rounded-xl border bg-white/80 backdrop-blur p-6">
            <div className="font-semibold">Msaada</div>
            <p className="text-sm text-gray-600 mt-2">
              Msaada wa haraka na unaoaminika kila wakati.
            </p>
          </div>
          <div className="rounded-xl border bg-white/80 backdrop-blur p-6">
            <div className="font-semibold">Ubunifu</div>
            <p className="text-sm text-gray-600 mt-2">
              Suluhisho bunifu, rafiki kwa watumiaji na biashara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
