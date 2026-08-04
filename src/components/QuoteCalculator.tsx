import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, DollarSign, Users, Clock, Sparkles } from 'lucide-react';

interface QuoteCalculatorProps {
  onBookWithQuote: (estimatedSetup: number, estimatedMonthly: number, selectedItems: string[]) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onBookWithQuote }) => {
  const [teamSize, setTeamSize] = useState<number>(15);
  const [supportTier, setSupportTier] = useState<number>(1.0); // 1.0 = standard, 1.25 = 24/7, 1.5 = vCTO

  const [selectedServices, setSelectedServices] = useState<Record<string, boolean>>({
    it: true,
    cyber: true,
    web: false,
    app: false,
    marketing: false,
    data: true
  });

  const toggleService = (key: string) => {
    setSelectedServices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Pricing calculations
  let setupTotal = 0;
  let monthlyTotal = 0;
  const selectedLabels: string[] = [];

  if (selectedServices.it) {
    setupTotal += 490;
    monthlyTotal += 250 + (teamSize * 25);
    selectedLabels.push('Managed IT & Helpdesk');
  }
  if (selectedServices.cyber) {
    setupTotal += 350;
    monthlyTotal += 350 + (teamSize * 15);
    selectedLabels.push('Cyber Security & 24/7 EDR');
  }
  if (selectedServices.web) {
    setupTotal += 2800;
    monthlyTotal += 120;
    selectedLabels.push('Custom Web App / Portal');
  }
  if (selectedServices.app) {
    setupTotal += 4900;
    monthlyTotal += 250;
    selectedLabels.push('Custom iOS/Android Mobile App');
  }
  if (selectedServices.marketing) {
    setupTotal += 400;
    monthlyTotal += 850;
    selectedLabels.push('Local SEO & Google Ads');
  }
  if (selectedServices.data) {
    setupTotal += 1200;
    monthlyTotal += 200;
    selectedLabels.push('Power BI & Data Pipeline');
  }

  // Apply support tier multiplier
  monthlyTotal = Math.round(monthlyTotal * supportTier);

  return (
    <section id="quote" className="py-16 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-500/30">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Transparent Investment Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Small Business IT & Tech Cost Estimator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Customize your service scope below to calculate transparent upfront engineering and monthly managed IT retainers.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Column */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            
            {/* 1. Select Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-extrabold text-xs">1</span>
                <span>Select Required Practice Areas</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { key: 'it', title: 'Managed IT & Helpdesk', price: '+$250/mo + $25/user', setup: '$490 setup' },
                  { key: 'cyber', title: 'Cyber Security & EDR', price: '+$350/mo + $15/user', setup: '$350 setup' },
                  { key: 'web', title: 'Web App / Portal Engineering', price: '+$120/mo maintenance', setup: '$2,800 setup' },
                  { key: 'app', title: 'Custom Mobile App (iOS/Android)', price: '+$250/mo cloud host', setup: '$4,900 setup' },
                  { key: 'marketing', title: 'Local SEO & Paid Ads', price: '+$850/mo ad manage', setup: '$400 setup' },
                  { key: 'data', title: 'Power BI & Data Analytics', price: '+$200/mo data sync', setup: '$1,200 setup' }
                ].map((item) => {
                  const isChecked = selectedServices[item.key];
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => toggleService(item.key)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-cyan-500/10 border-cyan-500 text-white font-bold ring-1 ring-cyan-500'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{item.title}</div>
                        <div className="text-[10px] text-cyan-400 font-semibold mt-1">{item.price}</div>
                        <div className="text-[10px] text-slate-400">{item.setup}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 mt-0.5 ${
                        isChecked ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 border-slate-700'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Team Size Slider */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>Number of Team Endpoints / Devices:</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-extrabold text-sm">
                  {teamSize} Endpoints
                </span>
              </div>

              <input
                type="range"
                min={1}
                max={100}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>1 Device</span>
                <span>25 Devices</span>
                <span>50 Devices</span>
                <span>100+ Devices</span>
              </div>
            </div>

            {/* 3. Support Tier Selection */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Support Level SLA</span>
              </h3>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { value: 1.0, label: 'Standard M-F', desc: 'Business hours support (8am - 6pm)' },
                  { value: 1.25, label: 'Priority 24/7', desc: 'Round-the-clock emergency SLA' },
                  { value: 1.5, label: 'Dedicated vCTO', desc: 'Executive strategy + 24/7 response' }
                ].map(tier => (
                  <button
                    key={tier.value}
                    type="button"
                    onClick={() => setSupportTier(tier.value)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      supportTier === tier.value
                        ? 'bg-cyan-500/10 border-cyan-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{tier.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Quote Breakdown Summary Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">Live Estimate</span>
                <h3 className="text-lg font-bold text-white">Tuperian Proposal Estimate</h3>
              </div>
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>

            {/* Selected Scope Summary */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Included Scope ({selectedLabels.length})</span>
              <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                {selectedLabels.length > 0 ? (
                  selectedLabels.map((lbl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2 rounded-lg bg-slate-950 border border-slate-800">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{lbl}</span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-slate-400 italic">No services selected. Check boxes on the left.</div>
                )}
              </div>
            </div>

            {/* Numbers Display */}
            <div className="space-y-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">One-Time Setup & Onboarding:</span>
                <span className="font-extrabold text-white text-base">${setupTotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                <span className="text-slate-400 font-medium">Monthly Managed Retainer:</span>
                <span className="font-extrabold text-cyan-400 text-xl">${monthlyTotal.toLocaleString()}<span className="text-xs font-normal text-slate-400">/mo</span></span>
              </div>
            </div>

            {/* ROI Estimate Note */}
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300">
              <strong>Expected Return:</strong> Small businesses average $18,000+ in annual downtime savings and 2.8x revenue growth from optimized web/apps.
            </div>

            {/* Book Button */}
            <button
              disabled={selectedLabels.length === 0}
              onClick={() => onBookWithQuote(setupTotal, monthlyTotal, selectedLabels)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs tracking-wide shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Lock in Estimate & Schedule Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
