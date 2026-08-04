import React from 'react';
import { ArrowRight, Check, Navigation } from 'lucide-react';
import { CONSULTANT_HERO_IMAGE } from '../data/agencyData';

interface HeroProps {
  onOpenAIAdvisor: () => void;
  onOpenSecurity: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAIAdvisor,
  onOpenSecurity,
  onOpenConsultation
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-slate-100 pt-10 pb-20 border-b border-slate-800/80">
      
      {/* Background Subtle Wave Curves & Glowing Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Background SVG Wave Lines (Inspo Accent) */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,200 Q400,100 800,300 T1600,200" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <path d="M-100,350 Q500,200 1000,400 T1800,300" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline & Bullet Points (Inspo Text) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] font-sans">
              Business Innovation With <br />
              <span className="text-white">IT Services Expertise</span>
            </h1>

            {/* Checkmark List */}
            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-sm font-semibold text-slate-200 pt-1">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                <span>Deployment and Support</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                <span>Flexibility and Adaptability</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                <span>Discovery and Analysis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                <span>Competitive Advantage</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              {/* GET STARTED Button (Inspo Orange Pill Button) */}
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 rounded-full bg-[#ff8a00] hover:bg-[#e07900] text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all transform hover:scale-[1.03] flex items-center gap-2 cursor-pointer"
              >
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

          </div>

          {/* Right Column - Hero Person Image + Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Graphic Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full border border-cyan-400/20 animate-pulse" />
              <div className="absolute w-[440px] sm:w-[500px] h-[440px] sm:h-[500px] rounded-full border border-blue-500/10" />
            </div>

            <div className="relative z-10 max-w-md w-full">
              
              {/* Consultant Person Portrait Image */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-2xl backdrop-blur-sm group">
                <img
                  src={CONSULTANT_HERO_IMAGE}
                  alt="IT Services & Solution Specialist"
                  className="w-full h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Gradient Fade at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              {/* Floating Pill Badge 1: Solution */}
              <div className="absolute top-1/2 -left-6 sm:-left-8 -translate-y-12 z-20 flex items-center gap-1.5 bg-indigo-600/90 text-white px-4 py-2 rounded-full text-xs font-bold shadow-2xl border border-indigo-400/40 backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
                <span>Solution</span>
                <Navigation className="w-3.5 h-3.5 text-indigo-200 rotate-45 fill-indigo-200" />
              </div>

              {/* Floating Pill Badge 2: Technology */}
              <div className="absolute bottom-16 -right-4 sm:-right-6 z-20 flex items-center gap-1.5 bg-cyan-400 text-slate-950 px-4 py-2 rounded-full text-xs font-black shadow-2xl border border-cyan-200 animate-bounce" style={{ animationDuration: '5s' }}>
                <Navigation className="w-3.5 h-3.5 text-slate-950 rotate-45 fill-slate-950" />
                <span>Technology</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
