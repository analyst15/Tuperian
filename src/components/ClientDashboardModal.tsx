import React, { useState, useEffect } from 'react';
import { X, UserCheck, Calendar, Clock, CheckCircle, Shield, Building, RefreshCw, FileText } from 'lucide-react';
import { ConsultationBooking } from '../types';

interface ClientDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedBookings: ConsultationBooking[];
  onNewBooking: () => void;
}

export const ClientDashboardModal: React.FC<ClientDashboardModalProps> = ({
  isOpen,
  onClose,
  savedBookings,
  onNewBooking
}) => {
  const [filterEmail, setFilterEmail] = useState('');
  const [fetchedBookings, setFetchedBookings] = useState<ConsultationBooking[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Sync initially with props
    setFetchedBookings(savedBookings);
  }, [savedBookings, isOpen]);

  if (!isOpen) return null;

  const handleSearchEmail = async () => {
    if (!filterEmail.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/consultations?email=${encodeURIComponent(filterEmail)}`);
      const data = await res.json();
      if (data.success && data.bookings) {
        setFetchedBookings(data.bookings);
      }
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Client Consultation Dashboard</h2>
              <p className="text-xs text-slate-400">Track your Tuperian service requests & discovery calls</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Email Lookup Bar */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={filterEmail}
              onChange={e => setFilterEmail(e.target.value)}
              placeholder="Enter work email to look up requests..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={handleSearchEmail}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shrink-0 cursor-pointer"
            >
              Search Records
            </button>
          </div>

          {/* Bookings List */}
          {fetchedBookings.length > 0 ? (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Submitted Requests ({fetchedBookings.length})
              </h3>

              {fetchedBookings.map(b => (
                <div key={b.id} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-400">{b.id}</span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{b.company} ({b.name})</h4>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase">
                      {b.status}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div>
                      <span className="text-slate-500 font-medium">Scheduled Date:</span>{' '}
                      <span className="font-bold text-slate-200">{b.preferredDate} at {b.preferredTime}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Industry:</span>{' '}
                      <span className="font-bold text-slate-200">{b.industry} ({b.teamSize})</span>
                    </div>
                  </div>

                  {b.servicesNeeded && b.servicesNeeded.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {b.servicesNeeded.map((s, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-cyan-300 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {b.notes && (
                    <div className="p-2.5 rounded-lg bg-slate-900/60 text-[11px] text-slate-400 italic">
                      {b.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center space-y-3 border border-dashed border-slate-800 rounded-xl bg-slate-950/40">
              <FileText className="w-8 h-8 text-slate-600 mx-auto" />
              <div className="text-sm font-bold text-white">No Consultations Found</div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No active bookings matched your email or browser session. Schedule a new discovery call below.
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={() => {
                onClose();
                onNewBooking();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:from-cyan-400 hover:to-blue-500 transition-colors"
            >
              + Book New Discovery Call
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
