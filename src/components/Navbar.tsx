import React, { useState } from 'react';
import { Search, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultation: (service?: string) => void;
  onOpenDashboard: () => void;
  savedBookingsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultation,
  onOpenDashboard,
  savedBookingsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 pb-2 transition-all">
      {/* Floating Light Navbar Card (Inspo Design) */}
      <div className="max-w-7xl mx-auto bg-white text-slate-900 rounded-[28px] shadow-2xl border border-slate-100/80 px-5 sm:px-8 py-3 flex items-center justify-between relative">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('services')} 
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none shrink-0"
        >
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/keiyian-farm.firebasestorage.app/o/Tuperian%20black.png?alt=media&token=9214d2bd-3bb3-472b-b80f-96478ce397e1"
            alt="Tuperian Logo"
            className="h-14 sm:h-16 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Center Navigation Links (Inspo Nav Items) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-800">
          
          {/* Home Nav Item */}
          <button
            onClick={() => handleNavClick('services')}
            className="hover:text-[#3b52f6] transition-colors py-2 cursor-pointer"
          >
            Home
          </button>

          {/* About Nav Item */}
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-[#3b52f6] transition-colors py-2 cursor-pointer"
          >
            About
          </button>

          {/* Services Nav Item + Dropdown (Inspo Matching) */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('services')}
              className="flex items-center gap-1 hover:text-[#3b52f6] transition-colors py-2 cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400 transition-transform" />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-2xl border border-slate-100/90 overflow-hidden z-50 py-1 transition-all">
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-5 py-2.5 text-xs font-bold text-slate-800 hover:bg-[#3b52f6] hover:text-white transition-colors cursor-pointer"
                >
                  Services Overview
                </button>
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-5 py-2.5 text-xs font-bold text-slate-800 hover:bg-[#3b52f6] hover:text-white transition-colors cursor-pointer"
                >
                  Managed IT Operations
                </button>
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-5 py-2.5 text-xs font-bold text-slate-800 hover:bg-[#3b52f6] hover:text-white transition-colors cursor-pointer"
                >
                  Cyber Security Defense
                </button>
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left px-5 py-2.5 text-xs font-bold text-slate-800 hover:bg-[#3b52f6] hover:text-white transition-colors cursor-pointer"
                >
                  Custom App & Web Dev
                </button>
              </div>
            )}
          </div>

          {/* Contact Nav Item */}
          <button
            onClick={() => onOpenConsultation()}
            className="hover:text-[#3b52f6] transition-colors py-2 cursor-pointer"
          >
            Contact
          </button>

        </nav>

        {/* Right Section: Search & GET A QUOTE Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Search Icon */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50">
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search IT services, security..."
                  className="w-full bg-slate-100 text-xs text-slate-900 rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-blue-600"
                />
              </div>
            )}
          </div>

          {/* Primary CTA Button - GET A QUOTE → */}
          <button
            onClick={() => {
              handleNavClick('quote');
            }}
            className="hidden sm:flex items-center gap-2 bg-[#3b52f6] hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] cursor-pointer shrink-0"
          >
            <span>GET A QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white text-slate-900 rounded-3xl p-5 border border-slate-200 shadow-2xl space-y-3">
          <button
            onClick={() => handleNavClick('services')}
            className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
          >
            Services
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full text-left py-2 px-3 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
          >
            Contact
          </button>

          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('quote');
              }}
              className="w-full py-3 rounded-full bg-[#3b52f6] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
