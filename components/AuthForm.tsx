"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/UseAuth";
import Link from "next/link";

export default function AuthForm({ type }: { type: "login" | "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signIn, signUp } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await (type === "login"
      ? signIn(email, password)
      : signUp(email, password));

    if (error) {
      setError(error);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-black/80 dark:text-white/80 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-md bg-white dark:bg-black"
          disabled={loading}
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-black/80 dark:text-white/80 mb-1"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-md bg-white dark:bg-black"
          disabled={loading}
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm bg-red-100 dark:bg-red-900/30 p-3 rounded-md">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
            {type === "login" ? "Signing in..." : "Creating account..."}
          </span>
        ) : type === "login" ? (
          "Sign In"
        ) : (
          "Sign Up"
        )}
      </button>

      <p className="text-center text-sm text-black/60 dark:text-white/60">
        {type === "login" ? (
          <>
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-black dark:text-white hover:opacity-80"
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-black dark:text-white hover:opacity-80"
            >
              Sign in
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
