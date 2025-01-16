"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/UseAuth";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function AuthForm({ type }: { type: "login" | "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { signIn, signUp } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      if (type === "login") {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-black/80 dark:text-white/80 mb-1"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-md bg-white dark:bg-black"
        />
      </div>

      <div>
        <Label
          htmlFor="password"
          className="block text-sm font-medium text-black/80 dark:text-white/80 mb-1"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-md bg-white dark:bg-black"
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      <Button
        type="submit"
        className="w-full px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-90 transition-opacity"
      >
        {type === "login" ? "Sign In" : "Sign Up"}
      </Button>
    </form>
  );
}
