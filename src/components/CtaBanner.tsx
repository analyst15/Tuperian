import React from 'react';
import { Laptop, ArrowRight, ShieldCheck } from 'lucide-react';

interface CtaBannerProps {
  onTalkToSpecialist: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onTalkToSpecialist }) => {
  return (
    <section className="relative bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Vibrant Royal Blue Banner Card */}
        <div className="relative rounded-[28px] bg-[#3b52f6] text-white p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-blue-400/30">
          
          {/* Decorative Vector Arcs & Line Mesh in Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path 
                d="M 600,0 C 700,100 800,200 1000,300 M 550,0 C 670,110 780,220 1000,270 M 500,0 C 640,120 760,240 1000,240" 
                fill="none" 
                stroke="white" 
                strokeWidth="1.5" 
              />
              <circle cx="900" cy="200" r="180" fill="none" stroke="white" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            {/* Left Graphic Element: Specialist Illustration / Tech Badge */}
            <div className="flex items-center gap-5 shrink-0">
              <div className="relative">
                {/* Glowing Circle Backdrop */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white text-[#3b52f6] flex items-center justify-center shadow-lg">
                    <Laptop className="w-9 h-9 sm:w-11 sm:h-11 text-[#3b52f6] stroke-[2]" />
                  </div>
                </div>
                {/* Status Dot */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#3b52f6]"></span>
                </span>
              </div>

              <div className="hidden sm:block text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-100 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>IT Solutions Hub</span>
                </div>
                <p className="text-sm font-semibold text-white/90 mt-0.5">
                  Available 24/7 for Enterprise Support
                </p>
              </div>
            </div>

            {/* Center Heading */}
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-sans">
                Stay Connected With Cutting Edge IT
              </h2>
            </div>

            {/* Right Button: Talk to a Specialist */}
            <div className="shrink-0">
              <button
                onClick={onTalkToSpecialist}
                className="group inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-slate-100 px-7 py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>TALK TO A SPECIALIST</span>
                <ArrowRight className="w-4 h-4 text-[#3b52f6] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
