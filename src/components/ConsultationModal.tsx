import React, { useState, useEffect } from 'react';
import { X, PhoneCall, CheckCircle, ShieldCheck, Loader2, Sparkles, Building, User, Mail, Phone } from 'lucide-react';
import { AIStrategyRoadmap } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledRoadmap?: { roadmap: AIStrategyRoadmap; industry: string } | null;
  prefilledQuote?: { setup: number; monthly: number; items: string[] } | null;
  onSuccessBooking: (booking: any) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
  prefilledRoadmap,
  prefilledQuote,
  onSuccessBooking
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('Healthcare & Medical');
  const [teamSize, setTeamSize] = useState('10-25 employees');
  const [servicesNeeded, setServicesNeeded] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');

  const [submitting, setSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<any | null>(null);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);

    if (prefilledService) {
      setServicesNeeded([prefilledService]);
    } else if (prefilledQuote?.items) {
      setServicesNeeded(prefilledQuote.items);
    } else {
      setServicesNeeded(['IT Consultancy', 'Cyber Security']);
    }

    if (prefilledRoadmap) {
      setIndustry(prefilledRoadmap.industry || 'Small Business');
      setNotes(`[Attached AI Strategy Roadmap]\nSummary: ${prefilledRoadmap.roadmap.summary}\nROI Target: ${prefilledRoadmap.roadmap.roiEstimate}`);
    } else if (prefilledQuote) {
      setNotes(`[Attached Quote Estimate]\nEst Upfront: $${prefilledQuote.setup.toLocaleString()}\nEst Monthly: $${prefilledQuote.monthly.toLocaleString()}/mo\nScope: ${prefilledQuote.items.join(', ')}`);
    }
  }, [prefilledService, prefilledRoadmap, prefilledQuote, isOpen]);

  if (!isOpen) return null;

  const toggleServiceChoice = (srv: string) => {
    if (servicesNeeded.includes(srv)) {
      setServicesNeeded(servicesNeeded.filter(s => s !== srv));
    } else {
      setServicesNeeded([...servicesNeeded, srv]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          industry,
          teamSize,
          servicesNeeded,
          notes,
          preferredDate,
          preferredTime
        })
      });

      const data = await response.json();

      if (data.success && data.booking) {
        setSubmittedBooking(data.booking);
        onSuccessBooking(data.booking);
      }
    } catch (err) {
      console.error('Booking failed:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Schedule Free IT Strategy Session</h2>
              <p className="text-xs text-slate-400">Speak directly with a Senior Tuperian IT Consultant</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success Confirmation */}
        {!submittedBooking ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {prefilledRoadmap && (
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0 text-cyan-400" />
                <span>AI IT Strategy Roadmap attached to this request!</span>
              </div>
            )}

            {prefilledQuote && (
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 text-cyan-400" />
                <span>Estimated Quote: ${prefilledQuote.setup.toLocaleString()} setup + ${prefilledQuote.monthly.toLocaleString()}/mo</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization *</label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder="e.g. Vance Legal Partners"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="alex@vancelegal.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="(555) 019-2834"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Practice Areas Needed</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'IT Consultancy',
                  'Cyber Security',
                  'App Development',
                  'Web Development',
                  'Digital Marketing',
                  'Data Analysis'
                ].map(srv => {
                  const isSel = servicesNeeded.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleServiceChoice(srv)}
                      className={`px-3 py-2 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer ${
                        isSel
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={e => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Preferred Time</label>
                <select
                  value={preferredTime}
                  onChange={e => setPreferredTime(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                >
                  <option value="09:00 AM">09:00 AM EST</option>
                  <option value="10:00 AM">10:00 AM EST</option>
                  <option value="01:00 PM">01:00 PM EST</option>
                  <option value="03:00 PM">03:00 PM EST</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Goals</label>
              <textarea
                rows={3}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Describe your current tech challenges, timeline, or scope..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs tracking-wide shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Recording Booking Request...</span>
                </>
              ) : (
                <>
                  <PhoneCall className="w-4 h-4" />
                  <span>Confirm Free Discovery Call Request</span>
                </>
              )}
            </button>

          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">Consultation Scheduled</span>
              <h3 className="text-2xl font-bold text-white mt-1">Discovery Call Request Received!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong className="text-white">{submittedBooking.name}</strong>. A Tuperian Senior Technology Consultant will review your business profile and contact you prior to <strong className="text-cyan-300">{submittedBooking.preferredDate} at {submittedBooking.preferredTime}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto space-y-1">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Booking Reference ID</div>
              <div className="text-lg font-mono font-extrabold text-cyan-400">{submittedBooking.id}</div>
              <div className="text-[10px] text-slate-400">Status: <span className="text-emerald-400 font-bold">{submittedBooking.status}</span></div>
            </div>

            <button
              onClick={() => {
                setSubmittedBooking(null);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
