"use client";

import Image from "next/image";
import Hyperspeed from "@/components/Hyperspeed";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center font-sans relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
      </div>
      <main className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-10 w-full max-w-full px-4">
          <div className="text-center space-y-8 animate-fade-in relative z-20">
            <h1 className="text-7xl md:text-9xl font-bold text-white text-center drop-shadow-2xl leading-tight tracking-tighter">
              Nirmala.
            </h1>

            <div className="h-1.5 w-48 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-80"></div>

            <h2 className="text-2xl md:text-4xl font-light text-white/95 w-full whitespace-nowrap overflow-hidden text-ellipsis px-4 leading-relaxed drop-shadow-lg tracking-wide">
              Mapping Money, Risk, and Resilience Across Financial Networks.
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto justify-center pt-8">
              <a
                className="group relative overflow-hidden px-10 py-4 rounded-full bg-white text-black font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)] transform hover:scale-105"
                href="#explore"
              >
                <span className="relative z-10">Explore</span>
                <div className="absolute inset-0 bg-white/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
              <a
                className="group relative px-10 py-4 rounded-full border-2 border-white text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transform hover:scale-105"
                href="#learn"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/10 rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
