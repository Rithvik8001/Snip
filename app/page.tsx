"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Github, Moon, Sun, Link2, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import DotPattern from "@/components/ui/dot-pattern";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full p-3">
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between">
          {/* Logo or Title */}
          <h1
            className={`text-3xl tracking-tighter font-bold ${pacifico.className}`}
          >
            Snip
          </h1>
          <div className="flex justify-between items-center gap-4">
            <Github />
            {mounted && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-[60vh] flex flex-col items-center pt-24 text-center md:pt-24 lg:pt-32 z-50">
        <DotPattern className="opacity-40" />
        <div className="w-full max-w-5xl mx-auto text-center mb-12">
          <h1 className="lg:text-7xl md:text-5xl sm:text-5xl text-5xl font-extrabold tracking-tighter ">
            Enhance Your Link Management
          </h1>
          <p className="text-center lg:text-md text-md mt-4 sm:text-[15px] ">
            Snip is an open-source platform that allows you to create, manage,
            and share short links with ease. It's fast, secure, and easy to use.
          </p>
          <div className="flex items-center justify-center mt-4">
            <Link href={"/register"}>
              <Button>
                <Link2 className="w-5 h-5" />
                Create Links
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full text-center p-4 max-w-5xl">
          <h4 className="flex items-center font-bold text-gray-500">
            <Heart className="w-5 h-5 mr-2" />
            Made by Rithvik
          </h4>
        </div>
      </div>
    </div>
  );
}
