import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen bg-teal-900 bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: 'url("/bg-piling1.jpg")' }}
    >
      {/* Established text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="rotate-180 [writing-mode:vertical-lr] text-white font-['Karla'] text-[24px] leading-[32px] tracking-[0.3em] font-normal opacity-80">
          ESTABLISHED 1991
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          <div className="relative z-10 flex flex-col items-start justify-center h-full pl-[30px]">
            <h1 className="text-6xl lg:text-7xl font-serif text-orange-500 mb-6 leading-tight">
              Ideas<br />
              <span className="text-white">Come from</span><br />
              <span className="text-white">Natural</span>
            </h1>
            
            <h2 className="text-2xl font-bold text-white/90 mb-8 tracking-wide">
              BRANDING & INTERACTION
            </h2>
            
            <p className="text-gray-300/90 mb-10 max-w-md text-lg leading-relaxed">
              We create high quality products to help make life more interesting & better
            </p>

            <button className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 group hover:scale-110 mb-[100px]">
              <Play size={20} />
            </button>
          </div>

          <div className="hidden md:block" />
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 pb-8 mt-[120px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="text-white/90">
                LW Studio 2025. BY FLASH CODED
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-white/90 hover:text-orange-500 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-white/90 hover:text-orange-500 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-white/90 hover:text-orange-500 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === 1 ? 'bg-orange-500' : 'bg-white/50 hover:bg-orange-500'
            } cursor-pointer hover:scale-150`}
          />
        ))}
      </div>
    </div>
  );
}