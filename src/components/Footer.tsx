import React from 'react';
import { Shield, CheckCircle2, Lock } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenConsultation: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/keiyian-farm.firebasestorage.app/o/Tuperian%20black.png?alt=media&token=9214d2bd-3bb3-472b-b80f-96478ce397e1"
                alt="Tuperian Logo"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain bg-white/90 p-2 rounded-xl shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Tuperian Agency is a premier technology consultancy delivering enterprise-grade IT infrastructure, cybersecurity defense, custom app and web engineering, digital growth marketing, and automated data analytics for growing small businesses.
            </p>
          </div>

          {/* Practice Areas Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Practice Areas</h4>
            <ul className="space-y-2 text-xs">
              {[
                'IT Consultancy',
                'Cyber Security',
                'App Development',
                'Web Development',
                'Digital Marketing',
                'Data Analysis'
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigateTab('services');
                      onOpenConsultation(item);
                    }}
                    className="hover:text-cyan-400 transition-colors cursor-pointer text-slate-400 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Certifications */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Certifications & Standards</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SOC2 Type II Audit Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>ISO 27001 Certified Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                <span>HIPAA & GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>AWS & Azure Certified Partners</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Tuperian Agency Inc. All rights reserved. Enterprise-Grade IT for Small Businesses.
          </div>
        </div>

      </div>
    </footer>
  );
};
