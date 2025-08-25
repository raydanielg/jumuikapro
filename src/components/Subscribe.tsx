"use client";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend
    setDone(true);
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border p-8 md:p-10 bg-white/80 backdrop-blur">
          <h3 className="text-xl md:text-2xl font-semibold">
            Jisajili kupokea taarifa mpya
          </h3>
          <p className="text-gray-600 mt-2">
            Tutakutumia masasisho muhimu tu — hakuna spam.
          </p>
          <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
            <button
              type="submit"
              className="rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90"
            >
              Subscribe
            </button>
          </form>
          {done && (
            <div className="text-sm text-emerald-600 mt-3">
              Asante! Tumepokea barua pepe yako.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
