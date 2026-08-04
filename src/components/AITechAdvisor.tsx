import React, { useState } from 'react';
import { Sparkles, Shield, Cpu, TrendingUp, BarChart3, Loader2, CheckCircle, ArrowRight, FileCheck, RefreshCw } from 'lucide-react';
import { AIStrategyRoadmap } from '../types';

interface AITechAdvisorProps {
  onAttachToConsultation: (roadmap: AIStrategyRoadmap, industry: string) => void;
}

export const AITechAdvisor: React.FC<AITechAdvisorProps> = ({ onAttachToConsultation }) => {
  const [industry, setIndustry] = useState<string>('Healthcare & Medical Practice');
  const [teamSize, setTeamSize] = useState<string>('10 - 25 employees');
  const [primaryGoal, setPrimaryGoal] = useState<string>('Protect patient/client data and eliminate IT downtime');
  const [currentTech, setCurrentTech] = useState<string>('Local on-premise file server, basic Microsoft Office, no central backup or MFA.');
  const [securityConcern, setSecurityConcern] = useState<string>('Ransomware, phishing attacks, and HIPAA/SOC2 compliance audit.');
  const [budget, setBudget] = useState<string>('Pro Growth Tier ($1,000 - $2,500/mo)');

  const [loading, setLoading] = useState<boolean>(false);
  const [roadmap, setRoadmap] = useState<AIStrategyRoadmap | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateRoadmap = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          teamSize,
          primaryGoal,
          currentTech,
          securityConcern,
          budget
        })
      });

      const data = await response.json();

      if (data.success && data.roadmap) {
        setRoadmap(data.roadmap);
      } else {
        setError(data.error || 'Unable to generate IT strategy. Please check inputs and try again.');
      }
    } catch (err: any) {
      console.error('API Error:', err);
      setError('Connection issue. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-16 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400 border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Server-Side Gemini 3.6 AI Tech Strategist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Instant Small Business IT & Security AI Roadmap
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Enter your business parameters to generate a custom 4-pillar technology roadmap covering IT infrastructure, cybersecurity hardening, custom app/web opportunities, and data analytics.
          </p>
        </div>

        {/* Form & Result Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Form Column */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Business Profiler
              </span>
              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Tuperian AI Engine
              </span>
            </div>

            <form onSubmit={handleGenerateRoadmap} className="space-y-4">
              
              {/* Industry Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Business Industry</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="Healthcare & Medical Practice">Healthcare & Medical / Dental Practice</option>
                  <option value="Legal & Financial Services">Legal & Financial / CPA Services</option>
                  <option value="Boutique Retail & E-Commerce">Boutique Retail & E-Commerce</option>
                  <option value="Supply Chain, Logistics & Field Services">Supply Chain, Logistics & Field Services</option>
                  <option value="Hospitality & Restaurant Group">Hospitality & Restaurant Group</option>
                  <option value="Construction & Real Estate">Construction & Real Estate</option>
                  <option value="Professional Services & Consulting">Professional Services & Consulting</option>
                </select>
              </div>

              {/* Team Size */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Company Team Size</label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="1 - 5 employees">1 - 5 employees (Micro Business)</option>
                  <option value="6 - 15 employees">6 - 15 employees (Growing Business)</option>
                  <option value="16 - 35 employees">16 - 35 employees (Mid-Sized Operations)</option>
                  <option value="36 - 100+ employees">36 - 100+ employees (Established Business)</option>
                </select>
              </div>

              {/* Primary Goal */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Business Goal</label>
                <input
                  type="text"
                  value={primaryGoal}
                  onChange={(e) => setPrimaryGoal(e.target.value)}
                  placeholder="e.g. Stop cyber threats, improve team productivity..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              {/* Current Tech Stack & Pain Points */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Current Tech Stack & Friction</label>
                <textarea
                  rows={2}
                  value={currentTech}
                  onChange={(e) => setCurrentTech(e.target.value)}
                  placeholder="e.g. Using old desktop servers, spreadsheets, slow website..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Security Concerns */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Top Security Concern</label>
                <input
                  type="text"
                  value={securityConcern}
                  onChange={(e) => setSecurityConcern(e.target.value)}
                  placeholder="e.g. Ransomware, password leaks, compliance..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Analyzing IT Architecture...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Customized IT Strategy</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Result Column */}
          <div className="lg:col-span-7">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs mb-4">
                {error}
              </div>
            )}

            {!roadmap && !loading && (
              <div className="h-full min-h-[420px] rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Your AI Strategy Blueprint Will Appear Here</h3>
                  <p className="text-xs text-slate-400 max-w-md mt-1">
                    Fill out your business profile on the left to receive an immediate executive technology report backed by Tuperian Consultancy frameworks.
                  </p>
                </div>
              </div>
            )}

            {loading && (
              <div className="h-full min-h-[420px] rounded-2xl border border-slate-800 bg-slate-900 p-8 flex flex-col items-center justify-center text-center space-y-4">
                <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
                <div>
                  <h3 className="text-base font-bold text-white">Synthesizing Small Business IT Roadmap</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Analyzing cyber security parameters, cloud architecture, software needs, and data pipelines for {industry}...
                  </p>
                </div>
              </div>
            )}

            {roadmap && !loading && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
                
                {/* Executive Summary Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">AI Generated Strategy</span>
                    <h3 className="text-xl font-bold text-white mt-0.5">Executive Technology Audit</h3>
                  </div>
                  <button
                    onClick={() => onAttachToConsultation(roadmap, industry)}
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 hover:bg-cyan-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Attach to Free Consultation Call</span>
                  </button>
                </div>

                {/* Summary Banner */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-cyan-300 font-bold block mb-1">Strategic Overview:</strong>
                  {roadmap.summary}
                </div>

                {/* 4 Pillar Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  
                  {/* Pillar 1: IT Infrastructure */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                      <Cpu className="w-4 h-4" />
                      <span>1. IT & Infrastructure</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {roadmap.itInfrastructure.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pillar 2: Cyber Security */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                      <Shield className="w-4 h-4" />
                      <span>2. Cyber Security Protocol</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {roadmap.cyberSecurity.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pillar 3: Web & Custom Apps */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                      <TrendingUp className="w-4 h-4" />
                      <span>3. Web & Custom Apps</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {roadmap.webAndApp.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pillar 4: Marketing & Data */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs">
                      <BarChart3 className="w-4 h-4" />
                      <span>4. Digital Growth & Data</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {roadmap.marketingAndData.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Expected ROI Footer Box */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-cyan-400">Projected Financial & Operational ROI</span>
                    <p className="text-xs font-bold text-slate-100">{roadmap.roiEstimate}</p>
                  </div>
                  <button
                    onClick={() => onAttachToConsultation(roadmap, industry)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs hover:from-cyan-400 hover:to-blue-500 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>Book Strategy Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
