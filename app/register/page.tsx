"use client";

import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/hooks/UseAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RegisterPage() {
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
          <h1 className="text-4xl lg:text:5xl tracking-tighter font-bold">
            Create an account
          </h1>
          <p className="text-black/60 dark:text-white/60">
            Get started with{" "}
            <span className={`${pacifico.className}`}> Snip</span>
          </p>
        </div>
        <AuthForm type="register" />
      </div>
    </div>
  );
}
