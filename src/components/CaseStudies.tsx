import React from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { ArrowRight, Star, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';

interface CaseStudiesProps {
  onBookConsultation: (service?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onBookConsultation }) => {
  return (
    <section id="case-studies" className="py-16 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-500/30">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>Proven Small Business Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Success Stories & Measurable ROI
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            See how Tuperian Agency eliminated technical bottlenecks, secured client data, and drove measurable growth for small businesses across industries.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map(study => (
            <div
              key={study.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-xl"
            >
              <div>
                {/* Image & Header Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.clientName}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 border border-slate-800">
                    {study.industry}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white">{study.clientName}</h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-5">
                  
                  {/* Challenge & Solution */}
                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-extrabold text-rose-400 uppercase tracking-wider block text-[10px] mb-1">The Challenge</span>
                      <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <span className="font-extrabold text-cyan-400 uppercase tracking-wider block text-[10px] mb-1">Tuperian Solution</span>
                      <p className="text-slate-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    {study.results.map((res, idx) => (
                      <div key={idx}>
                        <div className="text-sm sm:text-base font-extrabold text-cyan-400">{res.value}</div>
                        <div className="text-[9px] text-slate-400 uppercase font-semibold leading-tight mt-0.5">{res.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs italic text-slate-300">"{study.testimonial.quote}"</p>
                    <div className="text-[11px] font-bold text-slate-200">
                      — {study.testimonial.author}, <span className="text-slate-400 font-normal">{study.testimonial.role}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookConsultation(study.serviceCategory)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 border border-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Achieve Similar Results</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
