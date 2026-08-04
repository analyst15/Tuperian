import React from 'react';
import { PRICING_PACKAGES } from '../data/agencyData';
import { Check, Shield, Zap, ArrowRight, PhoneCall } from 'lucide-react';

interface PricingPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-16 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-500/30">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Predictable Flat-Rate Retainers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Small Business IT & Tech Service Packages
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No surprise hourly billing or hidden fees. All plans include guaranteed SLA response times, threat monitoring, and executive tech leadership.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map(pkg => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl bg-slate-900 border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                pkg.popular
                  ? 'border-cyan-500 ring-2 ring-cyan-500/50 shadow-cyan-950/40'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  Most Popular For Small Businesses
                </div>
              )}

              <div className="space-y-6">
                
                {/* Title & Tagline */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-1">
                    <span>{pkg.idealFor}</span>
                    <span className="text-cyan-400">{pkg.highlight}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white">${pkg.priceMonthly.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    One-time onboarding & architecture setup: ${pkg.setupFee}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">What's Included:</span>
                  <div className="space-y-2.5">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Package Action Button */}
              <div className="pt-8 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Choose {pkg.name}</span>
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
