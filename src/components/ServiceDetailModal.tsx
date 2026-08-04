import React from 'react';
import { X, CheckCircle, Clock, TrendingUp, Cpu, ArrowRight, ShieldCheck, Server, Smartphone, Globe, BarChart3 } from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Server,
  ShieldCheck,
  Smartphone,
  Globe,
  TrendingUp,
  BarChart3
};

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  const ServiceIcon = iconMap[service.iconName] || Cpu;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-8">
        
        {/* Header Image / Gradient Banner */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={service.imagePath}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Title Badge Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
                <ServiceIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Tuperian Practice Area</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{service.title}</h2>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          
          {/* Overview Section */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Overview</h3>
            <p className="text-slate-200 text-base leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Key Impact Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-semibold">Typical Timeline</span>
                <span className="text-xs font-bold text-slate-200">{service.avgTimeline}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-semibold">Expected Impact / ROI</span>
                <span className="text-xs font-bold text-slate-200">{service.typicalRoi}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-semibold">Target Audience</span>
                <span className="text-xs font-bold text-slate-200">{service.targetAudience}</span>
              </div>
            </div>
          </div>

          {/* Key Pillars / Capabilities */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Core Capabilities & Service Highlights</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {service.keyFeatures.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-1.5">
                  <h4 className="text-sm font-bold text-cyan-300">{feature.title}</h4>
                  <p className="text-xs text-slate-300 leading-normal">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables List */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Key Deliverables Included</h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-lg bg-slate-950/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Technologies & Standards Used</h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-md bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need custom modifications or a combined scope? We tailor every proposal to your budget.
            </div>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule {service.title} Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
