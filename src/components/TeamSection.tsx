import React from 'react';
import { Code, Calculator, Share2, Terminal, UserCheck, Briefcase, ShieldCheck } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  icon: React.ElementType;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '0',
    name: 'Thomas Kuya',
    role: 'Director',
    initials: 'TK',
    icon: Briefcase
  },
  {
    id: '1',
    name: 'Titus Tum',
    role: 'Software Engineer',
    initials: 'TT',
    icon: Code
  },
  {
    id: '2',
    name: 'Alex Okeyo',
    role: 'Software Engineer',
    initials: 'AO',
    icon: Terminal
  },
  {
    id: '3',
    name: 'Rosey Tiile',
    role: 'Accountant',
    initials: 'RT',
    icon: Calculator
  },
  {
    id: '4',
    name: 'Emmanuel Oloishorua',
    role: 'Risk & Compliance',
    initials: 'EO',
    icon: ShieldCheck
  },
  {
    id: '5',
    name: 'John Kantai',
    role: 'Social Media Manager',
    initials: 'JK',
    icon: Share2
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800/80 relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Wave Arcs in background */}
      <svg className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none" viewBox="0 0 400 400">
        <circle cx="400" cy="0" r="300" fill="none" stroke="#3b52f6" strokeWidth="2" />
        <circle cx="400" cy="0" r="220" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none" viewBox="0 0 400 400">
        <circle cx="0" cy="400" r="280" fill="none" stroke="#3b52f6" strokeWidth="2" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section (Inspo Alignment) */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          
          {/* Eyebrow: ← OUR EXPERT → */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#3b52f6] uppercase tracking-wider">
            <span>←</span>
            <span>OUR EXPERT</span>
            <span>→</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-sans">
            See Our Skilled Expert Team
          </h2>
        </div>

        {/* Team Cards Grid (3 up 3 down on laptop/desktop screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
          {TEAM_MEMBERS.map((member) => {
            const IconComponent = member.icon;

            return (
              <div 
                key={member.id}
                className="group relative rounded-[28px] bg-[#3b52f6] p-6 pt-10 flex flex-col items-center justify-between shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1.5 transition-all duration-300 border border-blue-500/30 overflow-hidden min-h-[340px]"
              >
                {/* Decorative Concentric Arcs in Top Left of Card (matching Inspo texture) */}
                <svg className="absolute top-3 left-3 w-16 h-16 opacity-30 text-white pointer-events-none" viewBox="0 0 100 100">
                  <path d="M 0 30 A 30 30 0 0 1 30 0" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M 0 50 A 50 50 0 0 1 50 0" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>

                {/* Central Stylized Avatar Box (No photos, pure vector & icon design) */}
                <div className="relative my-auto flex flex-col items-center">
                  
                  {/* Outer Glowing Circle */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                    
                    {/* Inner White Badge with Initials & Role Icon */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-[#3b52f6] flex flex-col items-center justify-center shadow-md">
                      <IconComponent className="w-7 h-7 text-[#3b52f6] mb-0.5 stroke-[2.2]" />
                      <span className="text-xs font-black tracking-wider text-slate-800">
                        {member.initials}
                      </span>
                    </div>

                  </div>

                  {/* Verification / Expert Badge */}
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-bold text-white border border-white/25">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Verified Expert</span>
                  </div>

                </div>

                {/* Bottom Notch White Label (Inspo Card Shape) */}
                <div className="w-full bg-white rounded-2xl py-3.5 px-4 text-center shadow-md mt-6 transform group-hover:bg-slate-50 transition-colors">
                  <h3 className="text-base font-extrabold text-slate-900 font-sans tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {member.role}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
