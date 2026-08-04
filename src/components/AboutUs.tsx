import React from 'react';
import { Cpu, Layout, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ABOUT_MAIN_IMAGE = 'https://firebasestorage.googleapis.com/v0/b/keiyian-farm.firebasestorage.app/o/_6afa53cc-f90a-4b5a-a629-8447e53ddde4.jpeg?alt=media&token=486f60da-d799-4d41-baf9-020977741e3e';
export const ABOUT_TEAM_IMAGE = 'https://firebasestorage.googleapis.com/v0/b/keiyian-farm.firebasestorage.app/o/_94b6369e-7568-4c37-8d17-30c0cf4e5d91.jpeg?alt=media&token=f759c7c6-043c-4d9c-98db-77ce8995036b';

interface AboutUsProps {
  onOpenConsultation?: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow & Wave Accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Background Wave Arc */}
      <svg className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none" viewBox="0 0 400 400">
        <circle cx="0" cy="400" r="300" fill="none" stroke="#3b52f6" strokeWidth="2" />
        <circle cx="0" cy="400" r="240" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="0" cy="400" r="180" fill="none" stroke="#818cf8" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Dual Image Layout with Circular Badge (Inspo Layout) */}
          <div className="lg:col-span-6 relative">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Primary Main Image - Engineer at Workstation */}
              <div className="relative rounded-[32px] overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group w-full lg:w-[85%] h-[400px] sm:h-[460px]">
                <img
                  src={ABOUT_MAIN_IMAGE}
                  alt="Senior IT Engineer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Circular Rotating "EXPLORE MORE ↗" Badge (Inspo Accent) */}
              <div className="absolute top-0 right-4 sm:right-12 lg:right-10 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#3b52f6] text-white p-2 shadow-2xl flex items-center justify-center border-4 border-slate-950 transform hover:scale-110 transition-transform cursor-pointer">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[10.5px] font-bold uppercase fill-white tracking-widest">
                      <textPath href="#circlePath" startOffset="0%">
                        • EXPLORE MORE • EXPLORE MORE
                      </textPath>
                    </text>
                  </svg>
                  <ArrowUpRight className="absolute w-7 h-7 text-white stroke-[2.5]" />
                </div>
              </div>

              {/* Secondary Overlapping Image - Team Collaboration */}
              <div className="absolute -bottom-10 right-0 sm:right-4 z-20 w-[62%] sm:w-[55%] h-[200px] sm:h-[240px] rounded-[28px] overflow-hidden border-4 border-slate-950 shadow-2xl bg-slate-900 group">
                <img
                  src={ABOUT_TEAM_IMAGE}
                  alt="IT Strategy Team Collaboration"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

          {/* Right Column - Text Content & Key Features & Metrics (Inspo Matching) */}
          <div className="lg:col-span-6 space-y-8 pt-8 lg:pt-0">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#3b52f6] uppercase tracking-wider">
              <span>←</span>
              <span>ABOUT COMPANY</span>
              <span>→</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-sans">
              Navigating Tech Horizons Together
            </h2>

            {/* Paragraph Text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              There are many variations of passages of IT ingenuity available, but the majority have suffered alteration in some form, by injected innovation, or randomized words which don't look even slightly believable. If you need a reliable technology partner to elevate your digital operations.
            </p>

            {/* Two Side-by-Side Feature Cards (Inspo Style) */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              
              {/* Feature 1: Back-End Development */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 hover:border-[#3b52f6]/60 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-white flex items-center justify-center shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-white/90 text-[#3b52f6] flex items-center justify-center shadow-sm">
                    <Cpu className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Back-End Development</h4>
                </div>
              </div>

              {/* Feature 2: Product Design */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 hover:border-[#3b52f6]/60 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-white flex items-center justify-center shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-white/90 text-[#3b52f6] flex items-center justify-center shadow-sm">
                    <Layout className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white">Product Design</h4>
                </div>
              </div>

            </div>

            {/* Metric Counters Bar (10 Projects, 10 Clients, 3 Team Members) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              
              {/* Stat 1 */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                  10
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400">
                  Projects Done
                </div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                  10
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400">
                  Happy Clients
                </div>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                  3
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400">
                  Team Members
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
