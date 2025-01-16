"use client";

import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/hooks/UseAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tighter">
            Welcome back
          </h1>
          <p className="text-black/60 dark:text-white/60">
            Sign in to your account
          </p>
        </div>
        <AuthForm type="login" />
      </div>
    </div>
  );
}
