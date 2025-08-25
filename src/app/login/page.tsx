"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // TODO: Hook this to your Laravel auth endpoint (e.g., POST /api/login)
      // const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api";
      // const res = await fetch(`${apiBase}/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      // if (!res.ok) throw new Error("Login failed");
      // const data = await res.json();
      // Save token/session as needed and redirect
      alert("Login submitted (demo). Connect to API next.");
    } catch (err: any) {
      setError(err?.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">Welcome back</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="••••••••"
              required
            />
          </div>
          {error && (
            <div className="text-sm text-red-600" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-black text-white py-2 text-sm font-medium hover:bg-black/90 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          <span>Don't have an account? </span>
          <Link href="/register" className="text-black hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}
